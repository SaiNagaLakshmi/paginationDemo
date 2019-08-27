import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './component/home';
import Postlist from './component/postlist';
import Practice from './component/practice';
import All from './component/all';
import Sidemenu from './component/sidemenu';
import Chartbar from './component/chartbar';
class App extends Component {
  render(){
    return (
      <div className="App">
       <Switch>
       <Route exact path='/home' component={Home} />
       <Route path='/postlist' component={Postlist} />
       <Route path='/practice' component={Practice} />
       <Route path='/all' component={All} />
       <Route path='/sidemenu' component={Sidemenu} />
       <Route path='/chartbar' component={Chartbar}/>
       </Switch>
     
      </div>
    );

  }
  
}

export default App;
