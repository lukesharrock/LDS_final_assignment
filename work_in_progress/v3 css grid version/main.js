// http://bl.ocks.org/jfsiii/5380802
// https://www.w3schools.com/jquery/html_removeclass.asp
//http://jsfiddle.net/J3FTN/

// $(document).ready(function() {
//   $( "#about" ).click(function() {
//     $( "#about" ).effect( "size", {
//       to: { width: 200, height: 60 }
//     }, 1000 );
//   });
// });

// $(document).ready(function() {
//   $('#about').toggleClass('clicked');
// };


$('#social').on('click', function() {
    console.log('clicked');
    $('main').removeClass().addClass('mainsocial');
    $("#abouttext").hide();
    $("#visualstext").hide();
    $("#contacttext").hide();
    $("#social").hide();
    $("#socialtext").show();
    $("#contact").show();
    $("#about").show();
    $("#visuals").show();
});


$('#visuals').on('click', function() {
    console.log('clicked');
    $('main').removeClass().addClass('mainvisuals');
    $("#abouttext").hide();
    $("#socialtext").hide();
    $("#contacttext").hide();
    $("#visuals").hide();
    $("#visualstext").show();
    $("#contact").show();
    $("#about").show();
    $("#social").show();
});

$('#about').on('click', function() {
    console.log('clicked');
    $('main').removeClass().addClass('mainabout');
    $("#visualstext").hide();
    $("#socialtext").hide();
    $("#contacttext").hide();
    $("#about").hide();
    $("#abouttext").show();
    $("#contact").show();
    $("#visuals").show();
    $("#social").show();
});

$('#contact').on('click', function() {
    console.log('clicked');
    $('main').removeClass().addClass('maincontact');
    $("#visualstext").hide();
    $("#socialtext").hide();
    $("#abouttext").hide();
    $("#contact").hide();
    $("#contacttext").show();
    $("#about").show();
    $("#visuals").show();
    $("#social").show();
});




// $('#visuals').on('click', function() {
// $(this).animate({width: '100px'}, 1000)
// }, function() {
// $(this).animate({width: '200px'}, 1000)
// })
