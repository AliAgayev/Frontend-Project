AOS.init();


$(document).ready(function ($) {
    $('html, .section2').animate({ scrollTop: 0 }, 1000)
    return false
})
$('.what_we_do').click(function () {

    $('html, .section2').animate({ scrollTop: 720 }, 1000)
    return false
})
$('.who_we_are').click(function () {

    $('html, .section4').animate({ scrollTop: 2100 }, 1000)
    return false
})
$('.jobs').click(function () {

    $('html, .section7').animate({ scrollTop: 5350 }, 1000)
    return false
})
$('.news').click(function () {

    $('html, .section8').animate({ scrollTop: 6100 }, 1000)
    return false
})
$('.contacts').click(function () {

    $('html, footer').animate({ scrollTop: 7200 }, 1000)
    return false
})



$(document).ready(function () {
    $('.scroll_down').click(function () {

        $('html, .section2').animate({ scrollTop: 1000 }, 1000)
        return false
    })


})


$(document).ready(function ($) {

    let tabs = $(".tabs li a");

    tabs.click(function () {
        let content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");
        $(".footer-second").find('div').hide();
        $(content).fadeIn(200);
    });



})(jQuery);