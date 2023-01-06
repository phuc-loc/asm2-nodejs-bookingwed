import "./searchItem.css";

const SearchItemRender = ( { 
  name,
  distance,
  // tag,
  type,
  description,
  free_cancel,
  price,
  rate,
  rate_text, 
  img_url,
}) => {
  return (
    <div className="searchItem">

      <img
        src={img_url}
        alt=""
        className="siImg"
      /> 
      
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">{distance} from center</span>
        {/* <span className="siTaxiOp">{tag}</span> */}
        <span className="siSubtitle">
          {description}
        </span>
        <span className="siFeatures">
          {type}
        </span>
        {/* If can cancel */}
        { free_cancel ? (
          <div>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
        ) : (<div></div>) }
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{rate_text}</span>
          <button>{rate}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

const SearchItem = ({rooms, hotels}) => {

  console.log('rooms', rooms);

    rooms.map( (room) => { 
    // const hotelWithRoom =  hotels.find( hotel => {
    //   hotel.rooms.forEach( id => {
    //     console.log(id)
    //     return id === room._id
    //   })
    // })
    // console.log('result: ', result)

    let hotelMatchRoom = hotels.find( hotel =>{
      for(const id of hotel.rooms){
        return id === room._id
      } 
    })
    console.log('hotelMatchRoom', hotelMatchRoom)

    let result = {
      type: room.title,
      description: room.decs,
      price: room.price,
      name: hotelMatchRoom.name,
      distance: hotelMatchRoom.distance,
      image_url: hotelMatchRoom.photos[0]
    }

    return(
        <SearchItemRender type= {result.type} />
    ) 

  })

  


}

export default SearchItem;
