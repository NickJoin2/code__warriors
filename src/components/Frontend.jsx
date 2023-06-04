import React from 'react'; 
import { NavLink } from 'react-router-dom';

 
const Frontend = () => { 
  return ( 
    <div> 
      <div id="page" className="page"> 
        <nav className="nav"> 
          <div className="container"> 
            <nav className="nav-row"> 
              <div className="nav__logo"> 
              <NavLink to="/header"><span>Code Warriors</span></NavLink>
              </div> 
              <ul className="nav-menu"> 
                <li className="nav-item"><NavLink className="nav-link" to="/project">Project</NavLink></li> 
                <li className="nav-item"><NavLink className="nav-link" to="/team">Team</NavLink></li> 
                <li className="nav-item"><NavLink className="nav-link" to="other">Other projects</NavLink></li> 
                <li>
                </li>
              </ul> 
            </nav> 
          </div> 
        </nav> 
      </div> 
 

    </div> 
  ) 
} 
 
export default Frontend;