import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

import 'materialize-css/dist/css/materialize.css'
import './css/flex.css'
import './css/colors.css'
import './css/vendors.css'
import './css/index.css'
import './css/site.css'
import App from './components/App'
//import NavTop from './components/NavTop'
import * as serviceWorker from './serviceWorker'

library.add(
    faBars
)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
)
// ReactDOM.render(<NavTop />, document.getElementById('navtop'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
