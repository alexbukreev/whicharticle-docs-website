import React, { Component } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import HomeRu from './ru/HomeRu'
import Privacy from './Privacy'
import Docs from './Docs'
import PrivacyRu from './ru/PrivacyRu'
import DocsRu from './ru/DocsRu'
import NoMatchPage from './NoMatchPage'
//import ReactDOM from 'react-dom'
//import M from 'materialize-css';

class App extends Component {
  constructor(props){
    super(props)
    this.firstRender = true
  }

  getLocalLang() {
    let firstRender = this.firstRender
    return(
      firstRender
        ?
        (
          (
            navigator.languages 
            && 
            navigator.languages.length
          ) 
          ? 
          navigator.languages[0] 
          : 
          navigator.userLanguage 
          || navigator.language 
          || navigator.browserLanguage 
          || 'en'
        )
        :
        'en'
    )
  }

  render() {
    const App = () => (
      <section>
        <Switch>

          <Route exact path="/">
            {
              this.getLocalLang() === 'ru-RU' 
              ? 
              <Redirect to="/ru" /> 
              : 
              <Home />
            }
          </Route>

          <Route exact path="/privacy">
            {
              this.getLocalLang() === 'ru-RU' 
              ? 
              <Redirect to="/ru/privacy" /> 
              : 
              <Privacy />
            }
          </Route>

          <Route exact path="/docs">
            {
              this.getLocalLang() === 'ru-RU' 
              ? 
              <Redirect to="/ru/docs" /> 
              : 
              <Docs />
            }
          </Route>

          {this.firstRender = false}
          <Route exact path='/' component={Home}/>
          <Route path='/privacy' component={Privacy}/>
          <Route path='/docs' component={Docs}/>
          <Route exact path='/ru' component={HomeRu}/>
          <Route path='/ru/privacy' component={PrivacyRu}/>
          <Route path='/ru/docs' component={DocsRu}/>
          <Route component={NoMatchPage} />
        </Switch>
      </section>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    )
  }
}

export default App;
