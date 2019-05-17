// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("bir hata olusdu"))
//       }
//     }, 3000);
//   })
// }

// getData("asiman").then(function(response){
// console.log("gelen deger :  " + response);
// }).catch(function(err){
//   console.error(err  + " girdiyiniz string deyil maalesef")
// })



//  ASYNC and await

// async function test(data){
//   // return new Promise((resolve,reject)=>{
//   //   resolve(data);
//   // })
// let promise = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("bu bir degerdir!!!")
//   }, 5000);
// })

// let response = await promise;
// console.log(response);
// console.log("Naber");

// }
// test("Merhaba")



// async function testData(data){
//   let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data)
//       }
//       else{
//         reject(new Error("string deger eksik"))
//       }
//     }, 5000);
//   })
//   const response = await promise;
//   return response;
// }
// testData("atash")
// .then(data => console.log(data))
// .catch(err => console.log(err))


// async function getcurrency(url){
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
// }
// getcurrency("https://api.exchangeratesapi.io/latest")
// .then(asiman => console.log(asiman));




// PROMISE and FETCH

// function getData(data) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data)
//             }

//             else{
//                 reject(data);
//             }

//             // reject("Olumlu deyil");

//         }, 3000);
//     })
// }
// getData("Asiman").then((response)=>{
//     console.log("Olumlu sonuc ",response)
// }).catch((err)=>{
//     console.error("Olumsuz sonuc ",err)
// })

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Number bir sayi girin!!!"));
            }
        }, 3000);
    })
}

addTwo("asdf")
.then(function(response){
    console.log(response);
    return response + 2;
}).then(function(response2){
    console.log(response2)
}).catch(err => console.error(err))