import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IcecreamTwoToneIcon from '@mui/icons-material/IcecreamTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "../drawer/DrawerComponent"
import { logout } from "../../redux/slices/auth/authSlice";
import "./Navbar.css";

const pages = ["Home", "Ice(S)", "FeedBack", "Login"];
const settings = ["Cart", "Logout"];

function Navbar() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  // Menu de navegação
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Controle do Drawer
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  // Adicioando função aos setting
  const handleSettingClick = (setting) => {
    switch (setting) {
      case "Cart":
        setOpenDrawer(true);
        break;
      case "Logout":
        console.log("Sai do sistema");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IcecreamTwoToneIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <IcecreamTwoToneIcon />
            </Typography>

            <Box className="links" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button><Link to="/">Home</Link></Button>
              <Button><Link to="/info">Ice(s)</Link></Button>
              <Button><Link to="/notes">FeedBack</Link></Button>
              <Button><Link to="/login">Login</Link></Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {console.log(currentUser?.img)}
                  <Avatar alt={currentUser?.username || "User"} src={currentUser?.img || "/static/images/avatar/2.jpg"} />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      handleSettingClick(setting);
                    }}
                  >
                    <Typography>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Renderizando o Drawer do Carrinho */}
      <DrawerComponent open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}

export default Navbar;
