/* بسم رب العالمين */

import express, { Application, Request, Response } from "express";
import { Index } from "../models";

const store = new Index();

// POST DATA TO DB:
const add = async (req: Request, res: Response): Promise<void> => {
    try {
        const { description } = req.body;
        const todo = await store.add(description)
        res.json(todo);

    }
    catch (error) {
        throw new Error('Cannot add data' + error)
    }

}


// SELECT ALL DATA:
const show = async (req: Request, res: Response) => {
    try {
        const todos = await store.show();
        res.json(todos);

    } catch (error) {
        throw new Error("Cannot get Data")
    }
}
// SELECT ONE DATA:
const showOne = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await store.showOne(parseInt(id));
        res.json(todo);
    }
    catch (error) {
        throw new Error("Cannot get Data")
    }
}

// Edit
const edit = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const newTodo = await store.edit(description, parseInt(id));
        res.json(newTodo);
    }
    catch (error) {
        throw new Error("Cannot update that Data")
    }
}

// Delete All
const deleteAll = async (req: Request, res: Response) => {
    try {
        const empty = await store.delete();
        res.json(empty);
    }
    catch (error) {
        throw new Error("Cannot update that Data")
    }
}
// Delete One
const deleteOne = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const empty = await store.deleteOne(parseInt(id));
        res.json(empty);
    }
    catch (error) {
        throw new Error("Cannot update that Data")
    }
}



const todoRouter = (app: Application) => {
    app.post('/todos', add);
    app.get('/todos', show);
    app.get('/todos/:id', showOne);
    app.put('/todos/:id', edit);
    app.delete('/todos', deleteAll);
    app.delete('/todos/:id', deleteOne);
}

export default todoRouter;

/* لله الحمد في الاولي والآخرة */