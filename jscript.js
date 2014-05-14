$(document).ready(function() {

$(function() {
    $(".fbimage")
        .mouseover(function() { 
            $(this).attr("src", "images/fblogo-hover.png");
        })
        .mouseout(function() {
            $(this).attr("src", "images/fblogo.png");
        });
});


$(function() {
    $( "#tabs" ).tabs();
  });


	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
});

