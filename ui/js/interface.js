// Nav and header START
$(document).ready(function () {
    $("#iconMenu").click(function() {
		$("nav").toggle();
		$(this).toggleClass("open");
		$(this).toggleClass("closed");
	});
});

// Login modal
$( "#navLogin" ).click(function() {
  $('#modalBg').toggle();
  $('#modalLogin').toggle();
  if ($(window).width() < 1024) {
  	$('nav').hide();
  	$('#iconMenu').hide();
  }
});
$( ".modalClose" ).click(function() {
  $('#modalBg').hide();
  $('.modalContent').hide();
  if ($(window).width() < 1024) {
	  $('#iconMenu').show();
	  $('#iconMenu').removeClass("open");
	  $('#iconMenu').addClass("closed");
  }
});
$( "#modalBg" ).click(function() {
	if ($(window).width() > 1023) {
		$(this).hide();
		$('.modalContent').hide();
	}
});
// Billing Details Modal
$( "#dashboardFooterUpdate" ).click(function() {
  $('#modalBg').toggle();
  $('#modalBilling').toggle();
  if ($(window).width() < 1024) {
  	$('nav').hide();
  	$('#iconMenu').hide();
  }
});
// Shipping Details Modal
$( "#dashboardFooterShipping" ).click(function() {
  $('#modalBg').toggle();
  $('#modalShipping').toggle();
  if ($(window).width() < 1024) {
  	$('nav').hide();
  	$('#iconMenu').hide();
  }
});


$(window).on("resize", function () {
	
	// Home - Food Pack height
	
	imgH = $('#getStartedImg img').height();
	
	if ($(window).width() > 767 && $(window).width() < 969) {		
		$('#getStarted').height(imgH + "px");
		$('#getStarted H1').css('padding-top', imgH - 320);
	}
	if ($(window).width() > 970) {
		$('#getStarted').height(imgH + "px");
		$('#getStarted H1').css('padding-top', imgH - 370);
	}
	
	// Home Comparison image height
	if ($(window).width() > 767) {
		imgW = $('#compImg').width();
		$('#compImg').height(imgW * 1.05);
	}
	
	// Home Comparison text alignment
	if ($(window).width() > 767) {
		contH = $('#comparison').height();
		divTheirs = $('#compTheirs').height();
		divOurs = $('#compOurs').height();		
		$('#compTheirs').css('padding-top', ((contH - divTheirs) / 2) - 20);
		$('#compOurs').css('padding-top', ((contH - divTheirs) / 2) - 20);
	}
	
	// Suppliment padding
	if ($(window).width() < 768) {
		supW = $('#suppliments').width();		
		$('#suppliments').css('padding-top', (supW * 0.55));
	} else {
		$('#suppliments').css('padding-top', '');
	}
	
	// benefits padding
	if ($(window).width() > 768) {
		beneF = $('#benefits img').height();
		beneU = $('#benefitList').height();
		$('#benefitList').css('margin-bottom', (beneF - beneU));
	} else {
		$('#benefitList').css('margin-bottom', '');
	}
	
	//how it works intro height
	if ($(window).width() > 445 && $(window).width() < 1024) {
		howIntro = $('#howIntro').width();
		$('#howIntro').css('min-height', (howIntro * 0.35));
	} else {
		$('#howIntro').css('min-height', '');
	}
	
	//how it works, friend intro height
	if ($(window).width() > 767 && $(window).width() < 1024) {
		howFriend = $('#howFriend').width();
		$('#howFriend').css('min-height', (howFriend * 0.33));
	} else {
		$('#howFriend').css('min-height', '');
	}
	
}).resize();



// FAQs
$(document).ready(function () {
    $(".question h2").click(function() {
		$(this).siblings(".answer").slideToggle("fast");
		$(this).children("i").toggleClass("fa-plus");
		$(this).children("i").toggleClass("fa-minus");
	});
});



