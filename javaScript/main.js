// window.onscroll = function(){
//     // console.log(window.pageYOffset);
//     if(window.pageYOffset<20)
//     {
//         console.log(5);
//         $("#navv").css({'background-color' : 'green'});
//     }else{
//         // console.log(6);
//         // document.getElementById("navv").style.backgroundImage= ;
//     }
// }
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})