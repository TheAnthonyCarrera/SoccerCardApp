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
      <FancyCard
      name='Cristiano Ronaldo'
      id='2'
      nationality='Portugal'
      club='Juventus'
      description='Another great player'
      imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
    />
      </div>
  );
}

