
import useFilterData from '../utils/useFilterData';
import Heading from './Heading';

const Body = () => {
    const { filterData, filterByAny, filterByYear } = useFilterData();
    return (
        <>
        <div>
        <Heading filterData={filterData} filterByAny={filterByAny} filterByYear={filterByYear}/>
        </div>
        </>
    )
}

export default Body;