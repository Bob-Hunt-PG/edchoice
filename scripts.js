$(function() {
	$('#Password').on('blur', function() {
		$(this).closest('table').find('input.btn').focus();
	});

	if($('#tabDelDetails').length > 0) {
		$('.bordertableheader[colspan="2"]').attr('colspan', '');	
	}

	if (window.location.href.indexOf("ProductCats.asp") > -1) {
		$('.no-records-found').closest('.bootstrap-table').hide();

		$('#btnCartContinue, #btnCart').addClass('btn btn-primary');
	}

	if (window.location.href.indexOf("cart.asp") > -1) {
		$('#tabDelDetails').first('tr').find('.bordertableheader b').text('Delivery Details');
		$('#tabDelDetails').first('tr').find('.bordertableheader b').closest('tr').clone().appendTo('#tabDelDetails > tbody').html('<b>Order Details</b>');
		$('#tabDelDetails').find('tr .addresslabel:contains("Contact Phone Number")').text('Order Comments');
		$('#AddressPhoneNumber').closest('tr').detach().appendTo('#tabDelDetails > tbody');

		$("#AddressPhoneNumber").each(function() {
		    var style = $(this).attr('style'), 
		    	textbox = $(document.createElement('textarea')).attr({
			        id : 'AddressPhoneNumber',
			        name : 'AddressPhoneNumber',
			        value : $(this).val(),
			        "class" : $(this).attr("class"),
			        rows : 4
		    	});
		    $(this).replaceWith(textbox);
		});
	}

	if(window.location.href.indexOf("Checkout.asp") > -1) {
		var row = $('table tr td input[value="5"]').parent().parent().clone();
		$('table tr td input[value="5"]').closest('table').append(row);
		$('table tr td input[value="5"]').first().closest('tr').remove();
	}
});