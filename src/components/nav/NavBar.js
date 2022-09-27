import './NavBar.css'
import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'
import logo from './logo.png'


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" width={80}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 fs-5">
                <a className="nav-link" href="#">Mujer</a>
              </li>
              <li className="nav-item px-3 fs-5">
                <a className="nav-link" href="#">Hombre</a>
              </li>
              <li className="nav-item px-3 fs-5">
                <a className="nav-link" href="#">Niños</a>
              </li>
              <li className="nav-item px-3 fs-5">
                <a className="nav-link" href="#">Oferta semanal</a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
    </div>
  )
}

export default NavBar
