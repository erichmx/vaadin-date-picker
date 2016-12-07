'use strict';

module.exports = {
  registerHooks: function(context) {
    context.hook('configure', function() {
      context.options.plugins.sauce.browsers = JSON.parse(process.env.BROWSERS);
      return Promise.resolve();
    });
  }
};
