import * as React from 'react';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AssurantLogo from '../../src/assets/assurant-footer-logo.png'
import SSLLogo from '../../src/assets/ssl-logo.jpeg'
import PCILogo from '../../src/assets/pci-logo.jpeg'

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props}>
            {'© 2022 assurant inc. all right reversed'}
        </Typography>
    );
}

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <img src={AssurantLogo} alt="assurant"></img>
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <img src={SSLLogo} alt="SSL"></img>
                    </IconButton>
                    <IconButton color="inherit">
                        <img src={PCILogo} alt="PCI"></img>
                    </IconButton>
                </Toolbar>
                <Toolbar>
                    <Copyright sx={{mb: 4 }} />
                    <Box sx={{ flexGrow: 1 }} />
                    <Link href="#" variant="body2" color="inherit" style={{ margin: 5 }}>
                        {'Support Details'}
                    </Link>
                    <Link href="#" variant="body2" color="inherit" style={{ margin: 5 }}>
                        {'Privacy Policy'}
                    </Link>
                    <Link href="#" variant="body2" color="inherit" style={{ margin: 5 }}>
                        {'Terms of service'}
                    </Link>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
