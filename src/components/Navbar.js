import React from 'react';
import Logo from '../images/white-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg w-100  mx-auto  navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">
          <img src={Logo} alt="Logo" className="d-inline-block align-text-top img-fluid" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="dropdown justify-end">

              <button className="btn  language-button dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </button>
              <ul className="dropdown-menu  " aria-labelledby="dropdownMenuButton2">
                <li className="dropdown submenu justify-end">

                  <button className="btn  services-button dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Content (VAS)
                  </button>
                  <ul className="services-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item " href="#"> Digital Marketing</a></li>
                  </ul>
                </li>

                <li><a className="dropdown-item" href="#">Production</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>

            </li>

            
            <li className="dropdown justify-end">

              <button className="btn language-button dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
              </button>
              <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item " href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  )
}

export default Navbar