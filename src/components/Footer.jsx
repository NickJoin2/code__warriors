import React from 'react'
import vector from '../assets/footer/Vector-1.svg'

const Footer = () => {
  return (
    <div>
           <footer class="footer">
    <div class="container">
      <ul class="footer__item">
        <li class="footer__list"><a href="https://vk.com/nick_join"><img src={vector}/></a></li>
      </ul>

      <div class="footer-text">Code Warriors</div>
    </div>
  </footer>  
    </div>
  )
}

export default Footer