/*
    The function below is used to:
    1. enable smooth scrolling
    2. in the collapsed mode: close the main menu when an item is clicked
*/
$(".scroll").click(function(event){
	event.preventDefault();
	$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    if ($('.navbar-collapse').hasClass('in')){
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
});