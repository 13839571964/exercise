// 引入fs
const fs = require('fs')

// // 调用方法读取文件
// fs.readFile('../md/1.md', (err, data) => {
//     if (err) throw err
//     console.log(data.toString())
// })

// 使用Promise封装
let p = new Promise((resolve, reject) => {
    fs.readFile('../md/1.md', (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

p.then(res => {
    console.log(res.toString())
}).catch(err => console.log(err))