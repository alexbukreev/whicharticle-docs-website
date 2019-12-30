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
                        If your account password is entered incorrectly, a «Wrong password» message will appear under the input field. Below it you will see a link — upon tapping it, a new valid password will be sent to you by e-mail. Use that password to sign into your account. The password can be changed in the <a href="#pref">«Preferences»</a> tab.
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
                    <h4>Collections</h4>
                    <p>
                      The «Collections» interface is the starting interface of the app. It contains all the collections created by the user.
                    </p>
                    <h6 className="common-docs_content">Section contents</h6>
                    <ul>
                      <li><a href="#createnewcollection">Creating a new collection</a></li>
                      <li><a href="#attributeofcollection">Collection preferences</a></li>
                      <li><a href="#menage_words_in_collection">Elements of collection management</a></li>
                      <li><a href="#choose_words_for_collection">Adding words to a collection</a></li>
                      <li><a href="#sort_words_in_collection">Word sorting in a collection</a></li>
                      <li><a href="#change_words_in_collection">Managing words in a collection</a></li>
                      <li><a href="#translate_words_in_collection">Changing a word’s translation</a></li>
                      <li><a href="#stats_words_in_collection">Word statistics in a collection</a></li>
                    </ul>
                  </div>

                  <DocsBlock
                    id={"createnewcollection"}
                    title = {'Creating a new collection'}
                    img = {[`${Config.uri}/res/docs/003.gif`]}
                    body = {[
                      <p>
                        To create a new collection click the round button with a «+» on it. After that, a <a href="#attributeofcollection">collection preferences window</a> will open.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"attributeofcollection"}
                    title = {'Collection preferences'}
                    img = {[`${Config.uri}/res/docs/004.gif`]}
                    body = {[
                      <p>
                        The name of the collection is set by the first line, while its description is set by the second one. Below you can select a colour label for the collection, which it will be marked with on the list among other collections.
                      </p>,
                      <p>
                        The collection name is unique. Creating two collections with the same name is not possible. 
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"menage_words_in_collection"}
                    title = {'Elements of collection management'}
                    img = {[`${Config.uri}/res/docs/005.gif`]}
                    body = {[
                      <p>
                        New collection window will open after a collection has been created. There are no words here yet. The name and the description of the collection are displayed at the top. A colour label is displayed on the top left (if it has been set in the <a href="#attributeofcollection">collection preferences</a>). 
                      </p>,
                      <p>
                        On the top right is the collection edit button, pressing which will open the <a href="#attributeofcollection">same window</a> as during the collection creation.   
                      </p>,
                      <p>
                        Below are the dates of creation and the last modification of the collection. It is worth noting, that the date of modification only changes if the status of at least one of the words in the collection has changed after the <a href="#mainquiz">«quiz»</a>. This date stays the same upon addition, deletion, or status update of a word. Essentially, status «Modified» reflects the date of the most recent Quiz session with the collection.
                      </p>,
                      <p>
                        Below the dates are the collection statistics, followed by the «To Quiz» button (to start the <a href="#mainquiz">quiz</a>), the «+» button (<a href="#choose_words_for_collection">to add words to the collection</a>), the «Refresh All» button, the «Delete» button.
                      </p>,
                      <p>
                        The «Refresh All» button resets the <a href="#stats_words_in_collection">statistics</a> for all the words in the collection. The «Delete» button deletes the current collection.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"choose_words_for_collection"}
                    title = {'Adding words to a collection'}
                    img = {[`${Config.uri}/res/docs/006.gif`]}
                    body = {[
                      <p>
                        The window for adding words to the collection can be opened from the <a href="#menage_words_in_collection">collection window</a>.
                      </p>,
                      <p>
                        At the top are the buttons «Cancel» and «Add». The «Add» button is only accessible if at least one word has been selected. When pressed, the button opens the collection window with the selected words included on the list of words. If the collection contained any other words before that, the selected words are added to the existing ones and displayed according to the set <a href="#sort_words_in_collection">sorting</a>.
                      </p>,
                      <p>
                        The maximum number of words in a collection is 34.
                      </p>,
                      <p>
                        The window for adding words to the collection is essentially a <a href="#dict">dictionary</a> interface with the possibility to select words using checkboxes. For more information on word search in the dictionary refer to the <a href="#dict">«Dictionary»</a> section of this guide.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"sort_words_in_collection"}
                    title = {'Word sorting in a collection'}
                    img = {[`${Config.uri}/res/docs/007.gif`]}
                    body = {[
                      <p>
                        In a collection, word sorting by three parameters is available: 
                      </p>,
                      <p>
                        <strong>Alphabetically</strong> (Noun).  
                      </p>,
                      <p>
                        <strong>By the number of correct guesses in a row</strong> (Score). Especially convenient if you need to separate the words you already know well from the words you don’t.
                      </p>,
                      <p>
                        <strong>By the number of mistakes</strong> (Mistakes). Especially convenient if you are looking to sort the words by the difficulty of memorising their articles.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"change_words_in_collection"}
                    title = {'Managing words in a collection'}
                    img = {[`${Config.uri}/res/docs/008.gif`]}
                    body = {[
                      <p>
                        The words in a collection are located in their own separate blocks, divided by a horizontal line. Each block contains the following elements: 
                      </p>,
                      <p>
                        The word itself (a German noun with its article). Tapping the word opens a window with the corresponding dictionary entry and the possibility <a href="#translate_words_in_collection">to alter the translation</a> of the word for the <a href="#mainquiz">quiz</a>. To the left of the word there is a small round indicator. If the word did not pass the quiz, the indicator is grey; if the word did pass the quiz, the indicator is green.
                      </p>,
                      <p>
                        The word is followed by its translation and transcription.
                      </p>,
                      <p>
                        Below that are the word statistics. The first value is a fraction, showing the amount of correct article guesses on the quiz (score) relative to the number of successful attempts required to pass the quiz. The number of successful consecutive attempts required to pass the quiz can be set in the <a href="#pref">«Preferences»</a> window and can be set to a value between 1 and 9 (Maximum score count). Upon setting a new value, all the statistics for each word is automatically recalculated.
                      </p>,
                      <p>
                        <strong>Following are the elements of management:</strong>
                      </p>,
                      <p>
                        <strong>Display</strong> — a setting only available for words that did not pass the quiz. It determines whether the word will be a part of the quiz or not.
                      </p>,
                      <p>
                        <strong>Refresh</strong> — resets all the statistics for the word. Upon refreshing, the word returns to its original state when <a href="#choose_words_for_collection">it was first added to the collection</a>.
                      </p>,
                      <p>
                        <strong>Delete</strong> — removes the word from the collection..
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"translate_words_in_collection"}
                    title = {'Changing a word’s translation'}
                    img = {[
                      `${Config.uri}/res/docs/010.gif`,
                      `${Config.uri}/res/docs/009.gif`
                    ]}
                    body = {[
                      <p>
                        Tapping a word opens a window with the corresponding dictionary entry and the possibility to alter the translation of the word for the <a href="#mainquiz">quiz</a>.
                      </p>,
                      <p>
                        Upon changing a word’s translation, a red “modified” label will appear to the right of it.
                      </p>,
                      <p>
                        To return to the original translation of the word, simply clear the field with the custom translation.
                      </p>,
                      <p>
                        Upon <a href="#menage_words_in_collection">resetting the word statistics</a> («Refresh»), the original translation for that particular word is also restored.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"stats_words_in_collection"}
                    title = {'Word statistics in a collection'}
                    img = {[`${Config.uri}/res/docs/011.gif`]}
                    body = {[
                      <p>
                        The word statistics in a collection consist of two indicators — the top one and the lower one. 
                      </p>,
                      <p>
                        <strong>The top indicator</strong> shows the general word statistics in the collection: 
                      </p>,
                      <ul>
                        <li>— the total amount of words («words count»),</li>
                        <li>— the number of words that have passed the quiz («passed»),</li>
                        <li>— the number of words that have not passed the quiz ( «words left»),</li>
                        <li>— a graphic representation of this information.</li>
                      </ul>,
                      <p>
                        <strong>The lower indicator</strong> shows the statistics for the words that have not passed <a href="#mainquiz">the quiz</a> yet:
                      </p>,
                      <ul>
                        <li>— the total amount of words that have not passed the quiz («words left»),</li>
                        <li>— the number of words selected for the quiz (displayed),</li>
                        <li>— the number of words excluded from the quiz (disabled),</li>
                        <li>— a graphic representation of this information.</li>
                      </ul>
                    ]}
                  />
                </section>

                <section id="mainquiz" className="section scrollspy">
                  <div>
                    <h4>Quiz</h4>
                      <p>
                        The quiz interface is accessible by tapping the «To Quiz» button in the collection window (see <a href="#menage_words_in_collection">«Elements of collection management»</a>).
                      </p>
                      <p>
                        The quiz is where the entire game takes place. Right now the algorithm within the quiz is as follows: the words that have been selected for the quiz are offered to the user in in a random order, which is maintained throughout the entire quiz session.
                      </p>
                      <p>
                        At first <a href="#beginquiz">the word is displayed without the article</a>. The user has to guess it by picking one of the three given articles. After that, the word will be displayed with the correct article. The results are analysed and recorded in the word statistics above.
                      </p>
                      <p>
                        The statistics display the amount of words left in the quiz («Words left»), as well as the statistics for the current word. For more details on word statistics, see the section <a href="#stats_words_in_collection">«Word statistics in a collection»</a>.
                      </p>
                      <p>
                        Afterwards you can proceed to the next word in the quiz by pressing the «Next» button or swiping in any direction.
                      </p>
                      <p>
                        You can stop the quiz at any time by simply exiting it. The quiz results will be saved automatically.
                      </p>
                      <h6 className="common-docs_content">Section contents</h6>
                      <ul>
                        <li><a href="#beginquiz">Displaying a word for guessing</a></li>
                        <li><a href="#quizwrong">An incorrect guess</a></li>
                        <li><a href="#quizok">A correct guess</a></li>
                        <li><a href="#quizwordok">A word leaves the quiz</a></li>
                        <li><a href="#quiztotalok">Successful completion of the quiz</a></li>
                      </ul>
                  </div>

                  <DocsBlock
                    id={"beginquiz"}
                    title = {'Displaying a word for guessing'}
                    img = {[`${Config.uri}/res/docs/012.gif`]}
                    body = {[
                      <p>
                        The word is displayed without the article. The user has to guess it by picking one of the three given articles.  
                      </p>,
                      <p>
                        Below the word, its transcription and translation are displayed. You can edit that display in the <a href="#pref">«Preferences»</a> window by ticking off the «Show transcription before guess» and «Show translation before guess» checkboxes.      
                      </p>,
                      <p>
                        When the word is displayed with the article (after an attempted article guess), its transcription and translation are also displayed below it. This can also be changed in the <a href="#pref">«Preferences»</a> window by ticking off the «Show transcription after guess» and «Show translation after guess» checkboxes.
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quizwrong"}
                    title = {'An incorrect guess'}
                    img = {[`${Config.uri}/res/docs/013.gif`]}
                    body = {[
                      <p>
                        If a guess in the quiz has been incorrect, the user-picked article button will be highlighted in red. In the statistics, the number of correct guesses will be reset to zero and a mistake point will be added to the total number of mistakes for the word.
                      </p>,
                      <p>
                        For more details on word statistics, see the section <a href="#stats_words_in_collection">«Word statistics in a collection»</a>. 
                      </p>,
                      <p>
                        Word transcription and translation display can be edited (see <a href="#beginquiz">«Displaying a word for guessing»</a>).
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quizok"}
                    title = {'A correct guess'}
                    img = {[`${Config.uri}/res/docs/014.gif`]}
                    body = {[
                      <p>
                        If an article in the quiz has been guessed correctly, the user-picked article button will be highlighted in green. In the statistics, a point will be added to the number of correct guesses. 
                      </p>,
                      <p>
                        If the number of correct guesses in a row is equal to the number at which the word is considered learned, <a href="#quizwordok">the word leaves the quiz</a>. If the word is also the last one in the quiz, a message indicating <a href="#quiztotalok">successful completion of the quiz</a> will pop up.
                      </p>,
                      <p>
                        For more details on word statistics, see the section «Word statistics in a collection». 
                      </p>,
                      <p>
                        Word transcription and translation display can be edited (see <a href="#beginquiz">«Displaying a word for guessing»</a>).
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quizwordok"}
                    title = {'A word leaves the quiz'}
                    img = {[`${Config.uri}/res/docs/015.gif`]}
                    body = {[
                      <p>
                        If the number of consecutive correct guesses is equal to the number at which the word is considered learned, a “Congratulations!” message will pop up and <a href="#quizwordok">the word will leave the quiz</a>.  
                      </p>,
                      <p>
                        For more details on word statistics, see the section <a href="#stats_words_in_collection">«Word statistics in a collection»</a>. 
                      </p>
                    ]}
                  />

                  <DocsBlock
                    id={"quiztotalok"}
                    title = {'Successful completion of the quiz'}
                    img = {[`${Config.uri}/res/docs/016.gif`]}
                    body = {[
                      <p>
                        When all the words in the quiz have been guessed, a message indicating successful completion of the quiz will pop up.
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
                    <h4>Preferences</h4>
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
                          The preferences interface is accessible by tapping the “Preferences” button in the main menu (see <a href="#firstview">«Application main screen»</a>).
                        </p>
                        <p>
                          There are two blocks within the preferences. The first block relates to user profile management («User profile»), while the second block relates to quiz settings (<a href="#mainquiz">«Quiz»</a>).
                        </p>
                        <p>
                          The «User profile» block includes two checkboxes: 
                        </p>
                        <ul>
                          <li>— «Remember me»</li>
                          <li>— «Receive updates by e-mail»</li>
                        </ul>
                        <p>
                          We recommend you tick off the «Receive updates by e-mail» box in order to receive messages containing information about application updates, including security related ones.
                        </p>
                        <p>
                          You will also be able to receive notifications about any maintenance works on the server and its availability at the given moment.
                        </p>
                        <p>
                          Below the checkboxes there is a «Change Password» button. When pressed, the button opens the password change window.
                        </p>
                        <p>
                          The <a href="#mainquiz">«Quiz»</a> block includes four checkboxes, which are discussed in detail in the <a href="#beginquiz">«Displaying a word for guessing»</a> section. Below them there is a drop-down menu, in which you can set the number of consecutive article guesses (without mistakes) for the word, after which the word is considered well-learned. For more details refer to the <a href="#change_words_in_collection">«Managing words in a collection»</a> section.
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
