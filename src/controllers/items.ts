import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'Error get item')
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'Error get items')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR UPDATE ITEMS')
    }
}

const postItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        handleHttp(res, 'ERROR POST ITEM')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR DELETE ITEM')
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}