import Navbar from './components/Navbar';
import './App.css';
import InputForm from './components/InputForm';
import ShowImage from './components/ShowImage';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  console.log("isLoading", isLoading);
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <InputForm isLoading={isLoading} setIsLoading={setIsLoading} setImageUrl={setImageUrl} />
          <ShowImage imageUrl={imageUrl} />
        </main>
      </div>

      <div className={isLoading ? "spinner show" : "spinner"}></div>
    </>
  );
}

export default App;
