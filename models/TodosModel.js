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
            (val) => { obj = val },
            (err) => { obj = { err: err } }
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
            (val) => { obj = val },
            (err) => { obj = { err: err } }
        )

        return obj;

    },

    deleteOne: async (id) => {

        let obj = {};

        await new Promise((resolve, reject) => {

            const sql = `DELETE FROM todos WHERE id = ${id}`;

            mySqlPool.query(sql, (err, result, fields) => {
                if (err) reject(err);
                else resolve({ err: err, result: result, fields: fields });
            });

        }).then(
            (val) => { obj = val },
            (err) => { obj = { err: err } }
        )

        return obj;

    },
    updateOne: async (id, title) => {

        let obj = {};

        await new Promise((resolve, reject) => {

            const sql = `UPDATE todos SET title = '${title}' WHERE id = '${id}'`;

            mySqlPool.query(sql, (err, result, fields) => {
                console.log('___________________________________________--')
                console.log(err)
                if (err) reject(err);
                else resolve({ err: err, result: result, fields: fields });
            });

        }).then(
            (val) => { obj = val },
            (err) => { obj = { err: err } }
        )

        return obj;

    }



}