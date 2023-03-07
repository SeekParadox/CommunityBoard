import './App.css';
import Card from './components/Card';
import firstImg from "./assets/images/adam-gonzales-h_v53lHosJY-unsplash.jpg"
import secondImg from "./assets/images/florencia-viadana-mixpzw_FlcA-unsplash.jpg"
import thirdImg from "./assets/images/joana-godinho-Gwv-t9VQiPM-unsplash.jpg"
import fourthImg from "./assets/images/rejoice-denhere-5HFUWHd5cTQ-unsplash.jpg"
const App = () => {

  return (
    <div className="App">
      <h1>Food Truck Favorites</h1>
      <div className="Displays">
      <Card img={firstImg} title="Pizza Italia" description="Italian"/>
      <Card img={secondImg} title="Ice Cream" description="American"/>
      <Card img={thirdImg} title="Fish & chips" description="European"/>
      <Card img={fourthImg} title="Vegan Donuts" description="American"/>
      </div>
    </div>
  )
}

export default App;