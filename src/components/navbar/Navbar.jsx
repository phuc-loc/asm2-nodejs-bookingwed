import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking</span>
        <div className="navItems">
          <button className="navButton">Transaction</button>
          <button className="navButton">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
