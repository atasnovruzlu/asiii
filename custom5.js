function getTextFile() {
    fetch("fetch.txt")
        .then((response) => {
            return response.text()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
// getTextFile();

function getJSONFile() {
    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// getJSONFile();


function getExternalApi() {
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}


// getExternalApi();






class Request {
    // GET
    get(url) {  //Get request
        return new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        })


    }


    // POST

    post(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data =>resolve(data))
                .catch(err => reject(err))
        })



    }
}
const request = new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/todos")
    .then(data => {
        albums = data;
        console.log(albums);

    })
    .catch(err => console.log(err))




request.post("https://jsonplaceholder.typicode.com/todos", {
    Userid: 11,
    id : 10,
    name  : "Atash"
}).then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err)
)

// console.log(albums)



//  PROMISE GET

