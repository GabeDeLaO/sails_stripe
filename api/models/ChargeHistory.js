/**
 * ChargeHistory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    date : { type: 'string' },

    type : { type: 'string' },

    customer : { type: 'string' },

    plan : { type: 'string' },

    card : { type: 'string' },

    subscription : { type: 'string' }
  }
};

