/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let isWaiting = false;
  return function(...args){
    if(!isWaiting){
        isWaiting = true;
        func.apply(this, args)
      setTimeout(() => {
        isWaiting = false
      }, wait)
    }
  }
}
