import test from 'ava';
import ids from './ids';
let shuff = require('./index')({});

test('add', async t => {
  await shuff.add(require('./ids').map(({_id}) => _id));

  let list = await shuff.generate(50);

  list = list.map(l => {
    return ids.filter(({_id}) => l == _id)[0] ? true : false;
  });

  t.is(list.every(el => el), true);
});
