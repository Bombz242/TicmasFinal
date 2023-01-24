

//document.querySelector('#boton').addEventListener('click', traerDatosConFetch() );




document.querySelector('#boton').addEventListener('click', PruebaMozilla() );


function PruebaMozilla(){

    console.log ("MOzila");

    
    //const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const requestURL = '    https://randomuser.me/api/?nat=es,us&gender=female';
    


    const request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;

    //populateHeader(superHeroes);
    //showHeroes(superHeroes);
    
    
    ShowTest(request.response);

    //console.log (request.response);
  }
}





function ShowTest(jsonObj){

    //const heroes = jsonObj['members'];
    const objtest = jsonObj['results'];



   // console.log (objtest[0]);



    let ob = objtest[0];

    /*
    let l = objtest[0].picture;

    console.log(ob);

    console.log(l.large)

*/

    //document.getElementById('profile').innerHTML = ob;
    document.getElementById('profile').src = ob.picture.large;


    document.getElementById('nombre').innerHTML = ob.name.first + " " + ob.name.last;









   // for (var i = 0; i < ob.length; i++) {



        //let textContent = ob[i];

        //console.log (textContent);


/*
        for (var j = 0; j < superPowers.length; j++) {
            superPowers[j];
        }*/





        /*
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
    
        const superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
          const listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
    
        section.appendChild(myArticle);*/
      }











/*
//CON JQUERY
$.ajax({
    
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        console.log("AJAX");
      console.log(data);

      console.log (data);
    }
  });

*/


  /*
$(document).ready(function () {
			
    $('#ajaxBtn').click(function(){
       $.ajax('/jquery/getdata',   // request url
       {            
           success: function (data, status, xhr) {    // success callback function
                   $('p').append(data);
           }
       });
    });

   });

   */

/*

function traerDatosConFetch(){

const direccion = "https://randomuser.me/api/";

console.log ("TrayendoFETCH");

fetch(direccion)
.then(request => request.text () )
.then(printData => console.log(printData) );

}


function traerDatosConnAJAX(){
    console.log ("TrayendoAJAX");

  const xhhtp = new XMLHttpRequest();

  xhhtp.open('get', 'https://randomuser.me/api/', true );

  xhhtp.send();

  xhhtp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
          //console.log (this.responseText);


          let datos = JSON.parse(this.responseText);
          
          console.log( datos);

          for (item in datos){
            console.log (item);
          }

          
      }
  }



}

*/