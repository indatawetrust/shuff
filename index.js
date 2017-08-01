const r = require('randa');
const rand = () => Math.floor(Math.random() * 9999999);

const shuff = config => {
  const redis = require('redis'), client = redis.createClient(config);

  const back = {
    clean: () => {
      client.del(config.prefix || 'shuff');
    },
    add: list => {
      const args = [];

      list = Array.isArray(list) ? list : [list];

      list = list
        .map(l => {
          return [rand(), l];
        })
        .reduce((a, b) => a.concat(b));

      return new Promise((resolve, reject) => {
        client.zadd([config.prefix || 'shuff'].concat(list), (err, response) => {
          if (err) reject(err);

          resolve(response);
        });
      });
    },
    generate: limit => {
      const args = [config.prefix || 'shuff', '+inf', '-inf', 'LIMIT', 0, limit];

      return new Promise((resolve, reject) => {
        new Promise((res, rej) => {
          client.zrange([config.prefix || 'shuff', 0, -1], (err, list) => {
            list = r.shuffle(list, Math.floor(list.length / (config.blow || 10)));

            const promises = [];

            list.map(l => {
              promises.push(
                new Promise((resolve, reject) => {
                  client.zrem([config.prefix || 'shuff', l], (err, data) => {
                    if (err) reject();

                    client.zadd([config.prefix || 'shuff', rand(), l], (err, data) => {
                      if (err) reject();

                      resolve();
                    });
                  });
                })
              );
            });

            Promise.all(promises).then(res);
          });
        }).then(() => {
          client.zrevrangebyscore(args, function(err, response) {
            if (err) reject(err);

            resolve(response);
          });
        });
      });
    },
  };

  return back;
};

module.exports = shuff;
