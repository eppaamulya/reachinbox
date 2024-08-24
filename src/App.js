import { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Onebox from './components/Onebox';
import { Routes, Route,} from 'react-router-dom';
import AppContext from './context/AppContext';

class App extends Component {
  state = {
    isDarkTheme: false,
    
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }
  render() {
    const {isDarkTheme} = this.state
    return (
      <div>
        <AppContext.Provider value={{isDarkTheme, toggleTheme: this.toggleTheme}}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/onebox" element={<Onebox />} />
        </Routes>
        </AppContext.Provider>
      </div>
    );
  }
  
}

export default App;
