
import { AppBar, Box, Button, IconButton, ListItem, ListItemButton, ListItemText, Toolbar, Typography, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import { useCallback, useEffect, useMemo, useState } from "react";

const navItems = ['About', 'Experiences', 'Projects', 'Contact'];

interface NavItemProps{
    item: string;
};

// Moved out of props
function scrollToTop() {
    window.scrollTo(0,0);
}

const NavbarAppBar = styled(AppBar)({
    backgroundColor:'transparent',
    backdropFilter: 'blur(8px)',
    boxShadow: 'none',
    overflow: 'hidden',
    paddingLeft:10,
    paddingRight:10
});

const NavbarToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    paddingLeft:10,
    paddingRight:10,
    '@media (max-width:600px)':{
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10
    }
});

const NavbarIconButton = styled(IconButton)({
    display: 'none',
    marginTop: 10,
    color:'inherit',
    '@media (max-width:600px)':{
        display: 'block'
    }
});

const NavbarTitle = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '--c': 'rgb(10, 255, 157)',
    WebkitMask: 'linear-gradient(#000 0 0) content-box',
    transition: '0.8s',
    textAlign: 'left',
    flexGrow:0,
    '@media (max-width:600px)':{
        textAlign: 'center',
        flexGrow: 1
    },
    ':hover':{
        '--_p': '100%',
        color: 'var(--c)'
    }
});

const NavbarH1 = styled(motion.h1)({
    fontFamily: 'Monoton', 
    fontSize: '18px',
});

const NavbarButtonList = styled(Box)({
    display: 'block',
    flexGrow: 1,
    textAlign: 'right',
    '@media (max-width:600px)':{
        display:'none'
    }
});

const NavbarMenuContainer = styled(motion.div)({
    position: 'fixed',
    width: '100%',
    height: '100%',
    color: '#fff',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(8px)',
    zIndex:100
});

const NavbarMenuButton = styled(motion.a)({
    display:'inline-flex',
    color: '#fff',
    textDecoration: 'none',
    height: '80px',
    overflow: 'hidden',
    fontSize: '2vw',
    textTransform: 'uppercase',
    cursor: 'pointer'
});

const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:0.5
      }
    }
}

function Navbar(){
    const [mobileOpen, setMobileOpen] = useState(false);
    const scrollToSection = useCallback((section: string) => {
        document.getElementById(section.toLowerCase())
        ?.scrollIntoView();
    }, []);
    
    const HeaderButton = ({item}:NavItemProps) => {
        return (
            <Button key={item} sx={{color: '#fff'}} onClick={()=>scrollToSection(item)}>
                {item}
            </Button>
        );
    };
    const handleResize = () => {
        if (window.innerWidth > 600) {
            setMobileOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
    const navbarMenuButtons = useMemo(() => 
        navItems.map((item, index) => 
            <NavbarMenuButton key={item} onClick={()=>{
                setMobileOpen(false);
                setTimeout(()=>scrollToSection(item),450)
            }}
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.4 - index * 0.1}} // Adjust delay dynamically based on index
                exit={{
                opacity:0,
                y:90,
                transition:{
                    ease:"easeInOut",
                    delay:0.6 - index * 0.2 // Adjust delay dynamically based on index
                }
            }}>{item}</NavbarMenuButton>
        ), []
    );

    return (
        <motion.div initial={{ opacity:0}} animate={{ opacity: 1 } }
        transition={{ ease: "easeInOut", duration: 0.6, delay: 0.1 }}>
            <NavbarAppBar elevation={0}>
                <NavbarToolbar>
                    <NavbarIconButton aria-label="open menu" edge="start" onClick={handleDrawerToggle}>
                        <MenuIcon/>
                    </NavbarIconButton>
                    <NavbarTitle onClick={scrollToTop}>
                        <NavbarH1 layoutId="main-title-container">
                        {"Chan\u00A0\u00A0\u00A0Siu\u00A0\u00A0\u00A0Chung"}
                        </NavbarH1>
                    </NavbarTitle>
                    <NavbarButtonList>
                    {navItems.map((item) => <HeaderButton key={item} item={item} />)}
                    </NavbarButtonList>
                </NavbarToolbar>
            </NavbarAppBar>
            <AnimatePresence>
            {
          mobileOpen &&(
            <NavbarMenuContainer
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.1}}
              exit="exit"
            >
              {navbarMenuButtons}
            </NavbarMenuContainer>
          )
        }    
         </AnimatePresence>
        </motion.div>
    );
}

export default Navbar;