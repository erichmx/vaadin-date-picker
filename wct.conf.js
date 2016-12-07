'use strict';

module.exports = {
  registerHooks: function(context) {
    context.emit('log:debug', '-- BROWSERS --');
    context.emit('log:debug', process.env.BROWSERS);
    context.emit('log:debug', JSON.stringify(JSON.parse(process.env.BROWSERS)));
    context.options.plugins.sauce.browsers = JSON.parse(process.env.BROWSERS);
  }
};
