const express = require('express');
const controller = require("./controller");
// this module exports an Express router
// this router will probably be called/used in your server.js file

// this function expects a Mongoose model to be passed in as the argument
module.exports = function(models)
{
    let modelsArray = [];
    if(!Array.isArray(models)) {
        modelsArray.push(models);
    }
    else {
        modelsArray = models;
    }
    const router = express.Router();
    modelsArray.forEach((Model) => {
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
});


    return router;
}
