'use strict';

/**
 * jumbotron service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jumbotron.jumbotron');
