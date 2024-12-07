const mySqlPool = require('../config/db');

module.exports = {

    get: async () => {

        let obj = {};

        await new Promise((resolve, reject) => {

            mySqlPool.query('SELECT * FROM todos', (err, result, fields) => {
                if (err) reject(err);
                else resolve({ err: err, result: result, fields: fields });
            });

        }).then(
            (val) =>  {obj = val },
            (err) => { obj = {err: err} }
        )

        return obj;

    },

    getOne: async (id) => {

        let obj = {};

        await new Promise((resolve, reject) => {

            mySqlPool.query(`SELECT * FROM todos WHERE id = ${id}`, (err, result, fields) => {
                if (err) reject(err);
                else resolve({ err: err, result: result, fields: fields });
            });

        }).then(
            (val) =>  {obj = val },
            (err) => { obj = {err: err} }
        )

        return obj;
       
    }
    
}