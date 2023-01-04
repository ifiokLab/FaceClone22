
function Show_Search(){
    var element = document.getElementById('search-menu');
    element.classList.toggle('hide');
}


function Hide_Search(){
    var element = document.getElementById('search-menu');
    element.classList.toggle('hide');
}


function menu_tab(){
    var element = document.getElementById('menu-tab');
    var element2 = document.getElementById('menu-icon');
    element2.classList.toggle('blue');
    element.classList.toggle('hide');
}


function msg_tab(){
    var element = document.getElementById('chat-card');
    var element2 = document.getElementById('msg-tab');
    element2.classList.toggle('blue');
    element.classList.toggle('hide');
}


function not_tab(){
    var element = document.getElementById('not-card');
    var element2 = document.getElementById('not-tab');
    element2.classList.toggle('blue');
    element.classList.toggle('hide');
}

function profile_tab(){
    var element = document.getElementById('profile-card');
    var element2 = document.getElementById('profile-tab');
    element2.classList.toggle('blue');
    element.classList.toggle('hide');
}

function show_privacy(){
    var element = document.getElementById('profile-card');
    var element2 = document.getElementById('settings-tab');
    element2.classList.toggle('blue');
    element.classList.toggle('hide');
}
function hide_settings(){
    var element = document.getElementById('settings-tab');
    element.classList.toggle('hide')
}




let slideIndex  = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('group-box');
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i= 0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000);
}




let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }

function showSlides2(n){
    let i;
    let slides = document.getElementsByClassName('group-box-new');
    if(n>slides.length){
        slideIndex2 = 1;
    }
    if(n < 1){
        slideIndex2 = slides.length;
    }
    for(i= 0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex2 - 1].style.display = 'flex';
    setTimeout(showSlides, 2000);
}








