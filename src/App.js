import logo from './logo.svg';
// import './App.css';
import SignIn from './components/signin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/signup';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
    </Router>
  );
}

export default App;
