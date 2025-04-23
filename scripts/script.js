const primaryHeader = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const nacObserver = new IntersectionObserver((entries) => {
  primaryHeader.classList.toggle('sticking', entries[0].isIntersecting)
}, {rootMargin: "150px 0px 0px 0px"});

nacObserver.observe(scrollWatcher)


function login(){
  
  var A = document.getElementById("input").value
  var B = document.querySelector(".input2").value

        // Verificar combinações válidas usando ||
        if (
            (A === "Fernando" && B === "1234") || 
            (A === "Gustavo" && B === "abcd") || 
            (A === "Maria" && B === "teste123")
        ) {
            alert("Logado");
        } else {
            alert("Usuário ou senha erradas");
        }
 
};

var senha = $('#senha');
var olho= $("#olho");

olho.mousedown(function() {
senha.attr("type", "text");
});

olho.mouseup(function() {
senha.attr("type", "password");
});
// para evitar o problema de arrastar a imagem e a senha continuar exposta,
//citada pelo nosso amigo nos comentários
$( "#olho" ).mouseout(function() {
$("#senha").attr("type", "password");
});

//////////////////////////////////////////
/* CÓDIGO DA TATA*/

/*

// CARROSEL SLIDES BANNER
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
*/
//////////////////////////////////////////////

/*
function login(){
  var A = document.getElementById("input").value
  var B = document.querySelector("input2").value
 
 if (B === "12345", A === "felipe"){
  alert("logado!")
    } else if ( B === "123456", A === "fernando" ) {
      alert("logado!");
    } else
      {
    alert("Senha errada!")
    }
 
};
*/
 
/* 
  var A = document.getElementById("input").value
  var B = document.querySelector(".input2").value

        // Verificar combinações válidas usando ||
        if (
            (A === "admin" && B === "1234") || 
            (A === "guest" && B === "abcd") || 
            (A === "teste" && B === "teste123")
        ) {
            alert("Login bem-sucedido! ✅");
        } else {
            alert("Usuário ou senha inválidos! ⚠️");
        }
*/