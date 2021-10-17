import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import './App.css';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Faq from './routes/faq/Faq';
import Contact from './routes/contact/Contact';
import Browse from './routes/browse/Browse';
import Hr from './routes/hr/Hr';
import JobList from './routes/hr/components/JobList';
import PersonalInfo from './routes/hr/components/PersonalInfo';
import CandidateAppliedJobs from './routes/candidate/CandidateAppliedJobs';
import CandidatePersonalInfo from './routes/candidate/CandidatePersonalInfo';

function App() {
  return (
    <Router>
      <Grid container>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/hr-applications' component={Hr} />
        <Route exact path='/hr-job-list' component={JobList} />
        <Route exact path='/hr-personal-info' component={PersonalInfo} />
        <Route
          exact
          path='/candidate-applied-job'
          component={CandidateAppliedJobs}
        />
        <Route
          exact
          path='/candidate-personalInfo'
          component={CandidatePersonalInfo}
        />
      </Grid>
    </Router>
  );
}

export default App;
