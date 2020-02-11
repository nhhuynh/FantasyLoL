import React from 'react'

 function Navbar() {
    return (
        <nav className  = "navbar navbar-expand-md navbar-dark bg-dark sticky-top">
         <div className  = "container-fluid">
           
           <a className  = "navbar-brand" href="#">LoLFantasy</a>
           
            <button className  = "navbar-toggler" type="button" data-toggle="collapse" data-target= "#navbarResponsive">
              <span className ="navbar-toggler-icon"></span>
            </button>
            <div className ="collapse navbar-collapse" id="navbarResponsive">
              <ul className ="navbar-nav ml-auto">
                <li className ="nav-item dropdown">
                  <a className ="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Teams
                  </a>
                  <div className ="dropdown-menu">
                    <a className ="dropdown-item" href="#">Team Liquid</a>
                    <a className ="dropdown-item" href="#">Dignitas</a>
                    <a className ="dropdown-item" href="#">Cloud9</a>
                  </div>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href="#">Players</a>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href="#">My Team</a>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href="#">Schedule</a>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href="#">Draft</a>
                </li>
              </ul>
         </div>
       </div>
       </nav>
    );
}

export default Navbar;
