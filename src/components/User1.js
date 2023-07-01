import React, { useState, useEffect } from "react";
import { Button, Card, TextField } from "@mui/material";
//import { Link, Outlet } from "react-router-dom";
import "./css/styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import pic from "./pic.jpg";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Course1 from "./course1.png";
import Course2 from "./course2.png";
import audio1 from "./audio1.png";
import audio2 from "./audio2.png";
// import Box from "@mui/material/Box";
// // import Modal from "@mui/material/Modal";
// import { db } from "../firebase";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";

export default function User1() {
  const navigate = useNavigate();

  // const userRef = collection(db, "users");
  // const [users, setuser] = useState([]);

  // const getusers = async () => {
  //   const data = await getDocs(userRef);
  //   //console.log(data);
  //   setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  // useEffect(() => {
  //   getusers();
  // }, []);

  // const handleDelete = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  //   getusers();
  //   //setloading(true);
  // };

  const styles = {
    ns: {
      color: "#976768",
    },
    image: {
      width: "100%",
      height: "100%",
      //paddingBottom: "px",
      borderRadius: "10%",
    },
    th: {
      color: "#ffff",
    },
  };
  return (
    <div
      style={{ height: "100%", paddingTop: "5px", backgroundColor: "#f5f5f5" }}
    >
      <div className="p-4 m-4">
        <Card style={{ padding: "15px", marginBottom: "20px" }}>
          <div className="row">
            <div className="col-md-2">
              {" "}
              <img src={pic} style={styles.image}></img>
            </div>
            <div className="col-md-10">
              <h1 style={{ color: "#976768" }}>
                <b>ALi</b>
              </h1>
              <h6>Gmail: ali@gmail.com</h6>
              <h6>Membership: Plan Name( Yearly )</h6>
              <h6>Expiry Date:09-10-2023</h6>
            </div>
          </div>
        </Card>
        {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: "#976768",
                  //  color: "#ffff",
                }}
              >
                <TableRow>
                  <TableCell style={styles.th}>Courses</TableCell>
                  <TableCell style={styles.th} align="left">
                    Audios
                  </TableCell>
                  <TableCell style={styles.th} align="left">
                    Recordings
                  </TableCell>
                  <TableCell style={styles.th} align="left">
                    Purchase
                  </TableCell>

                  <TableCell style={styles.th} align="left">
                    Membership
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Artifical Intelligence
                  </TableCell>
                  <TableCell align="left">audio.mp3</TableCell>
                  <TableCell align="left">recording1.mp3</TableCell>
                  <TableCell align="left">Purchased</TableCell>
                  <TableCell align="left">Premium</TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Operating System
                  </TableCell>
                  <TableCell align="left">audio.mp3</TableCell>
                  <TableCell align="left">recording1.mp3</TableCell>
                  <TableCell align="left">Purchased</TableCell>
                  <TableCell align="left">Premium</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <br></br> */}
        <br></br>
        <div className="row">
          <div
            className="col-md-6"
            style={{ padding: "5px", marginBottom: "10px" }}
          >
            <Card style={{ padding: "10px", margin: "5px" }}>
              <h5 style={{ padding: "5px", marginBottom: "15px" }}>Courses</h5>
              <div className="row" style={{ paddingBottom: "5px" }}>
                <div className="col-md-1">
                  <img src={Course1} style={{ width: "200%" }}></img>
                </div>
                <div className="col-md-11">
                  <h6 style={{ marginTop: "5px" }}> Black and white</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <img src={Course2} style={{ width: "200%" }}></img>
                </div>
                <div className="col-md-11">
                  <h6 style={{ marginTop: "5px" }}> The Prisoner's key</h6>
                </div>
              </div>
            </Card>
          </div>
          <div
            className="col-md-6"
            style={{ padding: "5px", marginBottom: "10px" }}
          >
            <Card style={{ padding: "10px", margin: "5px" }}>
              <h5 style={{ padding: "5px", marginBottom: "15px" }}>Audios</h5>
              <div className="row" style={{ paddingBottom: "5px" }}>
                <div className="col-md-1">
                  <img src={audio1} style={{ width: "200%" }}></img>
                </div>
                <div className="col-md-11">
                  <h6 style={{ marginTop: "5px" }}> Hypnotic Gastric Band</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <img src={audio2} style={{ width: "200%" }}></img>
                </div>
                <div className="col-md-11">
                  <h6 style={{ marginTop: "5px" }}> User Defenders</h6>
                </div>
              </div>
            </Card>
          </div>

          <div
            className="col-md-6"
            style={{ padding: "5px", marginBottom: "10px" }}
          >
            <Card style={{ padding: "10px", margin: "5px" }}>
              <h5 style={{ padding: "5px", marginBottom: "15px" }}>
                My Recordings
              </h5>
              <div className="row" style={{ paddingBottom: "5px" }}>
                <div className="col-md-1">
                  <img src={Course1} style={{ width: "200%" }}></img>
                </div>
                <div className="col-md-11">
                  <h6 style={{ marginTop: "5px" }}> Black and white</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <img src={Course2} style={{ width: "200%" }}></img>
                </div>
                <div className="col-md-11">
                  <h6 style={{ marginTop: "5px" }}> The Prisoner's key</h6>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
