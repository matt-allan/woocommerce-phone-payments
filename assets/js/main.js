jQuery(function($) {

	$('.wc-phone-order-add-payment').click(function() {

		$.blockUI(
			{
				message: "<h2><a href='" + document.URL + "' class='wc-phone-order-reload button button-primary'>Reload</a></h2>",
				css: { backgroundColor: '#444444', color: '#fff', cursor: 'default' }
			}
		);

		$('.calculate-action').trigger('click');
	});
});
