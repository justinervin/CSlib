$(document).ready(function () {
    $(window).scroll(function () {
        $('#img1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("fadeIn");
            }
        });

        $('#img2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
            }
        });

        $('#img3').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("pullUp");
            }
        });
    });

    $('#login-form').on('shown.bs.modal', function () {
        $('#loginId').focus();
    });

    $('#signup-form').on('shown.bs.modal', function () {
        $('#regId').focus();
    });
});