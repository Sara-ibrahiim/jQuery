
let inner = $('.inner-bar').innerWidth()
$('.inner-bar').animate({left: `-${inner}px`},1000)
$('#Home p').animate({left: `0px`},1000)


$('#Home i').click(function(){

    // if ($('#sidbar').css ('left')== '0px' && $('#Home p').css ('left')== '0px' ) {
    //     $('#sidbar').animate({left: `-${inner}px`},1000)   
    // } else{
    //     $('#sidbar').animate({left: `0px`},1000)

    // }

    if($('.inner-bar').css('left')== "-1px"){
        $('.inner-bar').animate({left: `-${inner}px`},1000)        
        $('#Home p').animate({left: `0px`},1000)

    }else{
        $('.inner-bar').animate({left: `-1px`},1000)
        $('#Home p').animate({left: `230px`},1000)
       


    }
});

$('a').click(function(e){
    let linkHref = $(e.target).attr('href');
    let linkoffset = $(linkHref).offset().top;

    $('html,body').animate({scrollTop :linkoffset }, 500);
})



$('.tag').click(function(e){
    e.preventDefault();

    let $x = $(this);
  
    if ($x.next().hasClass('show')) {
        $x.next().removeClass('show');
        $x.next().slideUp(350);
    } else {
        $x.parent().parent().find('.Accordion .inner').removeClass('show');
        $x.parent().parent().find('.Accordion .inner').slideUp(350);
        $x.next().toggleClass('show');
        $x.next().slideToggle(350);
    }

})




setInterval(function(){
   
    var future = new Date("april 2 2023 21:15:00 UTC/GMT+2");
    var now = new Date();
    var difference = Math.floor((future - now) / 1000);

    var seconds = fixIntegers(difference % 60);
    difference = Math.floor(difference / 60);

    var minutes = fixIntegers(difference % 60);
    difference = Math.floor(difference / 60);

    var hours = fixIntegers(difference % 24);
    difference = Math.floor(difference / 24);

    var days = difference;

    $("#seconds").text(seconds + " s");
    $("#minutes").text(minutes + " m");
    $("#hours").text(hours + " h");
    $("#days").text(days + " D");
}, 1000);

function fixIntegers(integer)
{
    if (integer < 0)
        integer = 0;
    if (integer < 10)
        return "0" + integer;
    return "" + integer;
}

// $(document).ready(function() {
//     var $txtArea = $('textarea');
//   
//     var textMax = $txtArea.attr('maxlength');
  //$le.html(textMax + ' characters remaining');
// });

$(function () {
    var num = 100;
    $("textarea").keyup(function () {
        var count = $(this).val().length;
        var words = num - count;

        if (words <= 0) {
            $("#letter").text("your available character finished");
        }else {
            $("#letter").text(words);
        }
    });
});
