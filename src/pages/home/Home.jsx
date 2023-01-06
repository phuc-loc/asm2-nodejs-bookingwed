import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import React, {useState, useEffect} from "react"; 

const Home = ( {hotels} ) => { 
  // if(data)
  return (
    <div> 
      <Navbar />
      <Header />
      <div className="homeContainer">

        <Featured hotels = {hotels}/>

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList hotels = {hotels} />

        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties hotels = {hotels} />
        
        <MailList />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
