=== WooCommerce Phone Payments ===
Contributors: matthew-james
Tags: cart, e-commerce, ecommerce, point-of-sale, pos, woocommerce,
Requires at least: 4.0.1 & WooCommerce 2.1
Tested up to: 4.0.1
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easily add payments to orders created from the Woocommerce add order screen.

== Description ==

Woocommerce doesn't offer a way to add payments to manually created orders other than e-mailing an invoice to the customer.

This plugin basically opens a checkout window for the current order so you can add payments using any installed and active payment gateway.

= Screenshots and Usage Info =
* GitHub: https://github.com/matthew-james/woocommerce-phone-payments

= REQUIREMENTS =
* WooCommerce >= 2.1.0

== Installation ==

= Automatic installation =

1. Go to the plugins screen of your wordpress dashboard and click add new.
2. Search for woocommerce-phone-payments.
3. Install the plugin.
4. Click activate plugin.

= Manual installation =

1. Download the plugin.
2. Unzip the plugin.
3. Upload the extracted folder using a ftp client to the wp-content/plugins folder of your site
4. Click activate plugin in the wordpress dashboard.

== Frequently Asked Questions ==

= Does this work with (my payment gateway)? =
This plugin uses the standard Woocommerce checkout page, so if it works with Woocommerce it will work.

Please note that not all merchant accounts allow manual order entry.  **It is your responsiblity to verify your merchant allows processing transactions in this manner.**

+ My customers are getting 2 emails per transaction =

Since you need to save the order before adding a payment, your order is marked as a new order before being changed to processing.  Turning off the email notification for 'new order' will make sure you are only sending an order upon successful payment.

= Where can I get support? =
I am not offering support at this time.  Please report any issues to the [Github page](https://github.com/matthew-james/woocommerce-phone-payments/issues).

= Where can I report bugs? =
Bugs can be reported on the [Github page](https://github.com/matthew-james/woocommerce-phone-payments/issues).

== Changelog ==

= 0.1 =
* New: Initial release
