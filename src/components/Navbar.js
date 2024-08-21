import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className = "navbar navbar-expand-sm">
            <div className = "container-fluid">
                <div className = "keepTogether">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to = "/" className = "navbar-brand">Rural Outfitters</Link>
                </div>
                 <div className = "collapse navbar-collapse" id = "navbarNav">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <Link to = "/new" className = "nav-link">New</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/womens" className = "nav-link">Women's</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/mens" className = "nav-link">Men's</Link>
                        </li>
                    </ul>
                </div>
                <div className = "barCart d-flex justify-content-center">
                    <input type = "text" className = "searchbar"></input>
                    <Link to = "/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                        </svg>
                    </Link>
                </div>

                
            </div>
        </nav>
    )
}