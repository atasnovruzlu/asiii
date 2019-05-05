document.querySelector(".start").addEventListener("click", () => {
    let i = 0;
    let setInter = setInterval(() => {
        i++;
        document.querySelector("#demo").innerHTML = i;
        if (i == 10) {
            window.location = "https://www.youtube.com";
        }

    }, 1000);
    document.querySelector(".end").addEventListener("click", () => {
        clearInterval(setInter);
        document.querySelector("#demo").innerHTML = "";
    })
})


// Call Back funksiyalar
const langs = ["Python", "C#", "JavaScript", "Java"];
langs.forEach((element) => {

    console.log(element.toUpperCase() + " dili");
});
document.getElementById("btn").addEventListener("click", () => {
    alert()
})


function prosess1(callback) {
    setTimeout(function prosess1() {
        console.log("prosess1");
        callback();

    }, 3000);

}

function prosess2() {
    setTimeout(function () {
        console.log("prosess2")
    }, 1000)
}
prosess1(prosess2);



// arrow,bind, this


const person = {
    "age": 25,
    tellAge: function (age) {
        console.log(this, this.age);
    }
}
person.tellAge(22)


// Get

class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();

    }
    get(url, callback) {
        this.xhr.open("GET", url); //Elaqe aciq

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            } else {
                callback("Hata oldu!!!",null)
            }
        }
        this.xhr.send();
    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {


    if (err === null) {
        console.log(response);
    } else {
        console.log(err)
    }
});