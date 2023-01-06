import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <a 
        href='/home'
        >
        <span className="logo">Booking</span>
        </a>
        <div className="navItems">
          <button className="navButton">Transaction</button>
          <button className="navButton">Logout</button> 
        </div>
      </div>
    </div> 
  )
}

export default Navbar
