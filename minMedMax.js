const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min, mid, max;
  if (n1 <= n2 && n1 <= n3 && n2 <= n3) {
    min = n1
    mid = n2
    max = n3
  } else if (n1 <= n2 && n1 <= n3 && n3 <= n2) {
    min = n1
    mid = n3
    max = n2
  } else if (n2 <= n1 && n2 <= n3 && n1 <= n3) {
    min = n2
    mid = n1
    max = n3
  } else if (n2 <= n1 && n2 <= n3 && n3 <= n1) {
    min = n2
    mid = n3
    max = n1
  } else if (n3 <= n1 && n3 <= n2 && n1 <= n2) {
    min = n3
    mid = n1
    max = n2
  } else if (n3 <= n1 && n3 <= n2 && n2 <= n1) {
    min = n3
    mid = n2
    max = n1
  }
  const obj = { min, mid, max }
  return obj
}
module.exports = minMedMax
