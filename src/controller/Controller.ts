import { Request, Response } from "express";
import { TaskModel } from "../model/todo.model";

export const home = (req: Request, res: Response) => {
    try{
        return res.send("hello");
    }catch(err){
        console.log(err);
        return;
    }
}

//create todo endpoint
export const createTask = async (req: Request, res: Response) => {
    try{
        const {title, description} = req.body;
        const task = await TaskModel.create({
            title,
            description
        });

        return res.status(201).json(task);
    }catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

//update task endpoint
export const updateTask = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json(updatedTask);
    }catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

//delete a task
export const deleteTask = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const deletedTask = await TaskModel.findByIdAndDelete(id);

        return res.status(200).json({message: "Task deleted successfully", deletedTask});
    }catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

//get all task
export const getAllTasks = async (req: Request, res: Response) => {
    try{
        const allTasks = await TaskModel.find();
        return res.status(200).json(allTasks);
    }catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}