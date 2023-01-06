import React from "react";
import "./featured.css";

const Featured = ( {hotels} ) => { 
    // console.log('featured',featuredData)
    const hanoi = hotels.filter(hotel => hotel.city === "Ha Noi");
    const hcm = hotels.filter(hotel => hotel.city === "Ho Chi Minh");
    const danang = hotels.filter(hotel => hotel.city === "Da Nang");
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
            <h2>{hanoi.length} properties</h2>
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
            <h2>{hcm.length} properties</h2>
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
            <h2>{danang.length} properties</h2>
          </div>
        </div>
      </div>
    );
};

export default Featured;
