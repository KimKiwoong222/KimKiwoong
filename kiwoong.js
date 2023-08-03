$(function(){

    $('header nav >ul').hover(function() {
        $(this).find('.submenu').stop().slideDown(1000)
},
    function () {
        $('.submenu').stop().slideUp(500)
    })
})

$('.tabMenu li').click(function(){
    var idx = $(this).index()

    $('.tabItem>*').hide().removerClass('on')
    $('.tabItem>*').eq(idx).show().addClass('on')

    $('.tabMenu li').removeClass('on')
    $(this).addclass('on')
})

setInterval(function() {
    $('.slideWrap').animate({ 'margin-top': '-300' }, function() {
        $('.slide:first').appendTo('.slideWrap')
        $('.slideWrap').css({ 'margin-top': '0'})
    })
    }, 3000)