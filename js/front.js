$(function () {


    carousels();


});

function carousels() {

    $('#main-slider').owlCarousel({
      
	navigation: true, // Show next and prev buttons
	slideSpeed: 300,
	paginationSpeed: 400,
	autoPlay: true,
	stopOnHover: true,
	singleItem: true,
	afterInit: ''
    });
   
}