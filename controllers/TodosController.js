const model = require('../models/TodosModel');

module.exports = {

    get: async (req, res) => {
        const { err, result, fields } = await model.get();
        try {
        if (err) { res.send('error var'); }
        else res.json(result); 
        } catch (error) {
            res.json({msg: error, data: []});
        }
    },

    getOne: async (req, res) => {
        const { err, result, fields } = await model.getOne(req.params.id);
        try {
        if (err) { res.send('error var'); }
        else res.json(result); 
        } catch (error) {
            res.json({msg: error, data: []});
        }
    },
    
}