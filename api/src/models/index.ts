/* بسم الله الرحمن الرحيم */

import Client from "../database";

export type TodoTyps = { id: number; description: string; }

export class Index {

    // Add data
    async add(description: string): Promise<void> {
        try {
            // connect to db
            const conn = await Client.connect();
            // make a query on that db 
            const sql = "INSERT INTO Tasks (description) VALUES ($1) RETURNING *";
            // response data from db
            const result = await conn.query(sql, [description])
            // release db
            conn.release();
            // response data as an array to the browser
            return result.rows[0];
        }
        catch (error) {
            console.log(error);

        }
    }

    // Get All Data
    async show() {
        try {
            const conn = await Client.connect();
            const sql = "SELECT * FROM Tasks";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.error(error)
        }
    }

    // Get one Data
    async showOne(id: number) {
        try {
            const conn = await Client.connect();
            const sql = "SELECT * FROM Tasks WHERE id = $1";
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.error(error)
        }
    }

    // Edit data
    async edit(description: string, id: number) {
        try {
            const conn = await Client.connect();
            const sql = "UPDATE Tasks SET description = $1 WHERE id = $2 RETURNING *;";
            const result = await conn.query(sql, [description, id]);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.log(error);
        }
    }

    // Delete All
    async delete() {
        try {
            const conn = await Client.connect();
            const sql = "DELETE FROM Tasks;";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.log(error);
        }
    }


    // Delete one
    async deleteOne(id: number) {
        try {
            const conn = await Client.connect();
            const sql = "DELETE FROM Tasks WHERE id = $1;";
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.log(error);
        }
    }


}
/* الحمد لله رب العالمين */