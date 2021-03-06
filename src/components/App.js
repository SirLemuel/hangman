import React, { Component } from 'react';
import LetterBoxListContainer from './LetterBoxListContainer'
import SelectedWordContainer from './SelectedWordContainer'
import CounterSectionContainer from './CounterSectionContainer'
import GameOver from './GameOver'
import { wordList } from '../constants'
import { getWordFromList } from '../helpers/word'

class App extends Component {
  componentDidMount() {
    const { setCurrentWord } = this.props
    const currentWord = getWordFromList().toLowerCase()

    setCurrentWord(currentWord)
  }

  render() {
    const { isGameOver } = this.props

    return (
        <div className="App container">
          <div className="col">
            <SelectedWordContainer />
            <LetterBoxListContainer />
            {isGameOver && <GameOver />}
          </div>
          <div className="col">
            <CounterSectionContainer />
          </div>
        </div>

      )
    }
  }

export default App
