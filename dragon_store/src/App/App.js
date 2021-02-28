import React from 'react';
import './App.css';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import PageHeader from '../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

// Customization style from https://material-ui.com/customization/default-theme/

const theme = createMuiTheme({
  palette:{
    primary:{
      main: "#333996",
      light: '#3C44B126'
    },
    secondary:{
      main: "#F83245",
      light: '#F8324526'
    },
    background:{
      default:"#F4F5FD"
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader 
        title = "Page Header"
        subTitle = "Page Description"
        icon = {<PeopleOutlineIcon />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
