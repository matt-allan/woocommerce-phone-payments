jQuery( function ( $ ) {

	$('.wc-phone-order-add-payment').click(function() {
		recalc_total();
	})

	function recalc_total() {
		$('.calculate-action').trigger('click');
	}
});
