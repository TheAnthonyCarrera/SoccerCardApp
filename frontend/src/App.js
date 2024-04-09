import './App.css';
import Appbar from './components/Appbar';
import Card from './components/Card';
import SparklesIntro from './components/SparklesIntro';
import FancySparkles from './components/FancySparkles';

export default function App() {
  return (
    <div className="App">
      <Appbar/>
      {/* <SparklesIntro text='Card Collection'/> */}
      <FancySparkles text='Card Collection' fontSize='150'/>
      <Card/>
      </div>
  );
}

