$('.reviews-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-left.png" alt=""></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end