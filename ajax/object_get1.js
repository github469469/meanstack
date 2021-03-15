
function displayData() {
let name = document.querySelector("#cname").value

// alert("inside function")
var request = new XMLHttpRequest()
// request.open("get", `https://restcountries.eu/rest/v2/name/${name}`)
request.open("get", `https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
request.send()
request.onreadystatechange = () => {
if (request.readyState == 4) {
if ((request.status >= 200) & (request.status < 300)) { let data=JSON.parse(request.responseText) 
    console.log(data); 
    let c_name=data[0].name; let flag=data[0].flag; let population=data[0].population; let
    currency=data[0].currencies[0].name; // console.log(`country name ${c_name}`); // console.log(`flag ${flag}`); //
    console.log(`population=${population}`); // console.log(`currencies ${currency}`); //country name flag population
    
     let html_data=""
    html_data+=`<div class="card" style="width: 18rem;">
    <img src="${flag}" class="card-img-top" alt="...">
    <div class="card-body">
        <h3>country_name: ${c_name}</h3>
        <h3>population: ${population}</h3>
        <h3>currency: ${currency}</h3>
    </div>
    </div>`
    document.querySelector("#result").innerHTML=html_data;

    }
    }
    }
    }