console.log("Promise in JS");

/* Promise
    1.resolve
    2.reject
    3.pending   */


function fun1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const err = true;

            if (!err) {
                console.log("Function1:Your promise has been resolved");
                resolve("fulfilled");
            } else {
                console.log("Function1:Your promise has not been resolved");
                reject("Sorry not fulfilled");
            }
        }, 2000);
    })
}

fun1().then(function (done) {
    console.log("Thanks for resolving "+ done);
}).catch(function (err) {
    console.log("Very bad "+err);
})

// Function inside then is resolve and function inside catch is reject
