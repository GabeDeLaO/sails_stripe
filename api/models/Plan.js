/**
 * Plan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    amount : { type: 'string' },

    interval : { type: 'string' },

    name : { type: 'string' },

    currency : { type: 'string' },

    stripePlanId : { type: 'string' }
  }
};

