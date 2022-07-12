
import { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import Header from './components/Headercomponent';
import Dashboard from './components/Dashboard';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Header />
            <Dashboard />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
