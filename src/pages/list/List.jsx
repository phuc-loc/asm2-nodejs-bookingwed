import React, {useEffect} from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from "../../utils/axios";


const List = ({ state, hotels }) => {

  // const location = useLocation();
  const [destination, setDestination] = useState(state.destination);
  const [date, setDate] = useState(state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(state.options); 
  const [rooms, setRooms] = useState('')

  const handleSearch = async () => {
    // e.preventDefault();
    try {
      const request = await axios.post(
        '/search',
        { destination: destination, options: options },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      console.log('request.data',request.data)
      setRooms(request.data);
    } catch(err) {
      console.log('Error: ', err)
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">

        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText"> 
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={ () => handleSearch() }>Search</button>
          </div> 
          
          <div className="listResult">
            <SearchItem rooms = {rooms} hotels={hotels} />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
