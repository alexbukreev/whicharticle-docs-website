import React, { Component } from 'react'
import NavTop from './NavTop'
import Footer from './Footer'
//import ReactDOM from 'react-dom'
// import M from 'materialize-css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Privacy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div 
        className='flex__common flex__vertical-dirertion h100'
        style={{height: '100vh'}}
      >
        <NavTop />
        <div className='container flex-fill'>
          <h1>Privacy policy</h1>
          <div className="hr"/>
          <article className='site-specialTextBlok'>
            <p>
                Alexander Bukreev built the <b>«Which Article - Der, Die, Das»</b> app (hereinafter referred to as Service) as a free app.
            </p>
            <p>
                This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
            </p>
            <p>
                If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            
            <h5>Information Collection and Use</h5>
            <p>
                For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email. The information that we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
                The app does not use third party services that may collect information used to identify you.
            </p>
            
            <h5>Security</h5>
            <p>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
            
            <h5>Changes to This Privacy Policy</h5>
            <p>
                We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            </p>
            
            <h5>Contact Us</h5>
            <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:info@whicharticle.com">info@whicharticle.com</a>.
            </p> 
            <p>
              Development team.
            </p>
          </article>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Privacy;
