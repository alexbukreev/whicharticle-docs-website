import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import Footer from './Footer'
//import ReactDOM from 'react-dom'
import M from 'materialize-css';
import Config from '../lib/config'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {})
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
            <h1>Which Article &ndash; Der, Die, Das</h1>
          </div>
          <div className="hr"/>
          <h4>
            Practice connecting German nouns to their articles with customisable quizzes!
          </h4>
          <div
            className='mt-3rem mb-2rem'
            style={{
              width: '100%',
              textAlign: 'center'
            }}
          >
            <a href="https://play.google.com/store/apps/details?id=com.whicharticle.derdiedas">
              <img 
                className="responsive-img mr-10" 
                src={`${Config.uri}/res/ico.png`}
                alt='Go to Google Play!'
              />
            </a>
          </div>
          <div
            className='mb-2rem'
            style={{
              width: '100%',
              textAlign: 'center'
            }}
          >
            <a href="https://play.google.com/store/apps/details?id=com.whicharticle.derdiedas">
              <img 
                className="responsive-img"
                src={`${Config.uri}/res/google_logo.gif`}
                alt='Go to Google Play!'
              />
            </a>
          </div>
          <article>
            <div className='site-specialTextBlok'>
              <p>
                Is it Der, Die, or Das? <b>«Which Article - Der, Die, Das»</b> is a mobile app that helps you create lasting mental connections between German nouns and their articles through «collections» and quizzes.
              </p>
              <p>
                No more irrelevant repetition - only pick the words you want to learn yourself!
              </p>
              <p>
                Whether you are a beginner, or have already advanced in your language studies, recalling the correct grammatical gender of a noun can be tricky. This app has been developed in collaboration with long-term German learners and is designed with convenience and efficiency in mind.
              </p>
              <p>
                Make sure you have internet access while using this app.
              </p>
            </div>
            <img 
              className="responsive-img z-depth-1 mt-3rem mb-1rem materialboxed" 
              src={`${Config.uri}/res/banner.png`}
              alt='«Which Article - Der, Die, Das»'
            />
            <div className='site-specialTextBlok'>
              <blockquote>
              Start by creating a new «collection» and filling it with the nouns you need practice with by simply selecting them from the <b>built-in dictionary</b>. This feature saves you time on initial preparation, so that you can get to learning quicker.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <blockquote>
                The dictionary also provides <b>additional information</b> on every noun, such as a transcription, synonyms, and alternative translations.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <blockquote>
                The primary translation can be customised for any word within a «collection», depending on your individual case.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <blockquote>
              The <b>«collection» system</b> allows you to make separate sets of nouns and colour-label them. This makes information processing easier, which creates a more efficient and organised learning experience.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <p>
                <b>«Which Article - Der, Die, Das»</b> displays a clean, minimalistic design - it is distraction-free and pleasant to the eye. 
              </p>
              <p>
                Become one of the first students to try the app out and tell us about your experience! Feedback and reviews help us improve, are therefore always welcome.
              </p>
            </div>
            <div 
              className='flex__common flex__justify-content-center mt-3rem mb-2rem'
              style={{
                width: '100%'
              }}
            >
              <a href="https://play.google.com/store/apps/details?id=com.whicharticle.derdiedas">
                <img 
                      className="responsive-img"
                      src={`${Config.uri}/res/google_logo.gif`}
                      alt='go to Google Play!'
                />
              </a>
            </div>
          </article>
        </div>
        <Footer/>
      </section>
    )
  }
}

export default Home;
