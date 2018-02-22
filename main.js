$(".item").click(function() {
    $(this).removeClass('collapse');
    $(this).addClass("aboutbackground");
    // $(this).css('background-image' 'url(images/desk.png)');
    $(this).children('p, form').show(1000);
    $(".item").not(this).each(function() {
        $(this).addClass("collapse");
        $(this).children('p, form').fadeOut();
    });
});

// smoother layout
//
