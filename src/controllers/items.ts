import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../service/item.service"

const getItem = async({params}: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getCar(id);
        const data = response ? response : 'NOT_FOUND'
        res.send(data)
    } catch (e) {
        handleHttp(res, 'Error get item')
    }
}

const getItems = async(req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'Error get items')
    }
}

const updateItem = async({params, body}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await updateCar(id,body);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR UPDATE ITEMS')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR POST ITEM', e)
    }
}

const deleteItem = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await deleteCar(id);
        res.send(response)
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