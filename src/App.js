import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import About from './components/About/About';
import California from '../src/components/Places/WestCoast/California/California'
import LasVegas from '../src/components/Places/WestCoast/LasVegas/LasVegas'
import CañonColorado from '../src/components/Places/WestCoast/CañonColorado/CañonColorado'
import LosAngeles from '../src/components/Places/WestCoast/California/LosAngeles/LosAngeles'
import SanFrancisco from '../src/components/Places/WestCoast/California/SanFrancisco/SanFrancisco'
import PlayasCalifornia from '../src/components/Places/WestCoast/California/PlayasCalifornia/PlayasCalifornia'
import ParquesTematicos from '../src/components/Places/WestCoast/California/ParquesTematicos/ParquesTematicos'
import ParquesNacionales from '../src/components/Places/WestCoast/California/ParquesNacionales/ParquesNacionales'
import WestCoast from '../src/components/Places/WestCoast/WestCoast'
import Chicago from '../src/components/Places/EastCoast/Chicago/Chicago'
import Miami from '../src/components/Places/EastCoast/Miami/Miami'
import WashingtonDC from '../src/components/Places/EastCoast/WashingtonDC/WashingtonDC'
import NewYork from '../src/components/Places/EastCoast/NewYork/NewYork'
import Manhattan from '../src/components/Places/EastCoast/NewYork/Manhattan/Manhattan'
import FinaltialDistric from '../src/components/Places/EastCoast/NewYork/FinantialDistric/FinantialDistric'
import CentralPark from '../src/components/Places/EastCoast/NewYork/CentralPark/CentralPark'
import Neighbor from '../src/components/Places/EastCoast/NewYork/Neighbor/Neighbor'
import Brooklyn from '../src/components/Places/EastCoast/NewYork/Brooklyn/Brooklyn'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/TripApp" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/coast" component={WestCoast}></Route>
          <Route path="/california" component={California}></Route>
          <Route path="/vegas" component={LasVegas}></Route>
          <Route path="/colorado" component={CañonColorado}></Route>
          <Route path="/la" component={LosAngeles}></Route>
          <Route path="/sfrancisco" component={SanFrancisco}></Route>
          <Route path="/beachcalifornia" component={PlayasCalifornia}></Route>
          <Route path="/parks" component={ParquesTematicos}></Route>
          <Route path="/nationalparks" component={ParquesNacionales}></Route>
          <Route path="/chicago" component={Chicago}></Route>
          <Route path="/miami" component={Miami}></Route>
          <Route path="/dc" component={WashingtonDC}></Route>
          <Route path="/nyc" component={NewYork}></Route>
          <Route path="/manhattan" component={Manhattan}></Route>
          <Route path="/finantial" component={FinaltialDistric}></Route>
          <Route path="/centralpark" component={CentralPark}></Route>
          <Route path="/neighbor" component={Neighbor}></Route>
          <Route path="/brooklyn" component={Brooklyn}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
