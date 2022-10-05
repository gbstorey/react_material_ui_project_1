import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import  {useScrollTrigger}  from '@mui/material';
import styled from '@emotion/styled';

import {ReactComponent as Logo} from '../../assets/logo.svg'

// Scrolling Shadow Functionality

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

// Styled Components

  const Root = styled('div')(({theme}) => ({
        ...theme.mixins.toolbar,
        marginBottom:"2em"
  }));
  
  const ArcLogo = styled(Logo)(() => ({
    maxHeight: '6rem'
  }));

  const TabSet = styled(Tabs)(()=>({
    marginLeft: 'auto',
    marginRight: '25px'
  }))

  const TopTab = styled(Tab)(({theme})=>({
    ...theme.typography.tab,
    marginLeft: "10px",
  }))

export default function Header(props) {
    return (
        <>
        <Root>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                    <ArcLogo />
                <TabSet>
                  <TopTab label="Home" />
                  <TopTab label="Services" />
                  <TopTab label="The Revolution" />
                  <TopTab label="About Us" />
                  <TopTab label="Contact Us" />
                </TabSet>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        </Root>
        </>
    );
}