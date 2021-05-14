import React, { useState, useRef } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from "../../../components/SidebarOption/SidebarOption";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classes from "./Sidebar.module.css";
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const Sidebar = React.memo((props) => {
  const {currentUser,logoutHandler} = props
  const buttonRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = ()=>{
    logoutHandler()
  }

  return (
    <>
      <div className={classes.sidebar}>
        <div>
          <TwitterIcon className={classes.sidebar_twitterIcon} />
          <NavLink to="/home" activeClassName={classes.sidebarActive} className={classes.sidebarNav}>

          <SidebarOption Icon={HomeIcon} text="Home"  />
          </NavLink>
          <SidebarOption Icon={SearchIcon} text="Explore" />
          <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /> 
          <SidebarOption Icon={MailOutlineIcon} text="Messages" />
          <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /> 
          <SidebarOption Icon={ListAltIcon} text="Lists" /> 
          <SidebarOption Icon={PermIdentityIcon} text="Profile"  />
          <SidebarOption Icon={MoreHorizIcon} text="More" />
        
        </div>
        <div>
          <Button
            ref={buttonRef}
            aria-controls={anchorEl ? "user-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.sidebar_userInfo}
            fullWidth
          >
            <div className={classes.sidebar_userDetail}>
              <Avatar src={currentUser.photoURL} />
              <div className={classes.sidebar_userDetail_text}>
                <span>{currentUser.displayName}</span>
                <p>{currentUser.email}</p>
              </div>
            </div>
            <MoreVertIcon />
          </Button>
          <Menu
            id="user-menu"
            anchorEl={() => buttonRef.current}
            open={Boolean(anchorEl)}
            keepMounted
            onClose={handleClose}
          >
            <MenuItem
              className={classes.sidebar_userMenu}
              onClick={handleClose}
            >
              Profile
            </MenuItem>
            <MenuItem
              className={classes.sidebar_userMenu}
              onClick={handleClose}
            >
              My account
            </MenuItem>
            <MenuItem
              className={classes.sidebar_userMenu}
              onClick={onLogout}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
})

export default Sidebar;
