import Navbar from './components/Navbar';
import './App.css';
import InputForm from './components/InputForm';
import ShowImage from './components/ShowImage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <InputForm />
        <ShowImage />
      </main>
    </div>
  );
}

export default App;
