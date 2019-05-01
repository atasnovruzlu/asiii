// function test1(callback){
//   setTimeout(() => {
//     console.log('test1 ');
//     callback();
//   }, 4000);
// }
// function test2(){
//   setTimeout(() => {
//     console.log('test2 ')
//   }, 2000);
// }

// test1(test2);

// let lists = document.querySelectorAll("li");
//     let i = 5;
//     function hide(callback){

//         setTimeout(() => {
//             i -- ;
//             lists[i].style.display = "none";
//             callback();
//         }, i*1000);
//     }
//     function againCall(){
//         hide(againCall);
//     }

//     hide(againCall);

// document.getElementById("btn").addEventListener("click",function(){

//     let xhr = new XMLHttpRequest();
// xhr.onprogress = function(params) {
//        console.log("Success",this.readyState)
// }
//     xhr.onload = function(){

//         if (this.status === 200) {
//          document.getElementById("result").textContent = this.responseText;
//         }
//     }
//     // xhr.onreadystatechange = function(){
//     //     //console.log(this.readyState);
//     //    // console.log(this.status);

//     //    if (this.status == 200 && this.readyState == 4) {
//     //        console.log(this.responseText);
//     //    }
        
//     // }
//     xhr.open("GET","example.txt",true);
//     xhr.send();
   
// })

//this section is async function 

// async function asynchronous(data){
//     return await new Promise(function(resolve,reject){
//         if(typeof data === 'string'){
//             resolve(data);
//         }
//         else{
//             reject(null);
//         }
//     })
// }
// asynchronous(21)
// .then(response => response)
// .then(resp => console.log(resp))
// .catch(err => console.group(err));



// JSON VE AJAX

document.getElementById("btn").addEventListener("click",getALlEmployers);

function getALlEmployers(){
    let xhr = new XMLHttpRequest();

    
    xhr.onload = function (){
        
        let list = document.getElementById("empl");

        if (this.status == 200) {
            const employees = JSON.parse(this.responseText);
            employees.forEach(element => {
                list.innerHTML += `
                <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.completed}</td>
                <td><button onclick=SilBtn(); class="sil btn btn-info pl-4 pr-4 pt-2 pb-2">sil</button></td>

                </tr>
                `
            });
        }
    }
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);



    xhr.send();
}


function SilBtn(e){
       
}
