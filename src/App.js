import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('APP RUNNING')

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => {
        return !prevShowParagraph
      })
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}> Allow toggle</Button>
      <Button onClick={toggleParagraphHandler}> Show Paragraph</Button>
    </div>
  );
}

export default App;
