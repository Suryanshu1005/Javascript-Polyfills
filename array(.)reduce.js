Array.prototype.myReduce = function(callback, initialValue) {
        if(this == null){
            throw new TypeError("Array.prototype.myReduce called on null or undefined");
        };
        
        if(typeof callback !== 'function'){
            throw new TypeError("Callback must be a function");
        };
        
        const array = Object(this);
        let acc;
        const length = array.length >>> 0;
        let startIndex = 0;
        
        if(array.length === 0 && arguments.length < 2){
            throw new TypeError("Reduce of empty array with no initial value");
        }
        
        if (arguments.length >= 2) {
            acc = initialValue
        }; 
        else{
            acc = array[0];
            startIndex = 0;
        };
        
        for(let i = startIndex; i< length; i++){
            acc = callback(acc, array[i], i, array)
        };
        
        return acc;
    };

const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // 10
