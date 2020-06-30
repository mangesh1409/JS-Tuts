console.log('Iterators');

const myArray = ['apple', 'orange', 'banan', 'mango'];
console.log("My Array is ", myArray);

function fruitsIterators(myArray) {
    let index = 0;
    return {
            next: function () {
            if (index < myArray.length) {
                return {
                    value: myArray[index++],
                    done: false
                }
                //index++;
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let fruits=fruitsIterators(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value)
console.log(fruits.next().value)

// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);