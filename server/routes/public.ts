import { Request, Response, Router } from 'express';
import { DateUtils } from '../utils/DateUtils';
import { DbContext } from '../repository/DbContext';

const publicRouter: Router = Router();

publicRouter.get('/simple', (request: Request, response: Response) => {
    response.json({
        text: 'Hello Angular 2',
        title: 'Greetings.',
    });
});

publicRouter.get('/messages', (request: Request, response: Response) => {

    let mysql = require('mysql');
    let connection = mysql.createConnection(DbContext.prodDb);

    connection.connect((err) => {

        if (err) {
            throw err;
        }

        connection.query('select * from message', (error, result) => {

            if (error) {
                throw error;
            }

            response.json(result);
        });
    });
});

publicRouter.post('/messages/answer', (req: Request, res: Response) => {

    let mysql = require('mysql');
    let connection = mysql.createConnection(DbContext.prodDb);

    let model = req.body;
    let updateDate = DateUtils.getNow();

    let sql = "update message set Answer = '" + model.Answer +
        "', UpdateDateTime = '" + updateDate + "' " + "where Id = " + model.Id;
    let sqlGet = 'select * from message where Id = ' + model.Id + ' limit 1';

    connection.connect((err) => {

        if (err) {
            throw err;
        }

        connection.query(sql, (error, response) => {

            if (error) {
                throw error;
            }

            connection.query(sqlGet, (er, re) => {

                res.json(re);
            });
        });
    });
});

publicRouter.post('/messages/insert', (req: Request, res: Response) => {

    let mysql = require('mysql');
    let connection = mysql.createConnection(DbContext.prodDb);

    let message = req.body;
    let createDate = DateUtils.getNow();

    let sql = "insert into message (Name, Email, Phone, Message, Answer, " +
        "CreateDateTime, UpdateDateTime) values ('" +
        message.Name + "', '" +
        message.Email + "', " +
        (message.Phone ? ("'" + message.Phone + "', '") : "null, '") +
        message.Message + "', null, '" +
        createDate + "', null)";

    connection.connect((err) => {

        if (err) {
            throw err;
        }

        connection.query(sql, (error, response) => {

            if (err) {
                throw error;
            }

            // console.log(response.insertId);
            res.json(response.insertId);
        });
    });
});

export { publicRouter };
