import './App.css';
import FancySparkles from '../texture/FancySparkles';

export default function App() {
  return (
    <div className="App">
      <Appbar/>
      {/* <SparklesIntro text='Card Collection'/> */}
      <FancySparkles text='Card Collection' fontSize='150'/>
      </div>
  );
}

