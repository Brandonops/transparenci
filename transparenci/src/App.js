import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import { setUserData } from './redux/actions/userActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/users/current',{
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          dispatch(setUserData(data));
          console.log("logged")
        }
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Landing />
        </Route>
        <Route exact path="/register" >
          <Register />
        </Route>
        <Route exact path="/login" >
          <Login />
        </Route>
        <Route exact path="/home" >
          <Navbar />
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
