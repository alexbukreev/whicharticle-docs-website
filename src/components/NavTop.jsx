import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavTop extends Component {
  componentDidMount() {
    this.sidenav =  M.Sidenav.init(
        document.getElementById('slide-out'), {
          onCloseEnd: () => {
            for (let item of document.getElementsByClassName("sidenav-overlay")) {
              item.style.display = 'none'
            }
          }
      })
  }

  render() {
    return(
      <section>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link to={`/`}>
                <span 
                  className='brand-logo' 
                  style={{
                    marginLeft: '1rem',
                    fontSize: '1.5rem'
                  }}
                >
                  Which&nbsp;Article
                </span>
              </Link>
              <a 
                data-target="slide-out" 
                className="sidenav-trigger" 
                onClick = {() => this.sidenav.open()}
              >
                <FontAwesomeIcon icon="bars" style={{fontSize:'1rem'}}/>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to={`/`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/docs'}>
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to={`/privacy`}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        
        <ul 
          id="slide-out"  
          className="sidenav"
        >
          <li className="">
            <div className="user-view pt20"/>
          </li>
          <li onClick = {() => this.sidenav.close()}>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li onClick = {() => this.sidenav.close()}>
            <Link to={'/docs'}>
              Docs
            </Link>
          </li>
          <li onClick = {() => this.sidenav.close()}>
            <Link to={'/privacy'}>
              Privacy policy
            </Link>
          </li>
        </ul>
      </section>
    )
  }
}

export default NavTop;
