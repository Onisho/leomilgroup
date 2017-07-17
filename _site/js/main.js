$( document ).ready(function() {



// OPEN REL LINKS EXTERNAL 
$("a[rel=external]").click(function() {
	window.open($(this).attr('href'));
	return false;
});
$("area[rel=external]").click(function() {
	window.open($(this).attr('href'));
	return false;
});
$("li[data-class=external] a").click(function() {
	window.open($(this).attr('href'));
	return false;
});


// MASONRY NEWS GRID
$('.grid').masonry({
  itemSelector: '.grid-item',
});
  
  
  
  
  
  
});