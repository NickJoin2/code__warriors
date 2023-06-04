import React from 'react'
import shampik from '../assets/avatar/shapik.jpg'

const Other = () => {
  return (
    <div>
        <main class="section">
     <div class="container">
          <h1 class="title__1">Other projects</h1>

          <ul class="project">
            <li class="project__list">
              <img class="project__img" src={shampik}/>
              <a href="!#"><h3  class="project__title">Gaming streaming portal</h3></a>
            </li>
    
            <li class="project__list">
              <img class="project__img" src={shampik}/>
              <a href="!#"><h3 class="project__title">Video service</h3></a>
            </li>
    
    
            <li class="project__list">
              <img class="project__img" src={shampik}/>
              <a href="!#"><h3 class="project__title">Video portal</h3></a>
            </li>
    
    
            <li class="project__list">
              <img class="project__img" src={shampik}/>
              <a href="!#"><h3 class="project__title">Dating app</h3></a>
            </li>
    
    
            <li class="project__list">
              <img class="project__img" src={shampik}/>
              <a href="!#"><h3 class="project__title">Landing</h3></a>
            </li>
    
            <li class="project__list">
              <img class="project__img" src={shampik}/>
              <a href="!#"><h3 class="project__title">Gaming community</h3></a>
            </li>
          </ul>
      </div> 
  </main>
    </div>
  )
}

export default Other