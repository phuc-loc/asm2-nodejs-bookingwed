import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
    Routes,
    Route,
    useParams,
    useLocation
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import axios from "./utils/axios";

function App() {

  const [hotels, setHotels] = useState('');
  
  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('/home');
      setHotels(response.data);
      return response;
    }
    fetchData()
  }, []);

  const HotelWithId = () => {
    let {hotelId} = useParams();
    // console.log(hotelId);
    // const hotel = hotels.filter(hotel => hotel._id === hotelId )
    // console.log('hotel with id', hotel);
    return (
      <Hotel hotel = { hotels.filter(hotel => hotel._id === hotelId)[0]} /> //!!!
    )
  }

  const ListWithParams = () => {
    const {state} = useLocation();
    // console.log(state)
    return(
      <List state={state} hotels = {hotels} />
    )
  }

  if(hotels)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home hotels={hotels} />} />
        {/* Search */}
        <Route path="/hotels" element={< ListWithParams />} /> 
        
        <Route path="/hotels/:hotelId" element={< HotelWithId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
