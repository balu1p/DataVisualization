import { Data } from "../models/data.model.js"

const getData = async(req, res) => {
    //get data from dataBase;

    try {
        const data = await Data.find();
    if(data.length == 0) {
        res.status(404).json({message: "data is not found!"})
    }
    return res.status(200).json(
        {
            data: data,
            message: "Data is successfully fetched",
        }
    )
    }
    catch(err) {
        res.send(500).json({message: err})
    }
    
}
 
 const filteredByYear = async (req, res) => {
    try {
        let { year } = req.params;
        year = Number(year);
         
        if (year<2000 || `${year}` == 'NaN') {
            return res.status(400).json({
                success: false,
                message: "Invalid year",
            })
        }
       
        const allData = await Data.find({
            $or: [{ start_year: year }, { end_year: year }, { published: { $regex: year, $options: 'i' } },
            { added: { $regex: year, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by year ${year}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}
const filteredAllData = async (req, res) => {
    try {
        const { topic, title, sector, region, country, pestle, source, intensity, likelihood } = req.query;
        let filters = {}
      
        if(topic) {
            if (topic.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid topic",
                })
            }
            filters["topic"] = { $regex: topic, $options: 'i' }
        }
        if(title) {
            if (title.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid title",
                })
            }
            filters["title"]= { $regex: title, $options: 'i' }
        }
        if(sector) {
            if (sector.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid sector",
                })
            }
            filters["sector"]= { $regex: sector, $options: 'i' } 
        }
        if(region) {
            if (region.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid region",
                })
            }
            filters["region"]= { $regex: region, $options: 'i' }
        }
        if(country) {
            if (country.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid country",
                })
            }
            filters["country"]= { $regex: country, $options: 'i' }
        }
        if(pestle) {
            if (pestle.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid pestle",
                })
            }
            filters["pestle"]= { $regex: pestle, $options: 'i' }
        }
        if(source) {
            if (source.length < 3) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid source",
                })
            }
            filters["source"] = { $regex: source, $options: 'i' }
        }
        if(intensity) {
            if( `${intensity}` == 'NaN') {
                return res.status(400).json({
                    success: false,
                    message: "Invalid intensity",
                })
            }
           
            filters["intensity"] = parseInt(intensity)
        }
        if(likelihood) {
            if( `${likelihood}` == 'NaN') {
                return res.status(400).json({
                    success: false,
                    message: "Invalid likelihood",
                })
            }
            filters["likelihood"] = parseInt(likelihood)
        }

        const allData = await Data.find(
            {
                $or: [filters] 
            }
            );
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered data successfully`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: e
        })
    }
}


const filteredByAny = async (req, res) => {
    try {
        const { search } = req.params;
        if (search.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid search",
            })
        }
       
        const allData = await Data.find({
            $or: [{ sector: { $regex: search, $options: 'i' } }, { topic: { $regex: search, $options: 'i' } },
            { insight: { $regex: search, $options: 'i' } }, { title: { $regex: search, $options: 'i' } },
            { pestle: { $regex: search, $options: 'i' } }, { source: { $regex: search, $options: 'i' } },
            { url: { $regex: search, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by search ${search}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


export {getData, filteredByYear, filteredAllData, filteredByAny}

