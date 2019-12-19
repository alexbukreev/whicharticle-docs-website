import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Config from '../../lib/config'

class NavTopRu extends Component {
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
              <Link to={'/ru'}>
                <span 
                  className='brand-logo' 
                  style={{
                    marginLeft: '1rem',
                    fontSize: '1.5rem'
                  }}
                >
                  <span>Which&nbsp;Article</span>
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
                  <Link to={'/ru'}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to={'/ru/docs'}>
                    Документация
                  </Link>
                </li>
                <li>
                  <Link to={'/ru/privacy'}>
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  |
                </li>
                <li>
                  <Link to={'/'}>
                    En
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
            <Link to={'/ru'}>
              Главная
            </Link>
          </li>
          <li onClick = {() => this.sidenav.close()}>
            <Link to={'/ru/docs'}>
              Документация
            </Link>
          </li>
          <li onClick = {() => this.sidenav.close()}>
            <Link to={'/ru/privacy'}>
              Политика конфиденциальности
            </Link>
          </li>
          <hr/>
          <li onClick = {() => this.sidenav.close()}>
            <Link to={'/'}>
              En
            </Link>
          </li>
        </ul>
      </section>
    )
  }
}

export default NavTopRu;
