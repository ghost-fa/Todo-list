import React, { Component } 'react'

import Header from './modules/Header'


class Help extends Component{

      componentDidMount(){
        document.title='help | what to do?'
      }
      render(){
        return(
          <div className="container">
            <header tagline="Your questions will be answered here." />
          <ul>
           <li>Where is the data stored?</li>
         <li>We store all information in your browser's LocalStorage.</li>
       </ul>
          </div>
    )
  }
  }


export default Help
