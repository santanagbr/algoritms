function binarySearch (key, vector) {
  let low = vector[0]
  let high = vector[vector.length - 1]

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (key === mid) return mid
    else if (key > mid) low = mid + 1
    else high = mid - 1
  }
}

function recursiveBinarySearch (key, vector, start = 0, final = (vector.length - 1)) {
  const mid = Math.floor(((start + final) / 2))

  if (key === vector[mid]) return mid
  else if (start - final === 0) return -1
  else if (key > vector[mid]) return recursiveBinarySearch(key, vector, mid + 1, final)
  else if (key < vector[mid]) return recursiveBinarySearch(key, vector, start, mid)
}

module.exports = {
  binarySearch,
  recursiveBinarySearch
}
