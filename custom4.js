function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("bir hata olusdu"))
      }
    }, 3000);
  })
}

getData("asiman").then(function(response){
console.log("gelen deger :  " + response);
}).catch(function(err){
  console.error(err  + " girdiyiniz string deyil maalesef")
})