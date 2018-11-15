

var myModule = require('./module.js')


myModule('c', {
    env: {
        memoryBase: 256,
    }
}).then(instance=>{
    console.log(instance)
    var cdate = Date.now()
    console.log(`${instance.exports._func(45)}----c.wasm----${Date.now() - cdate}`)
    //console.log(`${instance.instance.exports._func(45)}----c.wasm----${Date.now() - cdate}`)
    console.log('abc')
})

myModule('ts').then(instance=>{
    var tdate = Date.now()
    console.log(`${instance.exports.f(45)}----ts.wasm----${Date.now() - tdate}`)
})

function f(x){
    if (x === 1 || x === 2) {
        return 1;
    }
    return f(x - 1) + f(x - 2)
}
var jdate = Date.now()
console.log(`${f(45)}----js----${Date.now() - jdate}`)

//接入webpack
// import('./wasm/c.wasm').then(module=>{
//     return WebAssembly.instantiate(module, {
//         env: {
//             memoryBase: 256,
//         }
//     })
// }).then(module => {
//     console.log('module------'+module)
//     console.log(module._func(20))
// });

// import('./wasm/c.wasm').then(module => {
//     console.log('module------'+module)
//     console.log(module._func(20))
// });
//
// import('./wasm/ts.wasm').then(module => {
//     console.log('fibonacci:---' + module.f(40))
// });

