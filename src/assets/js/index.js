
		$(document).ready(function() 
		{
			document.addEventListener('DOMContentLoaded', function() {
			
				submitBTN = document.getElementById('#form-submit')
				submitBTN.addEventListener('click', function(submitEvent) {
					//submitEvent.preventDefault()
				})
			})
			// navigation click actions 
			$('.scroll-link').on('click', function(event){
				event.preventDefault();
				var sectionID = $(this).attr("data-id");
				scrollToID('#' + sectionID, 750);
			});
			// scroll to top action
			$('.scroll-top').on('click', function(event) {
				event.preventDefault();
				$('html, body').animate({scrollTop:0}, 'slow');         
			});
			// mobile nav toggle
			$('#nav-toggle').on('click', function (event) {
				event.preventDefault();
				$('#main-nav').toggleClass("open");
			});
		});
		// scroll function
		function scrollToID(id, speed){
			var offSet = 80;//offsetting to account for the header height, without a header the offset will be 0
			var targetOffset = $(id).offset().top - offSet;
			var mainNav = $('#main-nav');
			$('html,body').animate({scrollTop:targetOffset}, speed);
			if (mainNav.hasClass("open")) {
				mainNav.css("height", "1px").removeClass("in").addClass("collapse");
				mainNav.removeClass("open");
			}
		}
		if (typeof console === "undefined") {
			console = {
				log: function() { }
			};
		}
		
 
	  // Menu Dropdown Toggle start
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}
	// Menu Dropdown Toggle end
	//$(document).on('DOMContentLoaded', function() {
	window.addEventListener('load', (loadevent) =>{
	$(document).ready(function() {
		$('.preloader').fadeOut(1000);
		//$('.zoomOnLoad').addClass('zoomAnim');
		//	document.querySelector('.zoomOnLoad').style.background = "cover";
			setTimeout(function() {
				$('.heroMobile').animate({backgroundSize:"270%"},1000)
				$('.heroMobile .banner-text .text').addClass('fadeIn');
			const mq =
	window.matchMedia("(min-width:992px)"); if (mq.matches) { $('.heroPC').animate({backgroundSize:"100%"},1000)
} else { $('.heroPC').animate({backgroundSize:"120%"},1000)
}					$('.heroPC .banner-text .text').addClass('fadeIn');
			},500);
  	})
	})
	//contact us form start
	//notification start 
	function notify(type,msg) {
		if(type== 'success') {
			$('#mymodal-bg').fadeIn('slow');
			$('#success-notif').fadeIn('slow');
			msgBox = document.querySelector('#success-notif .message');
			msgBox.innerHTML = msg;
			setTimeout(function(){
				$('#mymodal-bg').fadeOut('slow');
				$('#success-notif').fadeOut('slow');
			},3000)
			//setTimeout(function() {
				//location.reload();
			//},3500)
		} else if (type == 'error') {
			$('#mymodal-bg').fadeIn('slow');
			$('#error-notif').fadeIn('slow');
			msgBox = document.querySelector('#error-notif .message');
			msgBox.innerHTML = msg;
			setTimeout(function(){
				$('#mymodal-bg').fadeOut('slow');
				$('#success-notif').fadeOut('slow');
			},3000)
		}
	}
	//notification end

	$(document).on('click','#form-submit', function(){
		//submitBTN = document.getElementById('#form-submit')
		//submitBTN.preventDefault();
		response= 'contact';
		if (($('#name').val() != '') &&  ($('#email').val() != '') && ($('#subject').val() != '') && ($('#message').val() != '')) {
			$.ajax({
							
							type:"POST",
							cache:false,
							url:"assets/mail.php?response="+response,
							processData:false,
							contentType:"application/json",
							data:  '{"name":"'+$('#name').val()+'","email":"'+$('#email').val()+'","subject":"'+$('#subject').val()+'","message":"'+$('#message').val()+'"}',
							success: function(r) {
								//location.reload()
								myMessage = "Hey there, we got your message. We'll be in touch as soon as possible!";
								notify('success',myMessage)
								
							},
							error: function(r) {
								//console.log(r)
								myMessage = "Oops, something went wrong. Please try again";
								notify('error',myMessage)
							}
			});
		}	
		
	})

	$(document).on('click','#checkout_form-submit', function(){
		//submitBTN = document.getElementById('#form-submit')
		//submitBTN.preventDefault();
		response= 'checkout';
		const ui = new UI();
		checkoutCart = Storage.getCart();
		//console.log(checkoutCart[0].price)
		for(var j = 0; j <checkoutCart.length; j++) {
		if (($('#checkout_name').val() != '') && ($('#checkout_surname').val() != '') &&   ($('#checkout_email').val() != '')  && ($('#checkout_number').val() != '') &&   ($('#checkout_address').val() != '') && ($('#checkout_requests').val() != '')) {
			$.ajax({
							
							type:"POST",
							cache:false,
							url:"assets/mail.php?response="+response,
							processData:false,
							contentType:"application/json",
							data:  '{"name":"'+$('#checkout_name').val()+'","surname":"'+$('#checkout_surname').val()+'","email":"'+$('#checkout_email').val()+'","number":"'+$('#checkout_number').val()+'","address":"'+$('#checkout_address').val()+'","requests":"'+$('#checkout_requests').val()+'","order_name":"'+checkoutCart[j].title+'","order_price":"'+checkoutCart[j].price+'","order_shipping":"'+checkoutCart[j].shipping+'","order_quantity":"'+checkoutCart[j].amount+'","order_id":"'+checkoutCart[j].id+'","order_color":"'+checkoutCart[j].color+'","order_size":"'+checkoutCart[j].size+'"}',
							success: function(r) {
								//location.reload()
								document.getElementById('checkoutnav').style.width = "0%";
								const ui = new UI();
								
								for(var i = 0; i <checkoutCart.length; i++) {
									bagBtnSet = document.querySelector('.bag-btn.addCart');
									bagBtnSet.setAttribute('data-cartid',''+checkoutCart[i].id+'');
									ui.getBagButtons()
									ui.removeItem(checkoutCart[i].id);
									cartContent.removeChild(cartContent.children[0]);

								}
								setTimeout(function() {
									myMessage = "Hey there, order successful. Please check your email for further details";
									notify('success',myMessage)
								},500)
							},
							error: function(r) {
								//console.log(r)
								myMessage = "Oops, something went wrong. Please try again";
								notify('error',myMessage)
							}
			});
		}
		}	
		
	})
	
	//contact us form end
	// =  document.getElementById("body");
	//document.body.addEventListener("scroll", function(){
	$('body').scroll(function() {
		var scrollTop = $("body").scrollTop();
			if (scrollTop> $('.zoomOnLoad').height() - 40) {
				$('.background-header').removeClass('new-hero');
			} else {
				if (!$('.background-header').hasClass('new-hero')) {
					$('.background-header').addClass('new-hero')
				}
			}
			if (scrollTop > 457){
				$('#products .grid-products').addClass('fadeIn');
			}
			if (scrollTop > 520){
				$('#products2 .grid-products').addClass('fadeIn');
			}
			if (scrollTop > $(document).height()-$(window).height()- 454){
				$('.contactSection').addClass('fadeIn');
			}
			})
	$(document).on('click','.img-container', function() {
		if ($('.img-container .productBorder').hasClass('hoverBorder')) {
			$('.img-container .productBorder').removeClass('hoverBorder');
		}
		if ($('.img-container .product-img').hasClass('opacity75')) {
			$('.img-container .product-img').removeClass('opacity75');
		}
		if ($('.img-container .show-detail').hasClass('slideBagIn')) {
			$('.img-container .show-detail').removeClass('slideBagIn')
		}
	})
	$(document).on('click','[data-slink]', function() {
		id = $(this).attr('data-slink');
		
		prodBorder = document.getElementById('imgBorder'+id);
		prodImg = prodBorder.previousElementSibling;
		prodBagBtn = prodBorder.nextElementSibling;
		$('.img-container .product-img').removeClass('opacity75');
		$('.img-container .productBorder').removeClass('hoverBorder');
		$('.img-container .show-detail').removeClass('slideBagIn')
		$('#imgBorder'+id ).addClass('hoverBorder');
		prodImg.classList.add('opacity75')
		prodBagBtn.classList.add('slideBagIn')
	})

	jQuery(document).ready(function($) {  
owl2 = $('#owl-banner');

owl2.owlCarousel({

	pagination : true,
	paginationNumbers: false,
	autoPlay: 4500, //Set AutoPlay to 4.5 seconds
	items : 1, //10 items above 1000px browser width
	itemsDesktop : [1000,1], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,1], // betweem 900px and 601px
	itemsTablet: [600,1], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

});
		});

		//close cart start
