let searchForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');


document.querySelector('#cart-btn').onclick = () =>{
   shoppingCart.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');


document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
}

window.onscroll   = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
 }





 function searchproduct() {
   let input = document.getElementById("search").value.toLowerCase();
   document.querySelectorAll(".story-card").forEach(card => {
       let title = card.getAttribute("data-title").toLowerCase();
       card.style.display = title.includes(input) ? "block" : "none";
   });
}