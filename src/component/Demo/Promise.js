// const sum  = (a,b,cb) => {
//     setTimeout(()=>{
//         cb(a + b)
//     },5000)
// }
// sum(2,3, (result) => {
//     square(result,(val)=>{
//         console.log(val)
//     })
// })
// const square = (a,cb) => {
//     setTimeout(()=>{
//         let value = Math.sqrt(a)
//         cb(value)
//     },3000)
// }
// square(3,(value)=>{
//     console.log(value)
//     sum(2,value,(res)=>{
//         console.log(res)
//     })
// })
// console.log(square(3,4))
function square(num){
    return new Promise((res,rej) => {
        setTimeout(() => {
            let s = Math.sqrt(num)
            res(s)
        },2000)
    })
}
square(100)
.then((res)=>{
    return res * 5
})
.then((res) => {
    console.log(res)
})
