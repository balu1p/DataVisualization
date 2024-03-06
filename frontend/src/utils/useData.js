import axios from 'axios';
import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get('https://datavisualization-j375.onrender.com/api/data/all', {
                headers: {
                    "Content-Type": "application/json"
                }
            });

             setData(response?.data?.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        fetchData()
    }, [])
    return data;
}

export default useData;

