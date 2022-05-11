import './navbar.css';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--container">
                <span className='logo'>
                    Dev-Josh-Booking
                </span>
                <div className='navItems'>
                    <button className="navbar--items--button">Register</button>
                    <button className="navbar--items--button">Login</button>

                </div>
            </div>
        </div>
    )
}