import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import navtext from "../assets/st-text-navbar.png";

const REGISTER_URL = "#"; // TODO: replace with devfolio project URL

const sectionLinks = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Themes", href: "/#themes" },
  { label: "Prizes", href: "/#prizes" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" className="custom-navbar" elevation={0}>
        <Toolbar className="nav-toolbar">
          <a href="/" className="nav-logo-link">
            <img src={navtext} alt="Code For Change 2.0" className="logo" />
          </a>

          <Box className="nav-links">
            {sectionLinks.map((item) => (
              <Button key={item.label} component="a" href={item.href} className="nav-link-btn">
                {item.label}
              </Button>
            ))}
            <Button component={Link} to="/members" className="nav-link-btn">
              Team
            </Button>
            <Button
              component="a"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-register-btn"
            >
              Register
            </Button>
          </Box>

          <IconButton edge="end" className="menu-btn" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="drawer-list">
          {sectionLinks.map((item) => (
            <Button
              key={item.label}
              component="a"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Button>
          ))}
          <Button component={Link} to="/members" onClick={() => setOpen(false)}>
            Team
          </Button>
          <Button
            component="a"
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-register-btn"
            onClick={() => setOpen(false)}
          >
            Register
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
