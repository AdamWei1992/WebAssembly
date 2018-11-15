

function loadWebAssembly (path, imports = {}) {
    return fetch(path)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return WebAssembly.compile(buffer)
        })
        .then(module => {
            imports.env = imports.env || {}
            // 开辟内存空间
            imports.env.memoryBase = imports.env.memoryBase || 0
            if (!imports.env.memory) {
                imports.env.memory = new WebAssembly.Memory({ initial: 256 })
            }
            // 创建变量映射表
            imports.env.tableBase = imports.env.tableBase || 0
            if (!imports.env.table) {
                // 在 MVP 版本中 element 只能是 "anyfunc"
                imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
            //console.log(module)
            // 创建 WebAssembly 实例
            return new WebAssembly.Instance(module, imports)
        })
}

// loadWebAssembly('./wasm/c.wasm').then(instance => {
//     var fibonacci = instance.exports._func
//     var cdate = Date.now()
//     console.log(`${fibonacci(40)}----c.wasm----${Date.now() - cdate}`)
// })

// loadWebAssembly('./wasm/ts.wasm').then(instance => {
//     var fibonacci = instance.exports.f
//     var tdate = Date.now()
//     console.log(`${fibonacci(40)}----ts.wasm----${Date.now() - tdate}`)
// })

// function f(x){
//     if (x === 1 || x === 2) {
//         return x;
//     }
//     return f(x - 1) + f(x - 2)
// }
// var jdate = Date.now()
// console.log(`${f(40)}----js----${Date.now() - jdate}`)

// loadWebAssembly('./wasm/tsParam.wasm', {
//     fibonacciParam: {
//         'window.alert': window.alert
//     }
// }).then(instance => {
//     var fibonacci = instance.exports.f
//     var tdate = Date.now()
//     fibonacci(48)
//     console.log(`----ts-param.wasm----${Date.now() - tdate}`)
//     //console.log(`${fibonacci(48)}----ts.wasm----${Date.now() - tdate}`)
// })

import('../wasm/ts.wasm').then(module => {
    console.log('fibonacci:---' + module.f(40))
});