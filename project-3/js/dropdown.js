$(document).ready(function(){
    //jquery for toggle
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    //jquerry for expand and collapse the sidebar
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
    });
    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
    });
});