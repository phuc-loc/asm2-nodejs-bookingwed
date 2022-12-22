import React, { Component } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"


class Main extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/signup" element={<Signup />}/> */}
                    <Route path="/hotels" element={<List />} />
                    <Route path="/hotels/:id" element={<Hotel />} />
                </Routes>

            </div>
        )
    }
}

export default Main;