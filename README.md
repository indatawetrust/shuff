# shuff

[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/shuff.svg)](https://travis-ci.org/indatawetrust/shuff)

```js
let shuff = require('shuff')({});

shuff.add("Greene")
// or
shuff.add([
  "Miller",
  "Mcintyre",
  "Kidd",
  "Gentry",
  "Mcclain",
  "Chan",
  "Bolton",
  "Britt",
  "Padilla",
  "Harmon",
  "Kinney",
  "Olsen",
  "Wells",
  "Price",
  "Jefferson",
  "Obrien",
  "Whitaker",
  "Glover",
  "Lewis",
  "Rosa"
])

shuff.generate(5).then(console.log)

```
