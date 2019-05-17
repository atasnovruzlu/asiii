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

getJSONFile();