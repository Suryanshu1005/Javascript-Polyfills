/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const promiseArray = Array.from(iterable).map(item => 
      item instanceof Promise ? item : Promise.resolve(item)
    )

    const result = []
    let resultCount = 0;

    if(promiseArray.length === 0){
      return resolve([])
    }

    promiseArray.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = value
        resultCount++;

        if(result.length === promiseArray.length){
          resolve(result)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}
