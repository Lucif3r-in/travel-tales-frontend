import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import useStyles from "../Navbar/styles";

const defaultTheme = createTheme();

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: "transparent",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(2.5px)",
          WebkitBackdropFilter: "blur(2.5px)",
          margin: "auto",
          // width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          position: "relative",
          bottom: "0",
        }}
      >
        <Link to="/" className={classes.brandContainer}>
          <img
            src="https://res.cloudinary.com/dhnkuonev/image/upload/v1690723588/Logo_tor6pg.png"
            alt="Travel Tales Logo"
            className={classes.logo}
            height={40}
          />
        </Link>
        <Typography variant="body1">Made with :love: by vasudev🪶</Typography>
        <Box>
          <Link
            href="https://github.com/Lucif3r-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white", marginRight: 2 }} />
          </Link>
          <Link
            href="mailto:ashutosh123rath@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon sx={{ color: "white", marginRight: 2 }} />
          </Link>
          <Link
            href="https://twitter.com/Ashutos48101482"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ color: "white" }} />
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
