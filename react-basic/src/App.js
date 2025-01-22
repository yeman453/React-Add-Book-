import logo from './logo.svg';
import './App.css';
import SwitchTheme from './components/SwitchTheme';
import BookList from './redux/BooksList';
import SwitchThemeHw from './componentsHw/SwitchThemeHw';
import BooksListHw from './reduxHw/BooksListHw';

function App() {
  return (
    <div className="App">
      <SwitchThemeHw />
      <BooksListHw/>
      {/* <SwitchTheme />
      <BookList /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
