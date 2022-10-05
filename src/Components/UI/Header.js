import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import  {useScrollTrigger}  from '@mui/material';
import styled from '@emotion/styled';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const PREFIX = 'Header';
  const classes = {
    root: `${PREFIX}-root`
  }

  const Root = styled('div')(({theme}) => ({
    [`&.${classes.root}`]: {
        ...theme.mixins.toolbar,
        marginBottom:"2em"
    }
  }))


export default function Header(props) {
    return (
        <>
        <Root className={classes.root}>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                <Box 
                  component="img"
                  sx={{
                    maxHeight: "5rem",
                  }}
                  alt="company logo"
                  src={logo}
                />
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        </Root>
        </>
    );
}