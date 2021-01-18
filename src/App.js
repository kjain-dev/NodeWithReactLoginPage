import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import LoginPage from './Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
