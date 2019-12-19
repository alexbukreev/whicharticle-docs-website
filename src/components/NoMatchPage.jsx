import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import Footer from './Footer'
//import ReactDOM from 'react-dom'
//import M from 'materialize-css';

class NoMatchPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <section 
        className='flex__common flex__vertical-dirertion h100'
        style={{height: '100vh'}}
      >
        <NavTop />
        <div className='container flex-fill'>
          <div className='flex__common flex__align-items-baseline flex__wrap'>
            <h1>404</h1>
          </div>
          <div className="hr"/>
          <h4>
            Page not found!
          </h4>
        </div>
        <Footer/>
      </section>
    )
  }
}

export default NoMatchPage;
