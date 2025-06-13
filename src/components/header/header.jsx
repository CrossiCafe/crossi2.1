"use client"
import './header.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from "next/image";
import Logo from "/public/logo-croissant.png";
import { Container, Slide } from '@mui/material';



const drawerWidth = 260;
const navItems = [
  {
    name:'Home',
    route:'/',
    descargable:false
  },
  {
    name:'Menú',
    route:'https://drive.google.com/file/d/1WbD02UCoqIgfjZT2cwwXWjwBCgcKnT7a/view?usp=drive_link',
    descargable:true
  },
  {
    name:'Sucursales',
    route:'/sucursales',
    descargable:false
  },
  {
    name: 'Franquicias',
    route: '/franquicias',
    descargable:false
  }, 
  {
    name: 'Mayorista',
    route: '/mayorista',
    descargable:false
  }, 
  {
    name:'Contacto',
    route:'/contacto',
    descargable:false
  }
];

export default function Header({ window }) {
  const [currentWindow, setWindow] = React.useState(window);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    setWindow(window);
  }, [ window]);

  const trigger = useScrollTrigger({
    target: currentWindow ? currentWindow() : undefined,
  });
  const container =
    currentWindow !== undefined
      ? () => currentWindow().document.body
      : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className='menuDrawer'>
      <Box sx={{ display: 'flex'}}>
      <IconButton
        color="inherit"
        aria-label="close drawer"
        sx={{ alignSelf: 'flex-start'}}
      >
        <CloseIcon />
      </IconButton>
      <Link href="/" className=''>
        <Image 
          src={Logo}
          width={180}
          height={40}
          alt="Logo Crossi"
          className='LogoHeaderDrawer'
          priority />
      </Link>
    </Box>
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding >
            <ListItemButton sx={{ textAlign: 'center', paddingLeft: '50px' }}>
              <Link href={item.route} target={item.descargable ? "_blank" : "_self"}>{item.name}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <header>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          disableScrollLock={true}
          anchor='right'
        >
          {drawer}
        </Drawer>
      </nav>
      <Slide
        appear={false}
        direction="down"
        in={!trigger}

      >
        <AppBar component="nav" className="desktopHeader">
          <Container>
            <Toolbar  sx={{ justifyContent: "space-between" }}  >
              <Link href="/">
                <Image 
                  src={Logo}
                  width={220}
                  height={50}
                  alt="Logo Crossi"
                  priority />
              </Link>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                {
                  mobileOpen?
                  <CloseIcon/>
                  :
                  <MenuIcon />
                }
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: "center"}}>
                {navItems.map((item) => (
                  <Link href={item.route} key={item.name}  target={item.descargable ? "_blank" : "_self"}>{item.name}</Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      
    </header>
  );
}
