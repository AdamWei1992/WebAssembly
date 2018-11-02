

const fs = require('fs')

function toUint8Array(buf) {
    var u = new Uint8Array(buf.length);
    for (var i = 0; i < buf.length; ++i) {
      u[i] = buf[i];
    }
    return u; 
}
module.exports = (filename, imports)=> {
    // 读取 wasm 文件，并转换成 byte 数组
    const buffer = toUint8Array(fs.readFileSync(__dirname + `/dist/${filename}.wasm`));
    // 编译 wasm 字节码到机器码
    return WebAssembly.compile(buffer).then(module => {
            // 实例化模块
            return new WebAssembly.Instance(module, imports)
        })
    // return WebAssembly.instantiate(buffer, imports)
}
