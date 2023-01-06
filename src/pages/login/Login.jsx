import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errmess: '',
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

 
    handleSubmit(value) {
        value.preventDefault()
        // console.log(value.target.password.value)
        const userEmail = value.target.email.value;
        const userPassword = value.target.password.value;
        fetch('http://localhost:5001/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { email: userEmail, password: userPassword } )
        })
            .then(response => {
                console.log('response', response);
                if (response.ok) {
                    return response;

                } else {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ success: true })
            })
            .catch(error => {
                // console.log('//test',error.response)
                this.setState({ errmess: error.message })
            })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                {/* Nav bar */}
                <div className="navbar">
                    <div className="navContainer">
                        <span className="logo">Booking</span>
                        <div className="navItems">
                            <Link to="/signup">
                                <button className="navButton">Sign up</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {this.state.success === true ? (
                    <section>
                        <h1>You are logged in!</h1>
                        <br />
                        <Link to="/home" >
                            <p>Go to Home</p>
                        </Link>
                    </section>
                ) : (
                    <div className="login__body">
                        <div className="card">
                            <p className='text-danger'>
                                {this.state.errmess}
                            </p>
                            <div className="d-flex flex-column card-body">
                                <h1 className="text-center">Login</h1>

                                <form className="d-grid gap-3" onSubmit={(value) => this.handleSubmit(value)}>
                                    <input
                                        name="email"
                                        type="email"
                                    />
                                    <input
                                        name="password"
                                        type="password"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Log in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )

                }

            </div>

        )
    }
}

export default Login;