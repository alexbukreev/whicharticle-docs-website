import React, { Component } from 'react'

class DocsNav extends Component {
    localMenu() {
        if (this.props.local === 'ru') {
            return (
                <ul className="section table-of-contents">
                    <li><a href="#getstarted">Начало работы</a></li>
                    <li><a href="#maincollection">Коллекции</a></li>
                    <li><a href="#mainquiz">Тест</a></li>
                    <li><a href="#dict">Словарь</a></li>
                    <li><a href="#pref">Настройки</a></li>
                </ul>
            )
        }

        return(
            <ul className="section table-of-contents">
                <li><a href="#getstarted">Getting started</a></li>
                <li><a href="#maincollection">Collections</a></li>
                <li><a href="#mainquiz">Тест</a></li>
                <li><a href="#dict">Словарь</a></li>
                <li><a href="#pref">Настройки</a></li>
            </ul>
        )
    }

    mainMenu() {
        if (this.props.position === 'mobile') {
            return this.localMenu()
        } else {
            return (
                <div 
                    className='pinned' style={{top: '77px'}}
                    style={{paddingLeft: '20px'}}
                >
                    {
                        this.localMenu() 
                    }   
                </div> 
            )
        }
    }

    render() {
        return this.mainMenu()
    }
}

export default DocsNav