import React, { Component } from 'react'
import NavTopRu from './NavTopRu'
import FooterRu from './FooterRu'
//import ReactDOM from 'react-dom'
// import M from 'materialize-css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PrivacyRu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div 
        className='flex__common flex__vertical-dirertion h100'
        style={{height: '100vh'}}
      >
        <NavTopRu />
        <div className='container flex-fill'>
          <h1>Политика конфи&shy;ден&shy;циальности</h1>
          <div className="hr"/>
          <article className='site-specialTextBlok'>
            <p>
              Александр Букреев создал бесплатное приложение <b>«Which Article - Der, Die, Das»</b>.
            </p>
            <p>
              Эта страница используется для информирования посетителей о наших правилах сбора, использования и раскрытия Личной информации, если кто-либо решил использовать наше приложение (далее — Сервис).
            </p>
            <p>
              Если вы решите использовать наш Сервис, вы соглашаетесь на сбор и использование информации в соответствии с этой политикой. Личная информация, которую мы собираем, используется для предоставления и улучшения Сервиса. Мы не будем использовать или передавать вашу информацию кому-либо, кроме случаев, описанных в настоящей Политике конфиденциальности.
            </p>
            
            <h5>Сбор и использование информации</h5>
            <p>
              Для более удобного использования нашего Сервиса мы можем потребовать, чтобы вы предоставили нам определенную личную информацию, включая, помимо прочего, электронную почту. Информация, которую мы запрашиваем, будет сохранена нами и использована, как описано в настоящей политике конфиденциальности.
            </p>
            <p>
              Сервис не использует сторонние сервисы, которые могут собирать информацию, используемую для вашей идентификации.
            </p>
            
            <h5>Безопасность</h5>
            <p>
              Мы ценим ваше доверие в предоставлении нам вашей личной информации, поэтому мы стремимся использовать коммерчески приемлемые способы ее защиты. Но помните, что ни один метод передачи через Интернет или метод электронного хранения не является на 100% безопасным и надежным, и мы не можем гарантировать его абсолютную безопасность.
            </p>
            
            <h5>Изменения в настоящей Политике конфиденциальности</h5>
            <p>
              Мы можем обновлять нашу Политику конфиденциальности время от времени. Таким образом, вам рекомендуется периодически просматривать эту страницу на наличие изменений. Мы сообщим вам о любых изменениях, разместив новую Политику конфиденциальности на этой странице. Эти изменения вступают в силу сразу после их публикации на этой странице.
            </p>
            
            <h5>Свяжитесь с нами</h5>
            <p>
              Если у вас есть какие-либо вопросы или предложения относительно нашей Политики конфиденциальности, не стесняйтесь обращаться к нам по адресу <a href="mailto:info@whicharticle.com">info@whicharticle.com</a>.
            </p> 
            <p>
              Команда разработчиков.
            </p> 
          </article>
        </div>
        <FooterRu/>
      </div>
    )
  }
}

export default PrivacyRu;
