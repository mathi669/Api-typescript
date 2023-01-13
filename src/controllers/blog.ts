import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'Error get BLOG')
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'Error get iBLOG')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR UPDATE IBLOG')
    }
}

const postItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        handleHttp(res, 'ERROR POST BLOG')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR DELETE BLOG')
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}