$('#mymodal-bg').click(function() {
	if (document.getElementById("editprofilecv").style.width == "90%") {
		document.getElementById("editprofilecv").style.width = "0";
		$("#mymodal-bg").fadeOut('slow');
		$('.cart-content').removeClass('fadeIn');
	} else if (document.getElementById("checkoutnav").style.width == "90%") {
		document.getElementById("checkoutnav").style.width = "0";
		$("#mymodal-bg").fadeOut('slow');
		$('.checkout-instructions').removeClass('fadeIn');
	}
	if ($('#product-detail').hasClass('active-detail')) {
		$('#product-detail').removeClass('active-detail')
		//$('#product-detail').fadeOut('slow');
		editDetail = document.getElementById('editprofileproduct')
	
		editDetail.style.width = "0%";
		$("#mymodal-bg").fadeOut('slow');
	}
	if (document.getElementById('store-policy').style.display =='block') {
		$('#store-policy').fadeOut('slow');
		$('#mymodal-bg').fadeOut('slow');
	}
	

});

//close cart end
//open product detail start
$(document).on('click','.show-detail', function() {
	r_type = 'detail';
	btnId = $(this).attr('data-addid');
	$.ajax({
						
						type:"GET",
						cache:false,
						url:"assets/products.php?response=" +r_type+"&id="+btnId,
						processData:false,
						contentType:"application/json",
						data:  '',
						success: function(r) {
							//when using json,parse(r) and when code php uses json decode, remember [0][id] at end of DB query but remove [id] so that its only DB::query(...)[0]
							var response = JSON.parse(r);

								
									detailDOM = document.querySelector('.detail');
									detailDOM.innerHTML = `<section class="card-wrapper section product-detail">
										
										<div style="position:sticky;top:15px;z-index:1002"><div class="close-detail"><i class=" icon icon2x icon-cross_mark"></i></div></div>
										<div class="card details container-md">
										<div class="product-imgs">
											<div class="img-display">
												<div class="img-showcase">
													<img class="active-img" data-cnt="1" src="./images/product-1.jpg">
													<img data-cnt="2" src="./images/product-2.jpg">
													<img data-cnt="3" src="./images/product-3.jpg">
													<img data-cnt="4" src="./images/product-4.jpg">
													
												</div>
											</div>
											<div class="img-select">
												<div class="img-item">	
													<div  class="" data-productid="1">
														<img src="./images/product-1.jpg">
													</div>
												</div>
												<div class="img-item">	
													<div  class="" data-productid="2">
														<img src="./images/product-2.jpg">
													</div>
												</div>
												<div class="img-item">	
													<div  class="" data-productid="3">
														<img src="./images/product-3.jpg">
													</div>
												</div>
												<div class="img-item">	
													<div  class="" data-productid="4">
														<img src="./images/product-4.jpg">
													</div>
												</div>
											</div>
										</div>

										<!--<div class="leftSide">
											<div class="main">
												<img src="./images/product-1.jpg">
											</div>
											<div class="thumbnails">
												<div class="thumbnail">
												<img src="./images/product-3.jpg">
												</div>
												<div class="thumbnail">
												<img src="./images/product-4.jpg">
												</div>
												<div class="thumbnail">
												<img src="./images/product-5.jpg">
												</div>
												<div class="thumbnail">
												<img src="./images/product-6.jpg">
												</div>
											</div>
										</div>-->
										<div class="icon-display"><i class="icon-animation icon3x fas fa-chevron-down"></i></div>
										<div class="rightSide">
											<div class="product-info">
											<span class="product-title"class="height:fit-content;">${response.title}</span>
											<span class="product-pricing" style="display:inline-flex;position:relative; width:30%;font-family:unset;">
														<h4>R${response.price}</h4>
											</span>
											</div>
											<div class="product-price">
											<h4 style="font-size:16px;">Product Details</h4>
											<p style="font-size:12px">${response.description}</p>
											<form>
												<div class="product-properties">
													<span class="product-color">
														<!--<h4>Color</h4>-->
														<ul class="ul-color">
															
															
															<input class="selectColor" style="display:none" type="radio" id="black" name="color" value="black">
															<label style="background-color:black" class="black" for="black"></label>

															<input  class="selectColor" style="display:none" type="radio" id="white" name="color" value="white">
															<label style="background-color:white" class="white" for="white"></label>

															<input  class="selectColor" style="display:none" type="radio" id="red" name="color" value="red">
															<label style="background-color:red" class="red" for="red"></label>
															<!--<li><div class="black active-color"></div></li>
															<li><div class="white"></div></li>
															<li><div class="blue"></div></li>-->
														</ul>
													</span>
													<span class="product-size">
														<!--<h4>Size</h4>-->
														<ul class="ul-size">
															<li><div>XS</div></li>
															<li><div>S</div></li>
															<li><div>M</div></li>
															<li><div>L</div></li>
															<li><div>XL</div></li>
														</ul>
													</span>
													
													
													
												<!--<div>
													<select>
														<option value="" selected disabled>Select Size</option>
														<option value="S">S</option>
														<option value="M">M</option>
														<option value="L">L</option>
													</select>
													<span><i class="bx bx-chevron-down"></i></span>
												</div>
												<div>
													<input name="red" id="red" type="radio">
													<label for="red" style="background-color:red; border:1px solid #777; border-radius:50%;"></label>
													<input name="black" id="black" type="radio">
													<label for="black" style="background-color:black; border:1px solid #777; border-radius:50%;"></label>
													<input name="white" id="white" type="radio">
													<label for="white" style="background-color:white; border:1px solid #777; border-radius:50%;"></label>
													<input name="red" id="red" type="radio">
													<label for="red" style="background-color:blue; border:1px solid #777; border-radius:50%;"></label>
													<span><i class="bx bx-chevron-down"></i></span>
												</div>-->
												</div>
											</form>
											
												
												

											
											<form class="product-form">
											
											<button class="bag-btn addCart in_stock" data-cartid=${btnId} style="display:inline-flex">Add To Cart</button>

											</form>
										</div>
									</div>
								</section>`;

		 if(response.in_stock =="no") { addbtn = document.querySelector('.in_stock'); addbtn.innerHTML = 'out of stock'; addbtn.disabled= true;}						
		 						$.when(getDetails('image',btnId)).then(wrap = document.querySelectorAll('.card-wrapper img'));
								getDetails('color',btnId);
								getDetails('color_dbl',btnId);
								getDetails('size',btnId);


									//product-card js START
											//productCardJS();
									//product-card js END

									//get bag btn start
									const ui = new UI();
									ui.getBagButtons();
									//get bag btn end
									//productDetail.removeAttribute('data-detail',''+btnId+'');
									//productDetail.getAttribute('data-detail',''+btnId+'');
									$('#editprofileproduct').scrollTop(0);
									editDetail = document.getElementById('editprofileproduct')
									productDetail = document.getElementById('product-detail')
									editDetail.style.width = "100%";
									//$('#product-detail').fadeIn('slow');
									$('#product-detail').addClass('active-detail')
									productDetail.setAttribute('data-detail',''+btnId+'');
									
									$("#mymodal-bg").fadeIn('slow');
									$(document).on('click','.close-detail', function() {
										//$('#product-detail').fadeOut('slow');
										editDetail.style.width = "0%";
										$("#mymodal-bg").fadeOut('slow');
									})
										
										prodImg = document.querySelector('.product-imgs');
										imgShowcase = document.querySelector('.img-showcase');
										chevron = document.querySelector('.icon-display i');
										mymodalbg = document.getElementById('#mymodal-bg');
										//console.log(wrap)
										//mymodalbg.addEventListener('scroll', function() {
										$('#editprofileproduct').scroll(function() {	
											prodImg.style.position = 'sticky';
											prodImg.style.top = '0px'
											prodImg.style.zIndex = '10';
											//wrap = document.querySelectorAll('.card-wrapper img');
											wrap.forEach(wrapItem => {
												wrapItem.style.position = 'sticky';
												wrapItem.style.top = '1px'
												wrapItem.style.zIndex = '10';
												width = 100- +($('#editprofileproduct').scrollTop()/$('#editprofileproduct').height())*100;
												opacity = 1.4- +($('#editprofileproduct').scrollTop()/$('#editprofileproduct').height()*4);
												chevron.style.opacity = opacity;
												//wrapItem.style.minWidth = 100- +($('body').scrollTop()/$('body').height())*100+'%';
												if(width>50) {
													//width = 100-($('body').scrollTop()/$('body').height())*100+'%';
													
													n = document.querySelector('.active-img').getAttribute('data-cnt');
													//mySum = width*(n-1)+'vw';
													mySum =0+'px';
													wrapItem.style.width =width+'%';
													imgShowcase.style.transform = 'translateX(-'+mySum+')';
												} else {
													wrapItem.style.width = '50%';
													rightSide = document.querySelector('.rightSide .product-price');
													rightSide.style.position = 'sticky';
													rightSide.style.top = '51vh';
													//rightSide.style.zIndex = '10';
													
													//imgShowcase.style.transform = "translateX(0px)"
												}
												
												//wrapItem.style.width = 100- +$('body').scrollTop()/12+'%';
												//console.log(document.body.pageYOffset/12)
											})
										})
						},
						error: function(r) {
							console.log(r)
						}
   });
	
})
//open product detail end
