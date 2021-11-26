import React, { useEffect, useState } from "react";
import {
  NavTab,
  AppName,
} from "./style";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  MenuItem,
  Menu,
  Button,
  Fade
} from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { colors, screenSizes } from "../../../../shared/styles/theme";
import { Link } from "react-router-dom";
import {
  NavContainer,
  NavContainerWrap,
  // AppLogo,
  // AppName,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { Redirect } from "react-router-dom";
import DrawerNav from "./DrawerNav"
import imag from "../../../../assets/icons/mainLogo.png"

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "24px",
    fontWeight: "bolder",
    padding: "10px 20px",
    marginTop: "12px",
    border: "2px solid neon",
    "&:hover": {
      background: "#1b2732",
      borderRadius: "8px",
      color: "white"
    }
  },
  menuList:{
    color:colors.white,
    padding:"15px 10px",
"& a":{
  textDecoration:"none",
  color:colors.white,
}
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: colors.gray,
      marginTop:"50px",
      width:"250px",
      minWidth:'160px',
    }
  }
}));



const Navbar = () => {
  // console.log(props)
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeLink, setActiveLink] = React.useState(history.location.pathname);
  const [token, setToken] = React.useState<any>();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  React.useEffect(() => {
    setToken(localStorage.getItem('auth-token'))
    console.log("token", token)
    const path = history.location.pathname;
    // console.log("history.location.pathname", path)
    if (path === "/homePage") {
      setActiveLink("homePage");
    } else if (path === "/signIn") {
      setActiveLink("signIn");
    } else if (path === "/dashboard") {
      setActiveLink("dashboard");
    } else if (history.location.search === "") {
      history.push(history.location.pathname);
    }
  }, []);

  console.log("path", window.location.pathname, history.location.pathname)

  React.useEffect(() => {

    return history.listen((location) => {
      // //console.log(`You changed the page to: ${location.pathname}`);
      const path = history.location.pathname;
      if (path === "/homePage") {
        setActiveLink("homePage");
      }
      else if (path === "/signIn") {
        setActiveLink("signIn");
      } else if (path === "/dashboard") {
        setActiveLink("dashboard");
      }
    });
  }, [history]);

  const toHomePage = () => {
    history.push(Paths.homePage);
    setActiveLink("homePage");
  };

  const tosignIn = () => {
    history.push(Paths.signIn);
    setActiveLink("signIn");
  };
  
  const toCandidateHR = () => {
    history.push(Paths.candidateHR);
    setActiveLink("candidateHR");
  }

  const toMilitaryVeteran = () => {
    history.push(Paths.militaryVeteran);
    setActiveLink("professionals")
  }
  const toLogout = () => {
    localStorage.clear()
    history.push(Paths.signIn);
    setActiveLink("signIn");
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const path = window.location.pathname
  //@ts-ignore
  const ItemCSS = {
    outline: "none",
    color: "white",
    background: "black",
    cursor: "pointer",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.05em",

  }

  const MenuCSS = {
    background: "transparent",
    border: "none",
    outline: "none"
  }

  
  return (
    <NavContainerWrap>
      <NavContainer>
        <NavContainer>
          <AppName
            onClick={toHomePage}
          >
            RecHelper
          </AppName>
        </NavContainer>
        {/* <NavContainer>

<NavTab isActiveTab={activeLink === "professionals" ? true : false}>
<Dropdown className="dropdown">
<a>Professionals</a>
<DropdownContent className="dropdown-content">
<a onClick={toHomePage}>Home</a>
<a href="#">Locations</a>
<a href="#">Professions</a>
<a onClick={toMilitaryVeteran}>US Military & Veterans</a>
</DropdownContent>
</Dropdown>
</NavTab>

  <NavTab isActiveTab={activeLink === "candidateHR" ? true : false}
        onClick={toCandidateHR}
      >
        <a>Candidates and Hr's</a>
      </NavTab>


<NavTab
>
<Dropdown className="dropdown">
<a>Life at RecHelper</a>
<DropdownContent className="dropdown-content">
<a href="#">Benefits</a>
<a href="#">Culture</a>
<a href="#">Diversity and inculsion</a>
<a href="#">RecHelper Life</a>
</DropdownContent>
</Dropdown> */}

{/* </NavTab> */}
        {isMobile ? (
          <DrawerNav />
        ) :
          <>
            <NavContainer>

              <NavTab
              >
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState: any) => ( 
                    <React.Fragment>
                      <a {...bindTrigger(popupState)}>
                      Professionals
                      </a>
                      <Menu className={classes.menu} {...bindMenu(popupState)}>
                        <MenuItem className={classes.menuList} onClick={popupState.close}><Link to="/">Home</Link></MenuItem>
                        <MenuItem className={classes.menuList} onClick={popupState.close}>Locations</MenuItem>
                        <MenuItem className={classes.menuList} onClick={popupState.close}>Professions</MenuItem>
                        <MenuItem className={classes.menuList} onClick={popupState.close}><Link to="/militaryVeteran">US Military & Veterans</Link></MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </NavTab>

              <NavTab
              >
                <a>Students and Graduates</a>
              </NavTab>

       
              <NavTab>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState: any) => ( 
                    <React.Fragment>
                      <a {...bindTrigger(popupState)}>
                        Life at RecHelpers
                      </a>
                      <Menu className={classes.menu} {...bindMenu(popupState)}>
                        <MenuItem className={classes.menuList} onClick={popupState.close}><Link to="/benefits">Benefits</Link></MenuItem>
                        <MenuItem className={classes.menuList} onClick={popupState.close}>Culture</MenuItem>
                        <MenuItem className={classes.menuList} onClick={popupState.close}>Diversity and inculsion</MenuItem>
                        <MenuItem className={classes.menuList} onClick={popupState.close}>RecHelper Life</MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </NavTab>
            </NavContainer>
            <NavContainer>
              {/* <NavTabs > */}
              <NavTab
                isActiveTab={activeLink === "signIn" ? true : false}
                onClick={tosignIn}
              >
                <a>SignIn</a>
              </NavTab>
              {/* </NavTabs> */}

            </NavContainer>
          </>
        }
      </NavContainer>
    </NavContainerWrap>
  );
};

export default Navbar;