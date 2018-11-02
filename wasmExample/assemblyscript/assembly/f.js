

function f(x){
    if (x === 1 || x === 2) {
        return 1;
    }
    return f(x - 1) + f(x - 2)
}
var sdate = Date.now()
console.log(`${f(50)}--------${Date.now() - sdate}`)