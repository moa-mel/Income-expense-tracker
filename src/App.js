import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Grid} from '@material-ui/core';
import Footer from './components/pages/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import { Login, Register } from "./components/pages/login/index";
import Details from './components/pages/Details/Details';
import Main from './components/pages/Main/Main';
import Services from './components/pages/Services/Services';
import useStyles from './styles';
 
  function App(){
    const classes= useStyles(); 
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route exact path='/register' ><Register/></Route>
        <Route exact path='/login' ><Login/></Route> 
        <Route exact path='/services' ><Services/></Route> 
      <div>
        <Grid className={classes.grid} container spacing={0} alignitems="center" justify="center" style={{height: '100vh'}}>
           <Grid item xs={12} sm={4} className={classes.mobile}>
             < Route exact path='/track'> <Details title="Income" /> </Route>
           </Grid>
           <Grid  item xs={12} sm={3} className={classes.main}>
             < Route exact path='/track'> <Main /> </Route>
           </Grid>
           <Grid item xs={12} sm={4} className={classes.desktop}>
           < Route exact path='/track'> <Details title="Income" /> </Route>
        </Grid>
           <Grid item xs={12} sm={4}  className={classes.last}>
             < Route exact path='/track' ><Details title="Expense"/> </Route>
           </Grid>
        </Grid>
      </div>
      </Switch>
     {/* <Footer /> */}
    </Router> 
  );
   }

export default App;