import  { useEffect, useState } from 'react';
import FetchData from "../../service/FetchData";

const fetchData = new FetchData();

const useLaunches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches()
      .then(launches => setData(state => [...launches]))
  }, []);

  const getLaunches = id => data.find(item => item.id === id);

  return { data, getLaunches }
}
export default useLaunches;
