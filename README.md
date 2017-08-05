# shuff

[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/shuff.svg)](https://travis-ci.org/indatawetrust/shuff)

### init
```js
let shuff = require('shuff')({
  // redis client configuration
  blow: 10
});

```
### add
```js
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
```
### remove
```js
shuff.remove("Greene")
// or
shuff.remove([
  "Glover",
  "Lewis"
])
```
### and generate
```js
shuff.generate(5).then(console.log)
// sample log
[
  "Miller",
  "Glover",
  "Kidd",
  "Olsen",
  "Mcclain"
]
```
