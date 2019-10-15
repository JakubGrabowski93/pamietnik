
var input, a, i;
var link;
var widok,nazwa,info;
var formInput;
var text = "";
var conceptName;
var tablicaEntry = [];
var frm,link;
var table1,row,cell1,cell2;
var x = document.getElementById("dodaj");
var tekst2, data4;

var opcja=0;
var nowaTablica = [];
function zmniejsz(multiplier) {
  if (document.getElementById("container").style.fontSize == "") {
    document.getElementById("container").style.fontSize = "1.0em";
  }
  if (document.getElementById("container").style.fontSize < "0.5em") {alert("Za mała czcionka");} else
  document.getElementById("container").style.fontSize = parseFloat(document.getElementById("container").style.fontSize) + (multiplier * 0.1) + "em";
}
function zwieksz(multiplier) {
  if (document.getElementById("container").style.fontSize == "") {
    document.getElementById("container").style.fontSize = "1.0em";
  }
  if (document.getElementById("container").style.fontSize > "2em") {alert("Za duża czcionka");} else
  document.getElementById("container").style.fontSize = parseFloat(document.getElementById("container").style.fontSize) + (multiplier * 0.1) + "em";
}
$("plustext").addEvent("click", function() {resizeText(1);});
$("minustext").addEvent("click", function() {resizeText(-1);});

function onSubmit() {
tekst2 = document.getElementById("tekstId").value;
data4 = document.getElementById("data").value;
nowaTablica.push(tekst2,data4);
conceptName = $('#selecto :selected').val();
table1 = document.getElementById("tabela");
if(conceptName==0){ link = "<img id=\"zdj1\" src =" + nowaTablica[0] + " class=\"img-fluid img-thumbnail\"  >";
row = table1.insertRow(1);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell3 = row.insertCell(2);
cell4 = row.insertCell(3);
cell5 = row.insertCell(4);
cell6 = row.insertCell(5);
cell2.innerHTML = nowaTablica[1];
cell3.innerHTML = nowaTablica[2];
cell1.innerHTML = link;
cell4.innerHTML = tekst2;
cell5.innerHTML = data4;
cell6.innerHTML = ('<input type="button" class="btn btn-danger" value="Usuń wpis"/>'); } else if

(conceptName==1) { link = "<img id=\"zdj2\" src =" + nowaTablica[3] + ">";
row = table1.insertRow(1);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell3 = row.insertCell(2);
cell4 = row.insertCell(3);
cell5 = row.insertCell(4);
cell6 = row.insertCell(5);
cell2.innerHTML = nowaTablica[4];
cell3.innerHTML = nowaTablica[5];
cell1.innerHTML = link;
cell4.innerHTML = tekst2;
cell5.innerHTML = data4;
cell6.innerHTML = ('<input type="button" value="Usuń wpis"/>');  } else if

(conceptName==2) { link = "<img id=\"zdj3\" src =" + nowaTablica[6] + ">";
row = table1.insertRow(1);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell3 = row.insertCell(2);
cell4 = row.insertCell(3);
cell5 = row.insertCell(4);
cell6 = row.insertCell(5);
cell2.innerHTML = nowaTablica[7];
cell3.innerHTML = nowaTablica[8];
cell1.innerHTML = link;
cell4.innerHTML = tekst2;
cell5.innerHTML = data4;
cell6.innerHTML = ('<input type="button" value="Usuń wpis"/>');  } else if

(conceptName==3) { link = "<img id=\"zdj4\" src =" + nowaTablica[9] + ">";
row = table1.insertRow(1);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell3 = row.insertCell(2);
cell4 = row.insertCell(3);
cell5 = row.insertCell(4);
cell6 = row.insertCell(5);
cell2.innerHTML = nowaTablica[10];
cell3.innerHTML = nowaTablica[11]; 
cell1.innerHTML = link;
cell4.innerHTML = tekst2;
cell5.innerHTML = data4;
cell6.innerHTML = ('<input type="button" value="Usuń wpis"/>');  } else if
(conceptName==4) { link = "<img id=\"zdj5\" src =" + nowaTablica[12] + ">";
row = table1.insertRow(1);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell3 = row.insertCell(2);
cell4 = row.insertCell(3);
cell5 = row.insertCell(4);
cell6 = row.insertCell(5);
cell2.innerHTML = nowaTablica[13];
cell3.innerHTML = nowaTablica[14];
cell1.innerHTML = link;
cell4.innerHTML = tekst2;
cell5.innerHTML = data4;
cell6.innerHTML = ('<input type="button" value="Usuń wpis"/>');
}

$('input[type="button"]').click(function(e){
  $(this).closest('tr').remove()
})
$("#selecto").empty();
opcja=0;
nowaTablica=[];
$('#data').trigger("reset");
$('#podroz').trigger("reset");
$("#selecto").prop("hidden", true);
$("#tekstId").prop("disabled", true);
$("#data").prop("disabled", true);
$("#dodaj").prop("disabled", true);
}
  function pokaz(){
    $("#podroz").submit(function(e){
      e.preventDefault();
    });
    $("#podroz").submit(function() { return false; });
link = document.getElementById("myInput").value;
if (link.trim() ==="") { alert("Wpisz poprawną nazwę") } else {
  document.getElementById("selecto").removeAttribute("hidden");
link = "http://api.geonames.org/wikipediaSearch?title=" + link +"&maxRows=5&lang=pl&username=tpt_olsztyn";
$(document).ready(function () {
  $.ajax({
      type: "GET",
      url: link,
      dataType: "xml",
      success: xmlParser,
      error: function () {alert("Sprobuj jeszcez raz");}
     });
  });
function xmlParser(xml) {
$('#selecto')
    .find('option')
    .remove()
    .end();
    $(".forma").append('<option id="first">Wybierz jedno bądź wpisz nową nazwę</option>');
$(xml).find("entry").each(function (){
      $(".forma").append('<option value=" '+opcja+' ">' +  ' ' +$(this).find("title").text() +   ' ' + $(this).find("countryCode").text() + '</option>');
     widok = $(this).find('thumbnailImg').text();
      nazwa = $(this).find('title').text();
     info = $(this).find('summary').text();
nowaTablica.push(widok,nazwa,info);
opcja++;
});
}
}
}

function tekst() {
  $('#selecto').find('#first').remove();
  document.getElementById("tekstId").removeAttribute("disabled");
}
function data_wlacz() {
  if ((document.getElementById("tekstId").value.length) >0) document.getElementById("data").removeAttribute("disabled");}

  function styl_podrozniczy() {
  $("#tytul").css({"background-image": "url(\"chiny.jpg\")", "color": "white"});
  $("#tlo").css({"background-color":"#4BB462"});
  $('thead').removeClass('table-warning');
  $('thead').addClass('table-dark');
  $("#tytul2").css({"color": "white"});
 }
 function styl_wakacyjny() {
  $("#tytul").css({"background-image": "url(\"wakacje.jpg\")", "color": "#ffd102"});
  $("#tlo").css({"background-color":"rgb(61, 184, 255)"});
  $('thead').removeClass('table-dark');
  $('thead').addClass('table-warning');
  $("#tytul2").css({"color": "#ffd102"});
 }


  function data_validation() {
  var datka = new Date(document.getElementById("data").value);
   var datka2 = datka.getMonth();
   var datka3 = datka.getDate();
   var datka4 = datka.getFullYear();
   if ((datka2 && datka3 && datka4) > -1) document.getElementById("dodaj").removeAttribute("disabled"); else $("#dodaj").prop("disabled", true);
   }




