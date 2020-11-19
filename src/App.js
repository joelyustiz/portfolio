import React, { useEffect } from 'react';
import './App.css';
import SvgSolutionMindSet from "./components/svgSolutionMindSet"
import SvgJoelYustiz from "./components/svgJoelYustiz"

function App(props) {
  useEffect(() => {
    console.log('antes');
    return () => {
      console.log('despues');
    };
  }, []);

  return <div className="App"><SvgJoelYustiz /></div>;
}

export default App;
