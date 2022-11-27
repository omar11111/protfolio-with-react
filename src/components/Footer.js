import React from 'react'
import Logo from '../images/white-logo.png';

const Footer = () => {
    return (
        <footer className="bg-light  text-lg-start">

            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <img className='img-fluid w-50 pb-2' src={Logo}/>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <h6  className="text-dark">First For Information Technology</h6>
                            </li>
                            <li>
                                <a href = "mailto: info@fit.com.sa" className="text-dark">Email: info@fit.com.sa</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>



                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>



                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>



                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>



            <div className="text-center p-3 " >
            <p>© {new Date().getFullYear()} All rights reserved <a className="text-dark" href="https://mdbootstrap.com/">First For Information Technology</a>
</p>
            </div>

        </footer>
    )
}

export default Footer