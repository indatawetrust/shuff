let shuff = require('./index')({ blow: 100 });

shuff.clean()

console.time('add');
shuff.add(require('./ids').map(({_id}) => _id)).then(() => {
  console.timeEnd('add');
});

console.time('generate');
shuff.generate(5).then(() => {
  console.timeEnd('generate');
});