// Steps
$( ".radioButtons label" ).click(function(e){
  e.preventDefault();
  $(this).addClass( "on" );
  $(this).siblings().removeClass( "on" );
});
$( ".radioSlider label" ).click(function(e){
  e.preventDefault();
  $(this).addClass( "on" );
  $(this).siblings().removeClass( "on" );
});
$("#step1PetAllergies input").click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass("on");
});
$( "#recipeSelect label" ).click(function(){
	$(this).addClass( "on" );
	$(this).siblings().removeClass( "on" );
});



//Breed selector
$( "#step1PetBreedPickBreed" ).click(function() {
	$(this).addClass("on");
	$(this).siblings().removeClass("on");
	$("#step1PetBreedBreed").show();
	$("#step1PetBreedCrossBreed").hide();
	$("#step1PetBreedUnknown").hide();
});
$( "#step1PetBreedPickCross" ).click(function() {
	$(this).addClass("on");
	$(this).siblings().removeClass("on");
	$("#step1PetBreedBreed").hide();
	$("#step1PetBreedCrossBreed").show();
	$("#step1PetBreedUnknown").hide();
});
$( "#step1PetBreedPickUnknown" ).click(function() {
	$(this).addClass("on");
	$(this).siblings().removeClass("on");
	$("#step1PetBreedBreed").hide();
	$("#step1PetBreedCrossBreed").hide();
	$("#step1PetBreedUnknown").show();
});


// Show and hide recipe descriptions
$(".recipeSelectBeef").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescBeef").show();});
$(".recipeSelectChicken").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescChicken").show();});
$(".recipeSelectTurkey").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescTurkey").show();});
$(".recipeSelectLamb").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescLamb").show();});
$(".recipeSelectDairy").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescDairy").show();});
$(".recipeSelectGrains").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescGrains").show();});
$(".recipeSelectEggs").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescEggs").show();});
$(".recipeSelectFish").click(function(){$("#recipeDescriptions").children().hide();$("#recipeDescFish").show();});

// set label on recipe select button
$( "#recipeDescriptions input" ).change(function() {
	if (this.checked) {
		$(this).siblings().replaceWith("<i>Un-Select</i>");
	} else {
		$(this).siblings().replaceWith("<i>Select</i>");
	}
});

// set visual colour for selected recipe
$( "#recipeDescBeef input" ).change(function() {$(".recipeSelectBeef").parent().toggleClass("checked");});
$( "#recipeDescChicken input" ).change(function() {$(".recipeSelectChicken").parent().toggleClass("checked");});
$( "#recipeDescTurkey input" ).change(function() {$(".recipeSelectTurkey").parent().toggleClass("checked");});
$( "#recipeDescLamb input" ).change(function() {$(".recipeSelectLamb").parent().toggleClass("checked");});
$( "#recipeDescDairy input" ).change(function() {$(".recipeSelectDairy").parent().toggleClass("checked");});
$( "#recipeDescGrains input" ).change(function() {$(".recipeSelectGrains").parent().toggleClass("checked");});
$( "#recipeDescEggs input" ).change(function() {$(".recipeSelectEggs").parent().toggleClass("checked");});
$( "#recipeDescFish input" ).change(function() {$(".recipeSelectFish").parent().toggleClass("checked");});


// Mobile checkout nav
$( "#checkoutNav li" ).click(function() {
	$(this).addClass("on");
	$(this).siblings().removeClass("on");
	$(".step4CheckoutPanel").hide();
});
$( "#step4ReviewNav" ).click(function() {$("#step4Review").show();});
$( "#step4AccountNav" ).click(function() {$("#step4Account").show();});
$( "#step4AddressNav" ).click(function() {$("#step4Address").show();});
$( "#step4PaymentNav" ).click(function() {$("#step4Payment").show();});

// shipping / billing address
$( "#sameBillingAddress" ).change(function() {
  $(this).siblings().toggleClass("on");
  $("#billingAddressWrapper").toggle();
});

//Class on Join Fields
$( "#join input" ).focus(function() {
  $( this ).parent("li").addClass("on");
});
$( "#join input" ).blur(function() {
  $( this ).parent("li").removeClass("on");
});


// Labels and fields on Credit Card
$(function(){
  
  $('#creditCard input').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');
      
    }
    
  });
  
});




