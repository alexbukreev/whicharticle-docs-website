import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavTopRu from './NavTopRu'
import FooterRu from './FooterRu'
//import ReactDOM from 'react-dom'
import M from 'materialize-css';
import Config from '../../lib/config'

class HomeRu extends Component {
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
        <NavTopRu />
        <div className='container flex-fill'>
          <div className='flex__common flex__align-items-baseline flex__wrap'>
            <h1>Which Article &ndash; Der, Die, Das</h1>
          </div>
          <div className="hr"/>
          <h4>
            Угадывайте артикли немецких существительных из своих собственных коллекций слов с помощью тестов!
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
                alt='Доступно в Google Play'
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
                src={`${Config.uri}/res/google_logo_ru.gif`}
                alt='Доступно в Google Play'
              />
            </a>
          </div>
          <article>
            <div className='site-specialTextBlok'>
              <p>
                 Какой артикль: Der, Die или Das? <b>«Which Article - Der, Die, Das»</b> —  это мобильное приложение, которое помогает вам создавать прочные ментальные связи между немецкими существительными и их артиклями посредством ваших собственных коллекций слов и тестов. Выбирайте только те слова, которые вы хотите выучить сами!
              </p>
              <p>
                Если вы новичок или уже продвинулись в изучении языка, вспомнить правильный грамматический род существительного может быть непросто. Это приложение было разработано в сотрудничестве с изучающими немецкий язык на протяжении длительного времени и разработано с учетом удобства и эффективности.
              </p>
              <p>
                Убедитесь, что у вас есть доступ в Интернет при использовании этого приложения.
              </p>
            </div>
            <img 
              className="responsive-img z-depth-1 mt-3rem mb-1rem materialboxed" 
              src={`${Config.uri}/res/banner.png`}
              alt='«Which Article - Der, Die, Das»'
            />
            <div className='site-specialTextBlok'>
              <blockquote>
                Начните с создания новой «Коллекции» и наполнения ее существительными, которые вы хотите изучить, просто выбрав их из встроенного словаря. Эта функция экономит ваше время на начальную подготовку, так что вы можете быстрее приступить к обучению.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <blockquote>
                Словарь также предоставляет дополнительную информацию о каждом существительном, такую как транскрипция, синонимы и альтернативные переводы.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <blockquote>
                Основной перевод может быть настроен для любого слова в «Коллекции», в зависимости от вашего конкретного случая.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <blockquote>
                Система коллекций позволяет создавать отдельные наборы существительных и маркировать их цветовым ярлыком. Это облегчает обработку информации, что создает более эффективный и организованный опыт обучения.
              </blockquote>
            </div>
            <div className='site-specialTextBlok'>
              <p>
                <b>«Which Article - Der, Die, Das»</b> имеет чистый, минималистичный дизайн — он не отвлекает внимание и приятен для глаз. 
              </p>
              <p>
                Станьте одним из первых пользователей, которые попробуют приложение и расскажут нам о своем опыте! Отзывы и обзоры помогают нам улучшаться, поэтому всегда приветствуются.
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
                      src={`${Config.uri}/res/google_logo_ru.gif`}
                      alt='доступно в Google Play'
                />
              </a>
            </div>
          </article>
        </div>
        <FooterRu/>
      </section>
    )
  }
}

export default HomeRu;
