import axios from "axios";
import { useState } from "react";

const useFilterData = () => {
    const [filterData, setFilterData] = useState([]);

    const fetchFilterData = async(url, config) => {
        try {
            let res = await axios.get(url, config);
            setFilterData(res.data);
        } catch (error) {
            console.log("filtered data not fetched!", error);
        }
    }

    const filterByAny = async(inputVal) => {
        let url = `https://datavisualization-j375.onrender.com/api/data/any/${inputVal}`;
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        await fetchFilterData(url, config);
    }
    const filterByYear = async(year) => {
        let url = `https://datavisualization-j375.onrender.com/api/data/year/${year}`;
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        await fetchFilterData(url, config);
    }
    return {filterData, filterByAny, filterByYear}
}

export default useFilterData;