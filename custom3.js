document.querySelector(".start").addEventListener("click",()=>{
    let i=0;
    let setInter = setInterval(() => {
        i++;
       document.querySelector("#demo").innerHTML = i;
       if(i==10){
            window.location = "https://www.youtube.com";
       }
       
    }, 1000);
    document.querySelector(".end").addEventListener("click",()=>{
        clearInterval(setInter);
    })
})


// Call Back funksiyalar



