import './App.css';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Recipe from './components/pages/Recipe';
import Chef from './components/pages/Chef';
import Test from './components/Test';
import UserProfile from './components/UserProfile';
import Foods from './components/pages/Foods';
import Drinks from './components/pages/Drinks';
import Collection from './components/Collection';
import dashBoard from './components/pages/dashBoard';
import new_recpieList from './components/pages/new_recpieList';
import all_recpie from './components/pages/all_recpie';
import update from './components/pages/update';
import new_Recpie from './components/pages/new_Recpie';
import {login, useAuth, logout, authFetch} from "./auth"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/recipe' component={Recipe}/>
        <Route path='/chef' component={Chef}/>
        <Route path='/test' component={Test}/>
        <Route path='/UserProfile' component={UserProfile}/>
        <Route path='/foods' component={Foods}/>
        <Route path='/drinks' component={Drinks}/>
        <Route path='/collection' component={Collection}/>
        <Route path='/dashboard' component={dashBoard}/>
        <Route path='/new_recpieList' component={new_recpieList}/>
        <Route path='/update' component={update}/>
        <Route path='/new_recpie' component={new_Recpie}/>
        <Route path='/all_recpie' component={all_recpie}/>

      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
