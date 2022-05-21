const express = require('express');
// this module exports an Express router
// this router will probably be called/used in your server.js file

// this function expects a Mongoose model to be passed in as the argument
module.exports = function(Model)
{

    const router = express.Router();
    const modelKey = Model.modelName.toLowerCase();
    // import the controller factory function
    const controller = require('./controller');
    // get an instance of the controller
    const ctrl = controller(Model);
    router.get(`/${modelKey}`, ctrl.readAll);
    router.get(`/${modelKey}/:id`, ctrl.readById);
    router.post(`/${modelKey}`, ctrl.create);
    router.delete(`/${modelKey}/:id`, ctrl.delete);
    router.put(`/${modelKey}/:id`, ctrl.update);

    return router;
}
