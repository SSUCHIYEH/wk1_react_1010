import './App.css';
import Home from './home';
import Header from './pages/header';
import News from './pages/news';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/:newsId" component={News} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
