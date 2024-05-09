import * as itemServices from "../services/serviceItem.js";

const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

//to set success message
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//add items
export const post = async(request, response) => {
    try{
        const newDetails = request.body;
        const savedDetails = await itemServices.addItems(newDetails);
        setSuccessResponse(savedDetails, response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//get all items
export const getAllItemDetails = async (request, response) => {
    try {
        const details = await itemServices.getAllItemDetails();
        setSuccessResponse(details, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const getItemByName = async (request, response) => {
    try {
        const query = request.params.keyword;
        console.log(query);
        const items = await itemServices.searchByName(query);
        setSuccessResponse(items, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const getItemByDesc = async (request, response) => {
    try {
        const query = request.params.keyword;
        const items = await itemServices.searchByDescription(query);
        setSuccessResponse(items, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const getItemByPrice = async (request, response) => {
    try {
        const query = request.params.keyword;
        const items = await itemServices.searchByPrice(query);
        setSuccessResponse(items, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}