import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quotes</h1>
        <button className="myButton">Click for a quote!</button>
        <div className="App-wrapper">
          <p className="App-quote">"The only phrase I've ever disliked is: <em>'Why, we've always done it that way.'</em>"</p>
        </div>
        <a
          className="App-link"
          href="https://github.com/pachicodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          @pachicodes
        </a>
      </header>
    </div>
  );
}

export default App;
