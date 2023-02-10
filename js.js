
    let container= document.getElementById('container');
    
    const request = new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v2/name/india?fullText=true");
    request.send();


    request.addEventListener("load",function(){
       const data=this.responseText; 
       //this is in jason format  
       console.log(data);

       //this is in java script object
       const [datajsobj]=JSON.parse(this.responseText);
       console.log(datajsobj);

       let htmldata= `
       
       <div class="body-title">
           <h2 id="name">${datajsobj.name}</h2>
           <div class="flag">
               <img src="${datajsobj.flag}" style="width:230px ;" alt="${datajsobj.name} flag">
           </div>
           <div class="nativename"><hr>
               ${datajsobj.nativeName}
               <h3 class="nativename">nativename</h3>
           </div><hr>
           
       </div>
       <div class="footer" style="display:inline;">
           <div id="capital"> ${datajsobj.capital}
               <h3 class="capital">capital</h3>    
           </div>
           <div class="currrency"><hr>
               ${datajsobj.currencies}
               <h3 class="currencies">currencies</h3>
           </div>
           <div class="region"><hr>
               ${datajsobj.region}
               <h3 class="region">region</h3>
           </div>
           <div class="population"><hr>
               ${datajsobj.population}
               <h3 class="population">population</h3>
           </div>
       </div>
   </div>

       `;
       
       container.insertAdjacentHTML("afterbegin",htmldata)
       
    })