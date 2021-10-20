
import { useState } from 'react'
import './App.css';
import { nounsArr, adjectivesArr } from './data.js'

import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrase'



const App = () => {
  const [arrPhrase, setArrPhase] = useState(['звериный зеленый олень'])

  const renderContent = arrPhrase.length > 0 ? <Phrase phrases={arrPhrase} /> : <EmptyBlock />

  const generatePrases = () => {
    const randomNounsArr = nounsArr[Math.floor(Math.random() * nounsArr.length)]
    const randomAdjectivesArr = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]
    setArrPhase(arrPhrase => [...arrPhrase, `${randomAdjectivesArr} ${randomNounsArr}`])
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