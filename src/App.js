import Memes from './components/memeApp/memes';
import './style.css'
import Header from './components/Header/header';

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Memes />
      </main>

    </div>
  );
}

export default App;
