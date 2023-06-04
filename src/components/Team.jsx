import React from 'react'
import vlad from '../assets/avatar/vlad.jpg'
import ej from '../assets/avatar/ej.jpg'
import join from '../assets/avatar/join.jpg'
import Shampik from '../assets/avatar/shapik.jpg'
import { NavLink } from 'react-router-dom';
import vector from '../assets/footer/Vector-1.svg'

const Team = () => {
  return (
    <div>
          <main class="section">
    <div className="container">
        <h1 className="title__1">Our teams</h1>

        <ul className="project">
            <li className="project__list">
            <NavLink  to="/vlad"><img src={vlad} className="project__img" /></NavLink>
            <NavLink  to="/vlad"><h3  className="project__title">Vladlen</h3></NavLink>
            </li>

            <li className="project__list">
            <NavLink  to="/vlad"><img src={ej} className="project__img" /></NavLink>
            <NavLink  to="/vlad"><h3  className="project__title">Vladlen</h3></NavLink>
            </li>

            <li className="project__list">
            <NavLink  to="/vlad"><img src={join} className="project__img" /></NavLink>
            <NavLink  to="/vlad"><h3  className="project__title">Vladlen</h3></NavLink>
            </li>

            <li className="project__list">
            <NavLink  to="/vlad"><img src={Shampik} className="project__img" /></NavLink>
            <NavLink  to="/vlad"><h3  className="project__title">Vladlen</h3></NavLink>
            </li>
        </ul>
    </div>
  </main>

  {/* <footer class="footer"> 
  <div class="container"> 
    <ul class="footer__items"> 
      <li class="footer__list">
        <a  href="https://vk.com/nick_join" target='blank'> 
        <img src={vector}/></a>
        </li> 
    </ul> 
    <div class="footer-text">Code Warriors</div> 
  </div> 
</footer> */}

 
    </div>
  )
}

export default Team