import React, { useState } from "react";
import {AppBar,Box,Toolbar,IconButton,Typography, Menu,Grid,Container,Avatar,Tooltip,Button,
  MenuItem,Dialog,TextField,DialogTitle,DialogContent,DialogActions,} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {lightBlue } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const settings = [ "Account", "Logout"];

export default function NavBarRO({ title, projectName, user, onLogout  }) {
  /*用户账户的下拉菜单*/
  const [anchorElUser, setAnchorElUser] =useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //弹窗
  const [openDialog, setOpenDialog] = useState(false);
  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu();
    if (setting === "Account") {
      setOpenDialog(true);
    } else if (setting === "Logout") {
      onLogout();
    }
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container alignItems="center" direction="row">
            <Grid item xs={5}>
              {/* 左边logo */}
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {title}
              </Typography>
            </Grid>
            {/*选择项目*/}
            <Grid item conteriner xs={5}>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "30ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <TextField  
                  label="*项目*" 
                  variant="standard" 
                  value={projectName}
                  InputProps={{
                    readOnly: true,
                  }}>
                    {projectName}
                  </TextField>
                </Box>
            </Grid>
            <Grid item xs={1}>
              {/*Home键 */}
              <Box>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="close"
                   component={Link}
                  to="/"
                >
                  <HomeIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={1}>
              {/* 个人头像 */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: lightBlue[500] }}>
                  {user.username.charAt(0)}</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      {/* 用户信息弹窗 */}
      <Dialog open={openDialog} onClose={handleCloseDialog} 
        PaperProps={{
          sx: {
            width: '30%', // 控制宽度
          },
        }}>
        <DialogTitle>账户信息</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">用户名: {user.username}</Typography>
          <Typography variant="subtitle1">用户级别: {user.level}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}