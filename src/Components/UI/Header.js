import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import  {useScrollTrigger}  from '@mui/material';
import {Typography} from '@mui/material';
import styled from '@emotion/styled';

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
        ...theme.mixins.toolbar
    }
  }))


export default function Header(props) {
    return (
        <>
        <Root className={classes.root}>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h3" >
                        Arc Development
                    </Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        </Root>
        </>
    );
}