/**
 * StripeController
 *
 * @description :: Server-side logic for managing Stripes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `StripeController.index()`
   */
  index: function (req, res) {
    return res.view({});
  },


  /**
   * `StripeController.charge()`
   */
  charge: function (req, res) {

    //var stripe = require("stripe")("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

    var test = [{
      name: 'John Doe',
      card: 1234567,
      amount: 12.99
    },{
      name: 'Jane Doe',
      card: 2345678,
      amount: 9.99
    }];

    return res.view({
      test: test
    });
  },


  /**
   * `StripeController.customer()`
   */
  customer: function (req, res) {
    return res.json({
      todo: 'customer() is not implemented yet!'
    });
  },


  /**
   * `StripeController.subscription()`
   */
  subscription: function (req, res) {
    return res.json({
      todo: 'subscription() is not implemented yet!'
    });
  }
};

