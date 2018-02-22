$('.social').on('click', function() {
    console.log('clicked');
    $('.social').toggleClass( 'socialmain', 2000);
    $(".mainabout").hide(2000);
    $(".aboutclicked").show(2000);
    // $("main").hide();
});

$('.visuals').on('click', function() {
    console.log('clicked');
    $('.visuals').toggleClass( 'visualsmain', 2000 );
    $(".mainabout").hide(2000);
    $(".socialmain").hide(2000);
    $(".aboutclicked").show(2000);
    $(".social").show(2000);
    // $("main").hide();
});
