import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import './App.css';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Faq from './routes/faq/Faq';
import Contact from './routes/contact/Contact';
import Browse from './routes/browse/Browse';

function App() {
  return (
    <Router>
      <Grid container>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/browse' component={Browse} />
      </Grid>
    </Router>
  );
}

export default App;
