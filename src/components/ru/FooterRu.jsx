import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import ReactDOM from 'react-dom'
import M from 'materialize-css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FooterRu extends Component {
  componentDidMount() {
    M.Sidenav.init(
      document.getElementById('slide-out'), {})
  }

  render() {
    return(
      <footer className="page-footer mt-25">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Контакт</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="mailto: info@whicharticle.com">
                    info@whicharticle.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Ссылки</h5>
              {/* <a className="grey-text text-lighten-3" href="https://play.google.com/store/apps/details?id=com.whicharticle.derdiedas">
                Google play
              </a> */}
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="https://play.google.com/store/apps/details?id=com.whicharticle.derdiedas">
                    Google play
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://www.facebook.com/whicharticle">
                    Facebook Group
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Alexander Bukreev <br/>
            © {new Date().getFullYear()} Marea Bukreeva
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterRu;
