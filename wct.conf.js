'use strict';

module.exports = {
  registerHooks: function(context) {
    context.options.plugins.sauce.browsers = process.env.SAUCE_BROWSERS ? JSON.parse(process.env.SAUCE_BROWSERS) : 'default';
  }
};
