
	
		function openNavedit() {
		
		document.getElementById("editprofilecv").style.width = "90%";
		$('#mymodal-bg').fadeIn('slow');
		$('.cart-content').addClass('fadeIn');
		}
		
		function closeNavedit() {document.getElementById("editprofilecv").style.width = "0";
		$('#mymodal-bg').fadeOut('slow');
		
		$('.cart-content').removeClass('fadeIn');
		
		}
		
		function openCheckout() {

		document.getElementById("checkoutnav").style.width = "90%";
		$('#mymodal-bg').fadeIn('slow');
		$('.cart-content').removeClass('fadeIn');
		setTimeout(function(){$('.checkout-instructions').addClass('fadeIn')},0);
		}
		
		function closeCheckout() {document.getElementById("checkoutnav").style.width = "0";
		$('#mymodal-bg').fadeOut('slow');
		$('.checkout-instructions').removeClass('fadeIn');
		}

		function openProduct() {
			document.getElementById('editprofileproduct').style.width = "100%";
		$('#mymodal-bg').fadeIn('slow');
		}
		function closeProduct() {
			document.getElementById('editprofileproduct').style.width = "0%";
		$('#mymodal-bg').fadeOut('slow');
		}
 		function goToSocial() {window.location.href="https://instagram.com/goodcaregoodhairza/"}		function openStorePolicy() {
			$('#store-policy').fadeIn('slow');
			$('#mymodal-bg').fadeIn('slow')
		}
		function closeStorePolicy() {
			$('#store-policy').fadeOut('slow');
			$('#mymodal-bg').fadeOut('slow');
		}
		document.addEventListener('DOMContentLoaded', function() {
			storePolicy = document.querySelector('.store-policy')
			storePolicy.addEventListener('click', function(storeEvent) {
				storeEvent.preventDefault()
			})
			
		})


