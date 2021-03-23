const dom = document.querySelector('button')
dom.onclick = function () {
    console.log(import('./index.js'))
    import('./index.js').then(res => {
        console.log(res)
        res.alertFn()
    })
}