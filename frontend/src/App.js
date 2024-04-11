import './App.css';
import Appbar from './components/Appbar';
import Card from './Pages/Card';
import SparklesIntro from './components/Texture/SparklesIntro';
import FancySparkles from './components/Texture/FancySparkles';

export default function App() {
  return (
    <div className="App">
      <Appbar/>
      <SparklesIntro text='Card Collection' size={75}/>
      {/* <FancySparkles text='Card Collection' fontSize='150'/> */}
      <Card/>
      </div>
  );
}

 