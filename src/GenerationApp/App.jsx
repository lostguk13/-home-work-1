
import { useState } from 'react'
import './App.css';
import { nounsArr, adjectivesArr } from './data.js'

import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrases'



const App = () => {
  const [arrPhrase, setArrPhase] = useState([])

  const renderContent = arrPhrase.length > 0 ? <Phrase phrases={arrPhrase} /> : <EmptyBlock />

  const randomWord = (wordsArr) => {
    return wordsArr[Math.floor(Math.random() * wordsArr.length)]
  }
  const generatePrases = () => {
    setArrPhase(arrPhrase => [...arrPhrase, `${randomWord(adjectivesArr)} ${randomWord(adjectivesArr)} ${randomWord(nounsArr)}`])
  }

  return (
    <div className="wrapper">
      {renderContent}
      <button className="btn btn_generate" onClick={generatePrases}>Сгенерировать</button>
      <button className="btn btn_clear" onClick={() => setArrPhase([])}>Очистить</button>
    </div >
  )
}

export default App