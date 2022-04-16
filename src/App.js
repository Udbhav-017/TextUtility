import { useState } from 'react/cjs/react.development';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// let name = "Sunny"; 

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#011128';
      document.title = 'TextUtils-Dark';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-Light';
    }
  }

  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>Home</li>  
    //       <li>About</li>
    //       <li>Contact</li>
    //     </ul>
    //   </nav>
    //   <h1>I am {name}</h1> 
    // </>

    <>
      <Router>
        {/* <Navbar></Navbar>  One way */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
        <Switch>
            <Route exact path="/">
              <Textform heading="Enter the text to analyse" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
