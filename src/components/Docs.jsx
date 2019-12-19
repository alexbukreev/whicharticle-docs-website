import React, { Component } from 'react'
import NavTop from './NavTop'
import Footer from './Footer'
//import ReactDOM from 'react-dom'
import M from 'materialize-css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Config from '../lib/config'
import DocsBlock from './docs/DocsBlock'
import DocsNav from './docs/DocsNav'

class Docs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)

    this.scrollSpy = M.ScrollSpy.init(
      document.querySelectorAll('.scrollspy'), {})

    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {})

  }

  render() {
    return(
      <div 
        className='flex__common flex__vertical-dirertion h100'
        style={{height: '100vh'}}
      >
        <NavTop/>
        <div className='container flex-fill'>
          <div className="row">
            <div className="col s12 m12 l10">
              <h1>Documentation</h1>
              <div className="hr"/>
              <article className='site-specialTextBlok'>

                <div className="hide-on-middle-only hide-on-large-only">
                  <DocsNav
                      position = {'mobile'}
                  />
                </div>

                <section id="getstarted" className="section scrollspy">
                  <div>
                    <h4>Getting started</h4>
                      <p>
                        In order for the application to work, an internet connection is required. Only an English version of the application is currently available. 
                      </p>
                      <p>
                      The basic application script goes as follows: <a href="#maincollection">«Collection» creation and/or editing</a>  -> <a href="#mainquiz">«Quiz» completion.</a> 
                      </p>
                      <h6 className="common-docs_content">Section contents</h6>
                      <ul>
                        <li><a href="#createnewaccount">Creating a new account</a></li>
                        <li><a href="#auth">Authorisation</a></li>
                        <li><a href="#firstview">Application main screen</a></li>
                      </ul>
                  </div>

                  <DocsBlock
                    id={'createnewaccount'}
                    title = {'Creating a new account'}
                    img = {[`${Config.uri}/res/docs/001.gif`]}
                    body = {[
                      <p>
                        Enter your valid email address in the «Email» field. If you forget your password, a temporary one will be sent to this address.
                      </p>,
                      <p>
                        We recommend you tick off the «Receive updates by e-mail» box in order to receive messages containing information about application updates, including security related ones. 
                      </p>,
                      <p>
                        You will also be able to receive notifications about any maintenance works on the server and its availability at the given moment.
                      </p>,
                      <p>
                        Those settings can always be changed in the <a href="#pref">«Preferences»</a> tab within the application.
                      </p>,
                      <p>
                        Please review the Privacy Policy — this document is also available on the website following  <a href={`${Config.uri}/privacy`}>this link</a>.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"auth"}
                    title = {'Authorisation'}
                    img = {[`${Config.uri}/res/docs/002.gif`, `${Config.uri}/res/docs/002_.gif`]}
                    body = {[
                      <p>
                        If you are already registered in the system, enter your e-mail address and password to sign in. If not — follow the <a href="#createnewaccount">«Create new account»</a> link. 
                      </p>,
                      <p>
                        The «Remember me» setting can always be changed in the <a href="#pref">«Preferences»</a> tab within the application itself.
                      </p>,
                      <p>
                        If your account password is entered incorrectly, a «Wrong password» message will appear under the input field. Below it you will see a link — upon tapping it a new valid password will be sent to you by e-mail. Use that password to sign into your account. The password can be changed in the <a href="#pref">«Preferences»</a> tab.
                      </p>,
                      <p>
                        If you have not received the e-mail within several minutes, please check the «spam» folder in your e-mail.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"firstview"}
                    title = {'Application main screen'}
                    img = {[
                      `${Config.uri}/res/docs/003.gif`,
                      `${Config.uri}/res/docs/017.gif`
                    ]}
                    body = {[
                      <p>
                        After the authorisation process, the  <a href="#maincollection">«Collections»</a> window will open. If the application is being launched for the very first time, this window should not contain any collections.
                      </p>,
                      <p>
                        When you tap on the hamburger menu button on the top left (or simply swipe right), a window containing a list of top-level application interfaces will open: <a href="#maincollection">«Collections»</a>, <a href="#dict">«Dictionary»</a>, <a href="#pref">«Preferences»</a>.   
                      </p>,
                      <p>
                        The current authorised e-mail is displayed at the top. There you can also log out by pressing «Exit».   
                      </p>
                    ]}
                  />
                </section>
                
                <section id="maincollection" className="section scrollspy">
                  <div>
                    <h4>Коллекции</h4>
                    <p>
                      Интерфейс «Коллекции» («Collections») это интерфес с которого стартует приложение. Тут содержится список всех созданных пользователем коллекций.
                    </p>
                    <h6 className="common-docs_content">Section contents</h6>
                    <ul>
                      <li><a href="#createnewcollection">Создание новой коллекции</a></li>
                      <li><a href="#attributeofcollection">Свойства коллекции</a></li>
                      <li><a href="#menage_words_in_collection">Элементы управления коллекцией</a></li>
                      <li><a href="#choose_words_for_collection">Добавление слов в коллекцию</a></li>
                      <li><a href="#sort_words_in_collection">Сортировка слов в коллекции</a></li>
                      <li><a href="#change_words_in_collection">Управление словами в коллекции</a></li>
                      <li><a href="#translate_words_in_collection">Изменение перевода слова</a></li>
                      <li><a href="#stats_words_in_collection">Статистика слов в коллекции</a></li>
                    </ul>
                  </div>

                  <DocsBlock
                    id={"createnewcollection"}
                    title = {'Создание новой коллекции'}
                    img = {[`${Config.uri}/res/docs/003.gif`]}
                    body = {[
                      <p>
                        Для создании новой коллекции нажмите на круглую кнопку с символом «+». После чего откроется окно редактирования <a href="#attributeofcollection">свойств коллекции</a>. 
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"attributeofcollection"}
                    title = {'Свойства коллекции'}
                    img = {[`${Config.uri}/res/docs/004.gif`]}
                    body = {[
                      <p>
                        Первой строкой задается название коллекции, второй ее описание. Далее можно выбрать цветовой лейбл для коллекции, которым она будет отмечена в списке среди других коллекций. 
                      </p>,
                      <p>
                        Имя коллекции уникально. Создать две коллекции с одинаковым именем не получится. 
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"menage_words_in_collection"}
                    title = {'Элементы управления коллекцией'}
                    img = {[`${Config.uri}/res/docs/005.gif`]}
                    body = {[
                      <p>
                        После создания коллекции открывается окно созданной коллекции. Тут пока нет слов. Вверху находится название и описание коллекции, также слева ее цветовой лейбл (если он установлен в <a href="#attributeofcollection">свойствах коллекции</a>).  
                      </p>,
                      <p>
                        Справа вверху кнопка редактирования коллекции, при нажатии на которой открывается <a href="#attributeofcollection">то же окно</a>, что открывалось при создании коллекции.   
                      </p>,
                      <p>
                        Далее идут даты создания и изменения коллекции. причём дата изменения коллекции меняется только если меняется статус хотя бы одного слова после <a href="#mainquiz">тестирования</a>. При добавлении, удалении или обновлении статуса какого-либо слова дата изменения коллекции остается прежней. По существу, изменение коллекции отображает дату последней работы с коллекцией в Тесте.  
                      </p>,
                      <p>
                        Далее идет статистика слов в коллекции. Затем, кнопка «Тест» («To Quiz», запускает <a href="#mainquiz">тестирование</a>), кнопка <a href="#choose_words_for_collection">добавления слов в коллекцию</a> (кнопка со знаком «+»), кнопка «Обновить все» («Refresh All»), кнопка «Удалить» («Delete»).
                      </p>,
                      <p>
                        Кнопка «Обновить все» («Refresh All») обнуляет <a href="#stats_words_in_collection">статистику</a> для всех слов в коллекции. Кнопка «Удалить» («Delete») удаляет текущую коллекцию.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"choose_words_for_collection"}
                    title = {'Добавление слов в коллекцию'}
                    img = {[`${Config.uri}/res/docs/006.gif`]}
                    body = {[
                      <p>
                        Окно добавления слов в коллекцию открывается из <a href="#menage_words_in_collection">окна коллекции</a>.  
                      </p>,
                      <p>
                        Сверху расположены кнопки «Отмена» («Cancel») и «Добавить» («Add»). Кнопка «Добавить» («Add») доступна только если хотя бы одно слово было выбрано. При ее нажатии открывается окно коллекции с выбранными словами. Если в коллекции до этого были еще слова, то выбранные слова добавляются к существующим согласно установленной <a href="#sort_words_in_collection">сортировки</a>.
                      </p>,
                      <p>
                        Максимальное число слов в коллекции 34.
                      </p>,
                      <p>
                        По существу окно добавление слов в коллекцию представляет собой интерфейс <a href="#dict">словаря</a> с возможностью выбора слов с помощью чекбоксов. Подробнее о поиске слов в словаре и добавление новых слов словарь смотрите раздел <a href="#dict">«Словарь»</a> данного руководства.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"sort_words_in_collection"}
                    title = {'Сортрировка слов в коллекции'}
                    img = {[`${Config.uri}/res/docs/007.gif`]}
                    body = {[
                      <p>
                        В коллекции доступна сортировка слов по трем параметрам: 
                      </p>,
                      <p>
                        <b>По алфавиту</b> (Noun).  
                      </p>,
                      <p>
                        <b>По числу угаданных попыток подряд</b> (Score). Удобно применять, если нужно отделить выученные слова от еще на выученных.
                      </p>,
                      <p>
                        <b>По числу допущенных  ошибок</b> (Mistakes). Удобно применять, когда нужно рассортировать слова в порядке их сложности для запоминания артиклей.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"change_words_in_collection"}
                    title = {'Управление словами в коллекции'}
                    img = {[`${Config.uri}/res/docs/008.gif`]}
                    body = {[
                      <p>
                        В коллекции слова расположены каждое в своем отдельном блоке, разделенных между собой горизонтальной линией. В блоке имеются следующие элементы: 
                      </p>,
                      <p>
                        Само слово (немецкое существительное с артиклем). Тап по слову открывает окно со соответствующей словарной статьей и возможностью <a href="#translate_words_in_collection">изменения перевода</a> этого слова для <a href="#mainquiz">теста</a>. Слева от слова есть небольшой круглый индикатор. Если слово не прошло тест, то индикатор серого цвета, если слово прошло тест, то зеленого.
                      </p>,
                      <p>
                        Далее идет транскрипция и перевод слова.
                      </p>,
                      <p>
                        Ниже размещена статистика слова.  Первое значение это дробь, показывающая сколько раз подряд артикль для слова угадан в тесте (score) относительно числа удачных попыток, нужных для прохождения теста.  Число удачных попыток подряд, нужных для прохождения теста, выставляется в окне  <a href="#pref">«Настройки»</a> («Preferences») и может быть установлен в диапазоне от 1 до 9 (Maximum score count). При установке нового диапазона вся статистика для каждого слова в каждой из коллекций пересчитывается автоматически.
                      </p>,
                      <p>
                        Затем следуют элементы управления: <b>Display</b> — установка доступна только для слов, не прошедших тест. Она определяет будет ли это слово участвовать в тесте или нет. 
                        <b>Refresh</b> — сброс всей статистики для каждого слова. При сбросе слово возвращается к своему состоянию, которое было при <a href="#choose_words_for_collection">добавлении его в коллекцию</a>. <b>Delete</b> — удаляет слово из коллекции.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"translate_words_in_collection"}
                    title = {'Изменение перевода слова'}
                    img = {[
                      `${Config.uri}/res/docs/010.gif`,
                      `${Config.uri}/res/docs/009.gif`
                    ]}
                    body = {[
                      <p>
                        Тап по слову открывает окно со соответствующей словарной статьей и возможностью изменения перевода этого слова для <a href="#mainquiz">теста</a>.  
                      </p>,
                      <p>
                        При изменении перевода слова, справа от его значения (измененного) появляется красная метка «modifided».
                      </p>,
                      <p>
                        Для возвращения к первоначальному значению слова достаточно просто очистить поле с пользовательским переводом.
                      </p>,
                      <p>
                        При <a href="#menage_words_in_collection">сбросе статистики</a> («Refresh») первоначальное значение перевода для слова так же восстанавливается.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"stats_words_in_collection"}
                    title = {'Статистика слов в коллекции'}
                    img = {[`${Config.uri}/res/docs/011.gif`]}
                    body = {[
                      <p>
                        Статистика слов в коллекции состоит из двух индикаторов — верхнего и нижнего. 
                      </p>,
                      <p>
                        На <b>верхнем индикаторе</b> показана общая статистика слов в коллекции: 
                      </p>,
                      <ul>
                        <li>— их общее количество («words count»),</li>
                        <li>— количество слов, прошедших <a href="#mainquiz">тест</a> («passed»),</li>
                        <li>— количество слов, не прошедших <a href="#mainquiz">тест</a> ( «words left»),</li>
                        <li>— графическое представление этой информации.</li>
                      </ul>,
                      <p>
                        На <b>нижнем индикаторе</b> показана статистика для слов, которые еще не прошли <a href="#mainquiz">тест</a>:
                      </p>,
                      <ul>
                        <li>— общее количество слов, не прошедших <a href="#mainquiz">тест</a> («words left»),</li>
                        <li>— количество слов, выбранных для <a href="#mainquiz">теста</a> (displayed),</li>
                        <li>— количество слов, исключенных из <a href="#mainquiz">теста</a> (disabled),</li>
                        <li>— графическое представление этой информации.</li>
                      </ul>
                    ]}
                  />
                </section>

                <section id="mainquiz" className="section scrollspy">
                  <div>
                    <h4>Тест</h4>
                      <p>
                        Интерфейс теста доступен по тапу на кнопке «To Quiz» в окне коллекции (см. раздел <a href="#menage_words_in_collection">«Элементы управления коллекцией»</a>).
                      </p>
                      <p>
                        Тест это то место, в котором происходит вся игра. Сейчас алгоритм реализации теста такой. Выбранные для теста слова предлагаются пользователю в произвольном порядке и сохраняют его в течении всего теста. 
                      </p>
                      <p>
                        Сначала <a href="#beginquiz">слово отображается без артикля</a>. Пользователь должен его угадать путем выбора одного из трех артиклей. Затем слово отображается с правильным артиклем. Результат анализируется и записывается в статистику слова вверху. 
                      </p>
                      <p>
                        В статистике показано количество слов, оставшихся в тесте («Words left»),  а также текущая статистика для слова. Подробней о статистике для слова смотрите в разделе <a href="#stats_words_in_collection">«Статистика слов в коллекции»</a>.
                      </p>
                      <p>
                        Затем можно перейти к следующему слову в тесте, нажав на кнопку («Next») или сделав свайп в любом направлении.
                      </p>
                      <p>
                        Тест можно прекратить в любой момент, просто выйдя из него. Результаты теста при этом сохранятся.
                      </p>
                      <h6 className="common-docs_content">Section contents</h6>
                      <ul>
                        <li><a href="#beginquiz">Представление слова для угадывания</a></li>
                        <li><a href="#quizwrong">Неверный результат</a></li>
                        <li><a href="#quizok">Верный результат</a></li>
                        <li><a href="#quizwordok">Слово выходит из квиза</a></li>
                        <li><a href="#quiztotalok">Тест выполнен</a></li>
                      </ul>
                  </div>

                  <DocsBlock
                    id={"beginquiz"}
                    title = {'Представление слова для угадывания'}
                    img = {[`${Config.uri}/res/docs/012.gif`]}
                    body = {[
                      <p>
                        Слово отображается без артикля. Пользователь должен его угадать путем выбора одного из трех артиклей.  
                      </p>,
                      <p>
                        Под словом отображаются его транскрипция и перевод. Это отображение можно редактировать в окне <a href="#pref">«Настройки»</a> («Preferences») выставлением или убираем галочек напротив значений «Show transcription before guess» и «Show translation before guess».      
                      </p>,
                      <p>
                        При отображении слова с артиклем (после попытки угадывания артикля), под словом так же отображаются его транскрипция и перевод, которые можно изменить в окне <a href="#pref">«Настройки»</a> («Preferences») выставлением или убираем галочек напротив значений «Show transcription after guess» и «Show translation after guess».
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quizwrong"}
                    title = {'Неверный результат'}
                    img = {[`${Config.uri}/res/docs/013.gif`]}
                    body = {[
                      <p>
                        При неверном результате теста указанный пользователем артикль на кнопке выбора артикля подсвечивается красным цветом. В статистике число правильно попыток обнуляется, и добавляется ошибка к общему числу ошибок для этого слова («mistakes»). 
                      </p>,
                      <p>
                        Подробней о статистике для слова смотрите в разделе <a href="#stats_words_in_collection">«Статистика слов в коллекции»</a>. 
                      </p>,
                      <p>
                        Отображение транскрипции и значения слова можно изменить (см. <a href="#beginquiz">«Представление слова для угадывания»</a>).
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quizok"}
                    title = {'Верный результат'}
                    img = {[`${Config.uri}/res/docs/014.gif`]}
                    body = {[
                      <p>
                        При верно угаданном артикле кнопка выбора артикля подсвечивается зеленым цветом. В статистику добавляется число правильно попыток угадывания. 
                      </p>,
                      <p>
                        Если число удачных попыток подряд соответствует числу при котором слово считается угаданным, то <a href="#quizwordok">слово выходит из теста</a>. Если при этом это последнее слово в тесте, то открывается сообщение об <a href="#quiztotalok">успешном окончании теста</a>.
                      </p>,
                      <p>
                        Подробней о статистике для слова смотрите в разделе <a href="#stats_words_in_collection">«Статистика слов в коллекции»</a>. 
                      </p>,
                      <p>
                        Отображение транскрипции и значения слова можно изменить (см. <a href="#beginquiz">«Представление слова для угадывания»</a>).
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quizwordok"}
                    title = {'Слово выходит из теста'}
                    img = {[`${Config.uri}/res/docs/015.gif`]}
                    body = {[
                      <p>
                        Если число удачных попыток подряд соответствует числу при котором слово считается угаданным, то открывается соответствующее собщение и <a href="#quizwordok">слово выходит из теста</a>.  
                      </p>,
                      <p>
                        Подробней о статистике для слова смотрите в разделе <a href="#stats_words_in_collection">«Статистика слов в коллекции»</a>. 
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quiztotalok"}
                    title = {'Успешное окончание теста'}
                    img = {[`${Config.uri}/res/docs/016.gif`]}
                    body = {[
                      <p>
                        Когда все слова в тесте угаданы, то открывается соответствующее собщение об успешном окончании теста.
                      </p>
                    ]}
                  />
                </section>

                <section id="dict" className="section scrollspy">
                  <div>
                    <h4>Словарь</h4>
                        <div className="row">
                          <div className="col s12 m4 l4">
                              <p>
                                  <img 
                                      className="responsive-img z-depth-3 materialboxed" 
                                      src={`${Config.uri}/res/docs/018.gif`}
                                      alt='Словарь'
                                  />
                              </p>
                              <p>
                                  <img 
                                      className="responsive-img z-depth-3 materialboxed" 
                                      src={`${Config.uri}/res/docs/020.gif`}
                                      alt='Словарь'
                                  />
                              </p>
                          </div>
                          <div className="col s12 m8 l8">
                              <p>
                                Интерфейс словаря доступен по тапу на «Dictionary» в основном меню (см. раздел <a href="#firstview">«Первый экран приложения»</a>).
                              </p>
                              <p>
                                В словаре представлены все существительные, доступные в приложении. На верху слева показано текущее число таких существительных («Total nouns»). 
                              </p>
                              <p>
                                В словаре реализован удобный поиск по первой букве слова и с помощью побуквенного ввода.
                              </p>
                              <p>
                                При тапе на самом слове открывается соответствующая словарная статья.
                              </p>
                              <p>
                                Каждый пользователь также может добавлять в общий словарь недостающие в нем существительные. Для этого надо нажать на круглую кнопку справа вверху окна со знаком «+». При этом откроется форма ввода слова для добавления в словарь. После попытки такого добавления запрос отправляется на сервер на котором хранится общий словарь. Тут возможны следующие варианты:
                              </p>
                              <ol>
                                <li>
                                  Добавляемое слово уже существует в словаре приложения. В этом случае приложение выведет сообщение «The word {'<слово>'} already exists in this dictionary» и в интерфейсе словаря произойдет автоматический переход к этому слову.
                                </li>
                                <br/>
                                <li>
                                  Добавляемое слово не существует в словаре приложения, но имеется на сервере в общем словаре. Если это слово имеет формы существительного, то оно добавляется в словарь приложения. В этом случае приложение выведет сообщение «The word {'<слово>'} has been added to this dictionary» и в интерфейсе словаря произойдет автоматический переход к этому слову.
                                </li>
                                <br/>
                                <li>
                                  Добавляемое слово не существует в словаре приложения и не содержится в общем словаре на сервере. В этом случае приложение выведет сообщение «The word {'<слово>'} is missing from the main dictionary on the server and cannot be added».
                                </li>
                                <br/>
                                <li>
                                  Добавляемое слово не существует в словаре приложения и является инфинитивом (отглагольным существительным). В ряде случаев такое слово не будет добавляться в словарь приложения и выводится сообщение «The word {'<слово>'} is an infinitive (verb) used as a noun. Words like this (Fahren, Trinken, etc.) always have «Das» as their article»
                                </li>
                              </ol>
                          </div>
                        </div>
                  </div>
                </section>

                <section id="pref" className="section scrollspy">
                  <div>
                    <h4>Настройки</h4>
                    <div className="row">
                      <div className="col s12 m4 l4">
                          <p>
                              <img 
                                  className="responsive-img z-depth-3 materialboxed" 
                                  src={`${Config.uri}/res/docs/019.gif`}
                                  alt='Настройки'
                              />
                          </p>
                      </div>
                      <div className="col s12 m8 l8">
                        <p>
                          Интерфейс настроек доступен по тапу на «Preferences» в основном меню (см. раздел <a href="#firstview">«Первый экран приложения»</a>).
                        </p>
                        <p>
                          В настройках выделяется два блока. Первый блок относится к установкой пользователя в общем («User profile»), второй блок относится к установкам <a href="#mainquiz">«Теста»</a> («Quiz»).
                        </p>
                        <p>
                          Блок настройки пользователя включает в себя два чекбокса: 
                        </p>
                        <ul>
                          <li>— «Remember me»</li>
                          <li>— «Receive updates by e-mail»</li>
                        </ul>
                        <p>
                          Мы рекомендуем оставить галочку напротив «Receive updates by e-mail», для того, что бы получать сообщения об обновлениях приложения, в том числе и связанных с его безопасностью. 
                        </p>
                        <p>
                          Также, вы сможете получать уведомления о технических работах на сервере и его доступности в то или иное время.
                        </p>
                        <p>
                          Ниже чекбоксов находится кнопка изменения пароля «Change Password». При ее нажатии открывается окно изменения пароля.
                        </p>
                        <p>
                          Блок <a href="#mainquiz">«Теста»</a> («Quiz») включает в себя четыре чекбокса, значения которых подробно описаны в разделе <a href="#beginquiz">«Представление слова для угадывания»</a>. Далее следует выпадающее меню в котором можно установить значение последовательных угадываний (без ошибок) артиклей для слова, после которого слово считается выученным. Подробнее смотрите раздел <a href="#change_words_in_collection">«Управление словами в коллекции»</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

              </article>
            </div>

            <div className="col hide-on-small-only m3 l2">
              <DocsNav/>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Docs;
