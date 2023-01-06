import "./featuredProperties.css";

const FeaturedProperties = ( {hotels} ) => {
  const featuredHotels = hotels.filter(hotel => hotel.featured)
  // console.log(featuredHotels)
  return (
    <div className="fp">

      <div className="fpItem"> 
        <img
          src={featuredHotels[0].photos[0]}
          alt={featuredHotels[0].name}
          className="fpImg"
        />
        <span className="fpName"><a href={`/hotels/${featuredHotels[0]._id}`} >{featuredHotels[0].name}</a></span>
        <span className="fpCity">{featuredHotels[0].city}</span>
        <span className="fpPrice">Starting from ${featuredHotels[0].cheapestPrice}</span>
        <div className="fpRating">
          {/* <button>8.9</button>
          <span>Excellent</span> */}
        </div>
      </div>

      <div className="fpItem">
        <img
          src={featuredHotels[1].photos[0]}
          alt={featuredHotels[1].name}
          className="fpImg"
        />
        <span className="fpName"><a href={`/hotels/${featuredHotels[1]._id}`} >{featuredHotels[1].name}</a></span>
        <span className="fpCity">{featuredHotels[1].city}</span>
        <span className="fpPrice">Starting from ${featuredHotels[1].cheapestPrice}</span>
        <div className="fpRating">
        </div>
      </div>

      <div className="fpItem">
        <img
          src={featuredHotels[2].photos[2]}
          alt={featuredHotels[2].name}
          className="fpImg"
        />
        <span className="fpName"><a href={`/hotels/${featuredHotels[2]._id}`}>{featuredHotels[2].name}</a></span>
        <span className="fpCity">{featuredHotels[2].city}</span>
        <span className="fpPrice">Starting from ${featuredHotels[2].cheapestPrice}</span>
        <div className="fpRating">
        </div>
      </div>

      

    </div>
  );
};

export default FeaturedProperties;
