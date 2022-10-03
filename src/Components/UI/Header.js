import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Header(props) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                Arc Development
            </Toolbar>
        </AppBar>
    );
}