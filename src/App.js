
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import AuthProvider from './contex/AuthProvider';
import Explore from './component/Explore/Explore';
import Dashbord from './component/Dashbord/Dashbord';
import Regester from './component/Login/Regester/Regester';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import WatchProduct from './component/WatchProduct/WatchProduct';
import Details from './component/Details/Details';
import Banner from './component/Banner/Banner';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <AuthProvider>
       <Router>
         <Header/>
        <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/explore">
         <Explore></Explore>
          </Route>
        <Route path="/dashbord">
            <Dashbord></Dashbord>
        </Route>

          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/regester">
        <Regester></Regester>
          </Route>
          <PrivateRoute path='/order/:id'>
          <Details></Details>
          </PrivateRoute>
    
         
        </Switch>
     
    </Router>
    </AuthProvider>
     
    </div>
  );
}

export default App;
