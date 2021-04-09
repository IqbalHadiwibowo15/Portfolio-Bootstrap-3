//event saat link di klik
$('.page-scroll').on('click', function(){

    //Ambil isi href
    var tujuan = $(this).attr('href');

    //Tangkap element yang bersangkutan
    var elementTujuan = $(tujuan);
    
    //Pindahkan scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

});

// Parallax

//Tentang
$(window).on('load', function(){
    $('.parLeft').addClass('parAppear');
    $('.parRight').addClass('parAppear');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });

    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    //Portofolio
    if( wScroll > $('.portofolio').offset().top - 550) {
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('appear');
            }, 300 * (i+1));
        });
    }
});