
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


function dark_on(){   
    var element = document.getElementById('dark-on');
    var input_on = document.getElementById('input-on');
    var input_off = document.getElementById('input-off');
    var header = document.getElementById('header-container');
    var box2_card = document.getElementById('header-box2');
    var search_card = document.getElementById('search-card'); 
    var menu_icon= document.getElementById('menu-icon');
    var plus_icon = document.getElementById('plus-icon'); 
    var msg_tab = document.getElementById('msg-tab'); 
    var not_tab = document.getElementById('not-tab');
    var profile_c = document.getElementById('profile-c');
    var body_container1 = document.getElementById('body-container1');
    var title_icon = document.getElementById('title-icon'); 
    var group_search = document.getElementById('group-search');
    var magnify = document.getElementById('fa-magnifying');
    var feed_card = document.getElementById('feed-card');
    var feed_icon = document.getElementById('feed-icon');
    var discover_icon = document.getElementById('discover-icon');
    var create_group = document.getElementById('create-group');
    var joined_active = document.querySelectorAll('.joined-active');
    var joined_wrapper = document.querySelectorAll('.joined-wrapper');
    var joined_card2 = document.querySelectorAll('.joined-card2');
    var body_container2 = document.querySelector('.body-container2');
    var rightleft = document.querySelectorAll('.icon-o');
    var post_wrapper = document.querySelectorAll('.post-wrapper');
    var reaction_color = document.querySelectorAll('.reaction-color');
    var input_color = document.querySelectorAll('.input-color');
    var search_menu = document.querySelector('.search-menu');
    var input_wrapper = document.querySelector('.input-wrapper');
    var link_icon = document.querySelectorAll('.link-icon');
    var menu_tab = document.querySelector('.menu-tab');
    var menu_tab_container = document.querySelector('.menu-tab-container');
    var darkee = document.querySelector('.darkee');
    var chat_card2 = document.querySelector('.chat-card2');
    var notification_tab = document.querySelector('.notification-tab');
    var profile_tab = document.querySelector('.profile-tab');
    var dark_icon = document.querySelectorAll('.dark-icon');
    var display_wrapper = document.querySelector('.display-wrapper');
    var key_icon = document.querySelector('.key-icon');
    var group_fixed = document.querySelectorAll('.group-fixed');
    var recent_activity = document.querySelectorAll('.recent-activity')
    
    

    
    if(element.classList.contains('dark')){
        element.classList.remove('dark');
        input_on.disabled =false;
        input_off.disabled = true;
        header.style.background = 'white';


        box2_card.style.color = 'initial';
        search_card.style.background = '#F0F2F5';
        menu_icon.style.background = '#F0F2F5';
        menu_icon.style.color = 'initial';
        plus_icon.style.background = '#F0F2F5';
        plus_icon.style.color = 'initial';
        msg_tab.style.background = '#F0F2F5';
        msg_tab.style.color = 'initial';
        not_tab.style.background = '#F0F2F5';
        not_tab.style.color = 'initial';
        
        profile_c.style.background = '#F0F2F5';
        profile_c.style.color = 'initial';
        body_container1.style.background = 'initial';
        body_container1.style.color = 'initial';
        title_icon.style.background = '#E4E6EB';
        title_icon.style.color = 'white';
        
        group_search.style.background = '#F0F2F5';
        group_search.style.color = 'initial';

        magnify.style.background = '#F0F2F5';
        magnify.style.color = 'initial';

        feed_card.style.background = '#F0F2F5';
        feed_card.style.color = 'initial';
        discover_icon.style.background = '#F0F2F5';
        discover_icon.style.color = 'initial';

        create_group.style.background = '#initial';

        body_container2.style.background = '#F0F2F5';
        body_container2.style.color = 'white';
        title_icon.style.background = '#F0F2F5';
        title_icon.style.color = 'initial';
        notification_tab.style.background = 'white';
        notification_tab.style.color = '#F0F2F5';

        profile_tab.style.color = 'initial';
        profile_tab.style.background = 'white';
        for (let i = 0; i < group_fixed.length; i++) {
            group_fixed[i].style.background = '#F0F2F5';
            group_fixed[i].style.color = 'initial';
            
        }

        for (let i = 0; i < post_wrapper.length; i++) {
            post_wrapper[i].style.background= "#F0F2F5";
            post_wrapper[i].style.color= "initial";
        }

        for (let i = 0; i < joined_active.length; i++) {
            joined_active[i].style.color= "initial";
        }
        for (let i = 0; i < joined_card2.length; i++) {
            joined_card2[i].style.background= "#F0F2F5";
            joined_card2[i].style.color= "transparent";
        }

        for (let i = 0; i < reaction_color.length; i++) {
            reaction_color[i].style = 'border-bottom: solid #2ABBA7 1px';
            reaction_color[i].style.color= "#65676B";
        }

        for (let i = 0; i < input_color.length; i++) {
            input_color[i].style.background = '#E4E6EB';
            input_color[i].style.color = 'initial';
            
        }
        search_menu.style.background = 'white';
        search_menu.style.color = 'initial';
        menu_tab.style.background = '#F0F2F5';

        menu_tab.style.background = 'white';
        menu_tab_container.style.background = 'white';
        darkee.style.background = 'white';
        darkee.style.color = 'initial';
        
        chat_card2.style.background = 'white';
        notification_tab.style.background = 'white';
        notification_tab.style.color = '#F0F2F5';

        display_wrapper.style.background = 'white';
        display_wrapper.style.color = 'initial';
        key_icon.style.background = '#E4E6EB';

        for (let i = 0; i < rightleft.length; i++) {
            rightleft[i].style.background= "#F0F2F5";
            rightleft[i].style.color= "initial";
        }

        for (let i = 0; i < recent_activity.length; i++) {
            recent_activity[i].style.color = 'initial';
            
        }

    }
    else{
        element.classList.add('dark');
        input_on.disabled = true;
        input_off.disabled = false;
       

        header.style.background = '#242526';
        box2_card.style.color = '#E4E6EB';
        search_card.style.background = '#3A3B3C';
        menu_icon.style.background = '#3A3B3C';
        menu_icon.style.color = 'white';
        plus_icon.style.background = '#3A3B3C';
        plus_icon.style.color = 'white';
        msg_tab.style.background = '#3A3B3C';
        msg_tab.style.color = 'white';
        not_tab.style.background = '#3A3B3C';
        not_tab.style.color = 'white';
        
        profile_c.style.background = '#3A3B3C';
        profile_c.style.color = 'white';
        body_container1.style.background = '#18191A';
        body_container1.style.color = '#F0F2F5';
        title_icon.style.background = '#3A3B3C';
        title_icon.style.color = 'white';

        group_search.style.background = '#3A3B3C';
        group_search.style.color = '#E4E6EB';
        magnify.style.background = '#3A3B3C';
        magnify.style.color = '#E4E6EB';
        feed_card.style.background = '#3A3B3C';
        feed_card.style.color = '#E4E6EB';
        discover_icon.style.background = '#3A3B3C';
        discover_icon.style.color = 'white';

        create_group.style.background = '#3A3B3C';
        create_group.style.background = 'rgba(24, 119, 242, 0.05)';
        
       

        
        for (let i = 0; i < joined_active.length; i++) {
        joined_active[i].style.color= "#BEC3C9";
        }
        for (let i = 0; i < joined_card2.length; i++) {
            joined_card2[i].style.background= "#3A3B3C";
            joined_card2[i].style.color= "white";
        }
        

        body_container2.style.background = '#242526';
        body_container2.style.color = 'white';
        for (let i = 0; i < rightleft.length; i++) {
            rightleft[i].style.background= "#3A3B3C";
            rightleft[i].style.color= "white";
        }
        for (let i = 0; i < post_wrapper.length; i++) {
            post_wrapper[i].style.background= "#3A3B3C";
            post_wrapper[i].style.color= "white";
        }

        for (let i = 0; i < reaction_color.length; i++) {
            reaction_color[i].style = 'border-bottom: solid #65676B 1px';
            reaction_color[i].style.color= "#BEC3C9";
        }
        for (let i = 0; i < input_color.length; i++) {
            input_color[i].style.background = 'rgba(0, 0, 0, 0.1)';
            input_color[i].style.color= "white";
        }
        search_menu.style.background = '#18191A';
        search_menu.style.color = '#F0F2F5';
         
        for (let i = 0; i < link_icon.length; i++) {
            link_icon[i].style.color= "#2ABBA7";
        }
        input_wrapper.style.background = 'rgba(0, 0, 0, 0.05)';
        menu_tab.style.background = '#18191A';
        menu_tab_container.style.background = '#18191A';
        menu_tab_container.style.color = '#F0F2F5';
        darkee.style.background = '#18191A';
        darkee.style.color = '#F0F2F5';
        chat_card2.style.background = '#18191A';
        notification_tab.style.background = '#18191A';
        notification_tab.style.color = '#F0F2F5';
        profile_tab.style.color = '#F0F2F5';
        profile_tab.style.background = '#18191A';
        display_wrapper.style.background = '#18191A';
        display_wrapper.style.color = '#F0F2F5';
        
        //dark_icon.style.color = '#F0F2F5';
        for (let i = 0; i < dark_icon.length; i++) {
            dark_icon[i].style = 'background-color: rgba(0, 0, 0, 0.1);';
            
        }
        key_icon.style.background = '#18191A';
        for (let i = 0; i < group_fixed.length; i++) {
            group_fixed[i].style = 'background-color: rgba(0, 0, 0, 0.1);';
            
        }

        for (let i = 0; i < recent_activity.length; i++) {
            recent_activity[i].style.color = '#BEC3C9';
            
        }

       
       
             
        
   }
}


function show_dark(){
    document.getElementById('display-wrapper').classList.toggle('hide');
}







