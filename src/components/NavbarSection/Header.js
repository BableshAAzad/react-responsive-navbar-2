import { AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme, Typography } from '@mui/material';
import React, { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from '../DrawerComp';

const PAGES = ["Products", "Services", "ContactUs", "AboutUs"]
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#064970' }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
                    <Typography sx={{ fontSize: '1.5rem' }}>
                        BableshAAzad.com
                    </Typography>
                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)}>
                                    {
                                        PAGES.map((page, index) => (
                                            <Tab key={index} label={page} />
                                        ))
                                    }
                                </Tabs>
                                <Button sx={{ marginLeft: 'auto' }} variant='contained'>LOGIN{" "}</Button>
                                <Button sx={{ marginLeft: '10px' }} variant='contained'>SIGNUP{" "}</Button>
                            </>
                        )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
