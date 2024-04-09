import './App.css';
import Appbar from './components/Appbar';
import Card from './components/Card';
import FancyCard from './components/FancyCard';
export default function App() {
  return (
    <div className="App">
      <Appbar/>
      <Card/>
      <FancyCard
      name='Lionel Messi'
      id='1'
      nationality='Canada'
      club='FC Barcelona'
      description='A great player'
      imageURL='https://www.investopedia.com/thmb/ckPwC5ARwco1nOSCKVGE57se8MI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg'
      />
    </div>
  );
}

