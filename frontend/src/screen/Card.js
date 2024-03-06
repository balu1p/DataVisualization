import React from 'react';
import useData from '../utils/useData';
import Loader from './Loader';

function Card() {
  let data = useData();
  let newData = data ? data.map((x) => x) : null;
  let d = newData ? newData.slice(0, 5) : null;

  return (
    <div className='flex flex-wrap md:space-x-4 lg:space-x-8 justify-around m-4 p-2'>
      {d ? (
        d.map((data) => {
          return (
            <div
              key={data._id}
              className='border rounded-lg m-2 p-2 bg-[#a2b3eb] text-black hover:scale-75 hover:drop-shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
            >
              <h1 className='text-center text-2xl'>Project</h1>
              <h3 className='text-lg'>Topic : {data.topic}</h3>
              <span className='text-lg'>Sector : {data.sector ? data.sector : <span>No data</span>}</span>
              <p>Country: {data.country}</p>
              <p>Region: {data.region}</p>
              <p>Added : {data.added}</p>
              <p>Pestle : {data.pestle}</p>
              <p>Published : {data.published}</p>
              <p>Source : {data.source}</p>
              <p>Relevance : {data.relevance}</p>
              <p>Intensity : {data.intensity}</p>
              <p>Likelihood : {data.likelihood}</p>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Card;
