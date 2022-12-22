import "./featured.css";
import { useState, useEffect } from "react";
import axios from '../../utils/axios';

const Featured = () => {

  const [data, setData] = useState('')

  useEffect( () => {
    async function fetchData() {
      const request = await axios.get('/home');
      setData(request.data);
      console.log(request.data)
      return request
    }
    fetchData();
  }, [])

  // console.log('//test', data );
  if (data !== '')
    return (

      <div className="featured">

        <div className="featuredItem">
          <img
            src='/images/ha-noi.jpg'
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Ha Noi</h1>
            <h2>{data.hanoi.length} properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src='/images/HCM.jpg'
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Ho Chi Minh</h1>
            <h2>{data.hcm.length} properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src='/images/da-nang.jpg'
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Da Nang</h1>
            <h2>{data.danang.length} properties</h2>
          </div>
        </div>
      </div>
    );
};

export default Featured;
