import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import  {useScrollTrigger}  from '@mui/material';
import styled from '@emotion/styled';

import {ReactComponent as Logo} from '../../assets/logo.svg'

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
    root: `${PREFIX}-root`,
    imageIcon: `${PREFIX}-imageIcon`
  }

  const Root = styled('div')(({theme}) => ({
    [`&.${classes.root}`]: {
        ...theme.mixins.toolbar,
        marginBottom:"2em"
    },
  }))
  
  const ArcLogo = styled(Logo)((theme) => ({
    maxHeight: '6rem'
  }));

export default function Header(props) {
    return (
        <>
        <Root className={classes.root}>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                    <ArcLogo className={classes.imageIcon} inheritViewBox/>
                <Tabs>
                  <Tab label="Home" />
                  <Tab label="Services" />
                  <Tab label="The Revolution" />
                  <Tab label="About Us" />
                  <Tab label="Contact Us" />
                </Tabs>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        </Root>
        </>
    );
}