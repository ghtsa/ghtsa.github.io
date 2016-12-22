(function(){

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;

    window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();

/* ===============================
    TUTORIAL BY CALLMENICK
    http://callmenick.com/2014/02/11/simple-tabbed-content-area-with-css-and-jquery/
=============================== */
// Tabbable Content
$(document).ready(function () {
    $("ul#tabs li").click(function (e) {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child(" + nthChild + ")").addClass("active");
        }
    });
});

/* ===============================
    Tabbable Content
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();



/* ===============================
    Click to scroll to top
=============================== */

$(document).ready(function(){
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

/* ===============================
    Turn Navbar blue
=============================== */
$(window).scroll(function () {
    if ($(".navbar").offset().top > 500) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


/* ===============================
    Other Stuff
=============================== */

$('.row1 ul.photos li:nth-child(1)').click(function() {
    $(".row1 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row1 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row1 ul.captions li:nth-child(1)").addClass('square-reveal');

});
$('.row1 ul.photos li:nth-child(2)').click(function() {
    $(".row1 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row1 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row1 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row1 ul.photos li:nth-child(3)').click(function() {
    $(".row1 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row1 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row1 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row1 ul.photos li:nth-child(4)').click(function() {
    $(".row1 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row1 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row1 ul.captions li:nth-child(4)").addClass('square-reveal');
});


$('.row2 ul.photos li:nth-child(1)').click(function() {
    $(".row2 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row2 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row2 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row2 ul.photos li:nth-child(2)').click(function() {
    $(".row2 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row2 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row2 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row2 ul.photos li:nth-child(3)').click(function() {
    $(".row2 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row2 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row2 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row2 ul.photos li:nth-child(4)').click(function() {
    $(".row2 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row2 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row2 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row3 ul.photos li:nth-child(1)').click(function() {
    $(".row3 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row3 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row3 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row3 ul.photos li:nth-child(2)').click(function() {
    $(".row3 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row3 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row3 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row3 ul.photos li:nth-child(3)').click(function() {
    $(".row3 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row3 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row3 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row3 ul.photos li:nth-child(4)').click(function() {
    $(".row3 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row3 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row3 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row4 ul.photos li:nth-child(1)').click(function() {
    $(".row4 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row4 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row4 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row4 ul.photos li:nth-child(2)').click(function() {
    $(".row4 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row4 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row4 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row4 ul.photos li:nth-child(3)').click(function() {
    $(".row4 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row4 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row4 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row4 ul.photos li:nth-child(4)').click(function() {
    $(".row4 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row4 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row4 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row5 ul.photos li:nth-child(1)').click(function() {
    $(".row5 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row5 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row5 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row5 ul.photos li:nth-child(2)').click(function() {
    $(".row5 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row5 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row5 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row5 ul.photos li:nth-child(3)').click(function() {
    $(".row5 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row5 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row5 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row5 ul.photos li:nth-child(4)').click(function() {
    $(".row5 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row5 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row5 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row6 ul.photos li:nth-child(1)').click(function() {
    $(".row6 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row6 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row6 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row6 ul.photos li:nth-child(2)').click(function() {
    $(".row6 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row6 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row6 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row6 ul.photos li:nth-child(3)').click(function() {
    $(".row6 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row6 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row6 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row6 ul.photos li:nth-child(4)').click(function() {
    $(".row6 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row6 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row6 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row7 ul.photos li:nth-child(1)').click(function() {
    $(".row7 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row7 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row7 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row7 ul.photos li:nth-child(2)').click(function() {
    $(".row7 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row7 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row7 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row7 ul.photos li:nth-child(3)').click(function() {
    $(".row7 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row7 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row7 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row7 ul.photos li:nth-child(4)').click(function() {
    $(".row7 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row7 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row7 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row8 ul.photos li:nth-child(1)').click(function() {
    $(".row8 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row8 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row8 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row8 ul.photos li:nth-child(2)').click(function() {
    $(".row8 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row8 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row8 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row8 ul.photos li:nth-child(3)').click(function() {
    $(".row8 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row8 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row8 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row8 ul.photos li:nth-child(4)').click(function() {
    $(".row8 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row8 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row8 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row9 ul.photos li:nth-child(1)').click(function() {
    $(".row9 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row9 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row9 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row9 ul.photos li:nth-child(2)').click(function() {
    $(".row9 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row9 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row9 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row9 ul.photos li:nth-child(3)').click(function() {
    $(".row9 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row9 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row9 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row9 ul.photos li:nth-child(4)').click(function() {
    $(".row9 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row9 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row9 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row10 ul.photos li:nth-child(1)').click(function() {
    $(".row10 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row10 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row10 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row10 ul.photos li:nth-child(2)').click(function() {
    $(".row10 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row10 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row10 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row10 ul.photos li:nth-child(3)').click(function() {
    $(".row10 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row10 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row10 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row10 ul.photos li:nth-child(4)').click(function() {
    $(".row10 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row10 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row10 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row11 ul.photos li:nth-child(1)').click(function() {
    $(".row11 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row11 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row11 ul.photos li:nth-child(2)').click(function() {
    $(".row11 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row11 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row11 ul.photos li:nth-child(3)').click(function() {
    $(".row11 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row11 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row11 ul.photos li:nth-child(4)').click(function() {
    $(".row11 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row11 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row12 ul.photos li:nth-child(1)').click(function() {
    $(".row12 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row12 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row12 ul.photos li:nth-child(2)').click(function() {
    $(".row12 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row12 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row12 ul.photos li:nth-child(3)').click(function() {
    $(".row12 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row12 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row12 ul.photos li:nth-child(4)').click(function() {
    $(".row12 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row12 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row11 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row13 ul.photos li:nth-child(1)').click(function() {
    $(".row13 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row13 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row13 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row13 ul.photos li:nth-child(2)').click(function() {
    $(".row13 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row13 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row13 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row13 ul.photos li:nth-child(3)').click(function() {
    $(".row13 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row13 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row13 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row13 ul.photos li:nth-child(4)').click(function() {
    $(".row13 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row13 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row13 ul.captions li:nth-child(4)").addClass('square-reveal');
});


$('.row14 ul.photos li:nth-child(1)').click(function() {
    $(".row14 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row14 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row14 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row14 ul.photos li:nth-child(2)').click(function() {
    $(".row14 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row14 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row14 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row14 ul.photos li:nth-child(3)').click(function() {
    $(".row14 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row14 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row14 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row14 ul.photos li:nth-child(4)').click(function() {
    $(".row14 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row14 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row14 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row15 ul.photos li:nth-child(1)').click(function() {
    $(".row15 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row15 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row15 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row15 ul.photos li:nth-child(2)').click(function() {
    $(".row15 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row15 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row15 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row15 ul.photos li:nth-child(3)').click(function() {
    $(".row15 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row15 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row15 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row15 ul.photos li:nth-child(4)').click(function() {
    $(".row15 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row15 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row15 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row16 ul.photos li:nth-child(1)').click(function() {
    $(".row16 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row16 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row16 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row16 ul.photos li:nth-child(2)').click(function() {
    $(".row16 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row16 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row16 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row16 ul.photos li:nth-child(3)').click(function() {
    $(".row16 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row16 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row16 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row16 ul.photos li:nth-child(4)').click(function() {
    $(".row16 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row16 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row16 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row17 ul.photos li:nth-child(1)').click(function() {
    $(".row17 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row17 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row17 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row17 ul.photos li:nth-child(2)').click(function() {
    $(".row17 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row17 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row17 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row17 ul.photos li:nth-child(3)').click(function() {
    $(".row17 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row17 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row17 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row17 ul.photos li:nth-child(4)').click(function() {
    $(".row17 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row17 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row17 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row18 ul.photos li:nth-child(1)').click(function() {
    $(".row18 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row18 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row18 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row18 ul.photos li:nth-child(2)').click(function() {
    $(".row18 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row18 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row18 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row18 ul.photos li:nth-child(3)').click(function() {
    $(".row18 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row18 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row18 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row18 ul.photos li:nth-child(4)').click(function() {
    $(".row18 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row18 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row18 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row19 ul.photos li:nth-child(1)').click(function() {
    $(".row19 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row19 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row19 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row19 ul.photos li:nth-child(2)').click(function() {
    $(".row19 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row19 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row19 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row19 ul.photos li:nth-child(3)').click(function() {
    $(".row19 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row19 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row19 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row19 ul.photos li:nth-child(4)').click(function() {
    $(".row19 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row19 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row19 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row20 ul.photos li:nth-child(1)').click(function() {
    $(".row20 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row20 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row20 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row20 ul.photos li:nth-child(2)').click(function() {
    $(".row20 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row20 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row20 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row20 ul.photos li:nth-child(3)').click(function() {
    $(".row20 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row20 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row20 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row20 ul.photos li:nth-child(4)').click(function() {
    $(".row20 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row20 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row20 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row21 ul.photos li:nth-child(1)').click(function() {
    $(".row21 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row21 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row21 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row21 ul.photos li:nth-child(2)').click(function() {
    $(".row21 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row21 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row21 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row21 ul.photos li:nth-child(3)').click(function() {
    $(".row21 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row21 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row21 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row21 ul.photos li:nth-child(4)').click(function() {
    $(".row21 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row21 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row21 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row22 ul.photos li:nth-child(1)').click(function() {
    $(".row22 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row22 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row22 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row22 ul.photos li:nth-child(2)').click(function() {
    $(".row22 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row22 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row22 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row22 ul.photos li:nth-child(3)').click(function() {
    $(".row22 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row22 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row22 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row22 ul.photos li:nth-child(4)').click(function() {
    $(".row22 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row22 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row22 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row23 ul.photos li:nth-child(1)').click(function() {
    $(".row23 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row23 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row23 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row23 ul.photos li:nth-child(2)').click(function() {
    $(".row23 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row23 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row23 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row23 ul.photos li:nth-child(3)').click(function() {
    $(".row23 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row23 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row23 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row23 ul.photos li:nth-child(4)').click(function() {
    $(".row23 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row23 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row23 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row24 ul.photos li:nth-child(1)').click(function() {
    $(".row24 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row24 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row24 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row24 ul.photos li:nth-child(2)').click(function() {
    $(".row24 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row24 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row24 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row24 ul.photos li:nth-child(3)').click(function() {
    $(".row24 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row24 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row24 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row24 ul.photos li:nth-child(4)').click(function() {
    $(".row24 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row24 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row24 ul.captions li:nth-child(4)").addClass('square-reveal');
});

$('.row25 ul.photos li:nth-child(1)').click(function() {
    $(".row25 ul.captions li:nth-child(1)").removeClass("square-reveal");
    $(".row25 ul.captions li:nth-child(1)").css("display", "block");
    $('ul.captions li').not(".row25 ul.captions li:nth-child(1)").addClass('square-reveal');
});
$('.row25 ul.photos li:nth-child(2)').click(function() {
    $(".row25 ul.captions li:nth-child(2)").removeClass("square-reveal");
    $(".row25 ul.captions li:nth-child(2)").css("display", "block");
    $('ul.captions li').not(".row25 ul.captions li:nth-child(2)").addClass('square-reveal');
});
$('.row25 ul.photos li:nth-child(3)').click(function() {
    $(".row25 ul.captions li:nth-child(3)").removeClass("square-reveal");
    $(".row25 ul.captions li:nth-child(3)").css("display", "block");
    $('ul.captions li').not(".row25 ul.captions li:nth-child(3)").addClass('square-reveal');
});
$('.row25 ul.photos li:nth-child(4)').click(function() {
    $(".row25 ul.captions li:nth-child(4)").removeClass("square-reveal");
    $(".row25 ul.captions li:nth-child(4)").css("display", "block");
    $('ul.captions li').not(".row25 ul.captions li:nth-child(4)").addClass('square-reveal');
});




$('h1.close-square').click(function() {
    $( "ul.captions li" ).addClass("square-reveal");
});



