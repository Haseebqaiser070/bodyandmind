import { Icon } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/styles.css";
import Home from "./Home.png";
import logo from "./bom.png";
import { auth } from "../firebase";
//import {signOut } from "firebase/auth";

export default function Navigation() {
  const styles = {
    ns: {
      color: "#976768",
      fontWeight: "bold",
    },
    image: {
      width: 25,
      height: 25,
      marginRight: 15,
    },
  };
  return (
    <React.Fragment>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav class="sb-sidenav accordion bg" id="sidenavAccordion">
            <div
              //   style={{
              //     height: "calc(100vh - 56px)",
              //     overflow: "auto",
              //   }}
              class="sb-sidenav-menu"
              style={{
                backgroundImage:
                  "linear-gradient(to top right,#DDC6BF , #F6E9DF)",
                // backgroundColor: "#F6E9DF",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                height: "100vh",
                // backgroundRepeat: "no-repeat",
                // boxShadow: "3px 3px",
                //opacity: 1,
              }}
            >
              <div class="nav">
                <img src={logo}></img>

                <Link
                  style={styles.ns}
                  class="nav-link sidenavtext "
                  to="/Dashboard/AllUsers"
                >
                  <div class="sb-nav-link-icon"></div>
                  <img src={logo} style={styles.image}></img>
                  All Users
                </Link>

                <Link
                  style={styles.ns}
                  class="nav-link sidenavtext "
                  to="/Dashboard/Courses"
                >
                  <div class="sb-nav-link-icon"></div>
                  <img src={logo} style={styles.image}></img>
                  Courses
                </Link>

                <Link
                  style={styles.ns}
                  class="nav-link sidenavtext "
                  to="/Dashboard/Audio"
                >
                  <div class="sb-nav-link-icon"></div>
                  <img src={logo} style={styles.image}></img>
                  Audios
                </Link>

                <Link
                  style={styles.ns}
                  class="nav-link sidenavtext "
                  to="/Dashboard/Audiopkg"
                >
                  <div class="sb-nav-link-icon"></div>
                  <img src={logo} style={styles.image}></img>
                  Audio Packages{" "}
                </Link>

                <Link
                  style={styles.ns}
                  class="nav-link sidenavtext "
                  to="/Dashboard/Begandend"
                >
                  <div class="sb-nav-link-icon"></div>
                  <img src={logo} style={styles.image}></img>
                  Begining and ending{" "}
                </Link>
                <Link style={styles.ns} class="nav-link sidenavtext " to="/">
                  <div class="sb-nav-link-icon"></div>
                  <img src={logo} style={styles.image}></img> Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
