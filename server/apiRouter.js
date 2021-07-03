var express = require('express');
var extensionCtrl = require('./routes/extension');

exports.router = (function() {
    var apiRouter = express.Router();

    apiRouter.route('/extension/setInfo').post(extensionCtrl.setResultResearch);

    return apiRouter;
})();