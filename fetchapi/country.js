function populateData(){

    let name=document.querySelector("#cname").value;

    var request=new XMLHttpRequest();
    request.open("get",`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState==4){
             if ((request.status >= 200) & (request.status < 300)){
                var data = JSON.parse(request.responseText);
                console.log(data);
            
            
            let c_name = data[0].name;
            let flag=data [0].flag;                   
            let population=data[0].population;   //
            let currency=data[0].currencies[0].name;

        
             var html_data="";
            html_data+=`<div class="card" style="width: 18rem;">
            <img src="${flag}" class="card-img-top" alt="...">
            <div class="card-body">

            <h3>country name:${c_name}</h3>
            <h3>population:${population}</h3>
            <h3> currency:${currency}</h3>




              <p class="card-text"></p>
            </div>
          </div>`
            
            
      document.querySelector("#result").innerHTML=html_data      
            
            
            }
       
            fetch("https://restcountries.eu/rest/v2/name/usa")
            .then((resp) => resp.json())
              .then((data) => populateData(data))
       
       
       
       
       
       
       
       
        }

    }



}