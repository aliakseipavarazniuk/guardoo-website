$(document).ready(function() {

    // Dropdown
    $('.ui.dropdown')
        .dropdown({
            hoverable: true,
            on: 'hover',
            delay: {
                show: 10,
                hide: 500
            }
        });

    $('#utility-close').click(function() {
        $('#utility').css('visibility', 'hidden');
    });

    $(".questions-block-card .plus").click(function() {
        $(this).siblings('.questions-block-card p').slideToggle("500");
        $(this).children('.questions-block-card .vertical').toggle();
    });

    $(".issues-click").click(function() {
        $(this).siblings('.issues p').slideToggle("500");
        $(this).children('.issues-click .arrow').toggleClass("arrow-down");
    });

    $('textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });

    $('textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });


    (function($) {
        $(function() {

            $('ul.tabs').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div#legal').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
            });

        });
    })($);


});