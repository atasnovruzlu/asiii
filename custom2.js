document.querySelector("#change").addEventListener("click", function () {

    let xhr = new XMLHttpRequest();


    xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
    xhr.onload = function () {

        if (this.status == 200) {
            let respTExt = JSON.parse(this.responseText);
            let tl = respTExt.rates.TRY;
            let usd = respTExt.rates.USD;

            let amount = Number(document.getElementById("amount").value);
            let result = tl * amount;
            document.querySelector("#tl").value = result;
            console.log(amount, tl);
            let result2 = usd * amount;
            document.querySelector("#usd").value = result2;
            console.log(amount, usd);

            
        }

    }


    xhr.send();

})