import * as React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Header = (props) => {

  const handleGeneralNavClick = (e) => {
    e.preventDefault();
    props.history.push('/general');
  };
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            GitHub Finder
          </Typography>
          <Button color="inherit" onClick={handleGeneralNavClick}>General Search</Button>
          <Button color="inherit" href='/useful'>Useful Searches</Button>
        </Toolbar>
      </AppBar>
    </div>
)};

export default Header;