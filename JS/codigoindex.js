

//document.querySelector('#boton').addEventListener('click', traerDatosConFetch() );
//document.querySelector('#boton').addEventListener('click', PruebaMozilla() );

PruebaMozilla();

function mostrar() {
  document.getElementById("sidebar").style.width = "100%";
  document.getElementById("contenido").style.marginLeft = "300px";
  document.getElementById("abrir").style.display = "none";
  document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("contenido").style.marginLeft = "0";
  document.getElementById("abrir").style.display = "inline";
  document.getElementById("cerrar").style.display = "none";
}

function PruebaMozilla(){
    //const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const requestURL = '    https://randomuser.me/api/?nat=es,us&gender=female';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    ShowTest(request.response);
  }
}


function ShowTest(jsonObj){
    const objtest = jsonObj['results'];
    let ob = objtest[0];
    /*
    let l = objtest[0].picture;
    console.log(ob);
    console.log(l.large)
    */
    document.getElementById('profile').src = ob.picture.large;
    document.getElementById('nombre').innerHTML = ob.name.first + " " + ob.name.last;
    document.getElementById('direccion').innerHTML = ob.location.street.name + " " + ob.location.street.number 
    + "<span id='ciudad'> asdsa </span>" ;
    document.getElementById('ciudad').innerHTML = ob.location.city + "/" + ob.location.country; 
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
*/




/*
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