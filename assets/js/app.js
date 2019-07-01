(function(e) {e(window.jQuery, window, document);})(function($, window, document) {
    console.log('init');
    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            // app.select2();
            app.slider();
        },

        onResize: function() {
            // call function here to applied on resize window
        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        select2: function() {
            $(document).ready(function() {
                $("select").select2();
            });
        },
        slider:function(){
            $('#products-slider').owlCarousel({
                loop:true,
                margin:10,
                stagePadding: 30,
                dots: false,
                nav:true,
                navText:["<div class='rounded-50'><i class='fa fa-chevron-left'></i></div>","<div class='rounded-50'><i class='fa fa-chevron-right'></i></div>"],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    }
                }
            });
            $('#hero-images-slider').owlCarousel({
                loop:true,
                dots: true,
                items: 1,
            });
            
            $('#review-slider').owlCarousel({
                loop:true,
                margin:20,
                dots: false,
                nav:true,
                navText:["<div class='rounded-50'><i class='fa fa-chevron-left'></i></div>","<div class='rounded-50'><i class='fa fa-chevron-right'></i></div>"],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:4
                    }
                }
            })
        }
    }

    $(document).ready(function () {
        app.init($);
        $(window).resize(function() {
            app.onResize();
        });
    });
});