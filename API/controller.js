function handleErrors(res, err)
{
    console.log('Got an error: ', err);
    return res.status(400).send(err);
}

// export a single function that creates an OBJECT
// the only argument is a mongoose model
module.exports = function(Model)
{
    return {
        create: (req, res, next) =>
        {
            Model.create(req.body, function(err, result)
            {
                if (err) {
                    handleErrors(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} created successfully.`,
                    result,
                });
            });
        },
        update: (req, res, next) =>
        {
            const query = {
                _id: req.params.id
            };
            Model.update(query, req.body, (err, result) => {
                if (err) {
                    handleErrors(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} updated successfully.`,
                    result,
                });
            });
        },
        delete:(req, res, next) =>
        {
            const query = {
                _id: req.params.id
            };
            Model.delete(query, (err, result) => {
                if (err) {
                    handleErrors(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} deleted successfully.`,
                    result,
                });
            });
        },
        readAll:(req, res, next) =>
        {
            Model.read({}, (err, result) =>
            {
                if (err) {
                    handleErrors(res, err);
                    return;
                }
                res.json(result);
            })
        },
        readById:(req, res, next) =>
        {
            const query = {
                _id: req.params.id,
            };
            Model.read(query, (err, result) =>
            {
                if (err)
                {
                    handleErrors(res, err);
                    return;
                }
                res.json(result);
            });
        },
    }
}
