import { Data } from "../models/data.model.js"

const storeData = async (req, res) => {
    //hardCore Data 
}

const getData = async(req, res) => {
    //get data from dataBase;

    const data = await Data.find();
    if(!data) {
        throw new Error({message: "Data is not in dataBase"})
    }
    return res.status(200).json(
        {
            data: data,
            message: "Data is successfully fetched",
        }
    )
}

export {getData}