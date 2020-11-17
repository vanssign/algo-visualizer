import React from 'react';
import TimeComparision from './Components/TimeComparisionComponent';
import Header from './Components/HeaderComponent';
import SortingVisualizer from './Components/SortingVisualiser/SortingVisualiserComponent';
import Pathfinding from './Components/PathfindingVisualiser/Pathfinding'
import {Route,Switch,HashRouter,Redirect} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <HashRouter>
    <div className="App">
    <Header/>
    <Switch>
    <Route path="/home" component={()=> <TimeComparision/>}/>
    <Route exact path="/sorting-visualizer" component={()=> <SortingVisualizer/>}/>
    <Route exact path="/pathfinding-visualizer" component={()=> <Pathfinding/>}/>
    <Redirect to="/home"/>
    </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
