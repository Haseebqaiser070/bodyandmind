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

import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import course3 from "./course3.png";

import course2 from "./course2.png";
import { DataGrid } from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Courses() {
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
      width: 50,
      height: 50,
      marginRight: 15,
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
        <Card style={{ padding: "35px", height: "90vh", borderRadius: "20px" }}>
          <div className="row">
            <div className="col-md-10">
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: 40,
                  color: "#976768",
                }}
              >
                <b>Courses</b>
              </h1>
            </div>
            <div className="col-md-2">
              <Button
                style={{
                  backgroundColor: "#976768",
                  marginRight: 15,
                  marginTop: 20,
                }}
                variant="contained"
                size="small"
                onClick={() => navigate("/Dashboard/Cform")}
              >
                Add Courses
              </Button>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: "#976768",
                  //  color: "#ffff",
                }}
              >
                <TableRow>
                  <TableCell style={styles.th}>Image</TableCell>

                  <TableCell style={styles.th}>Name</TableCell>
                  <TableCell style={styles.th} align="left">
                    Summary
                  </TableCell>
                  <TableCell style={styles.th} align="left">
                    Price
                  </TableCell>
                  <TableCell style={styles.th} align="left">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={course3} style={styles.image}></img>
                  </TableCell>
                  <TableCell align="left" style={{ flex: 2 }}>
                    Harry Potter and the Prison
                  </TableCell>
                  <TableCell align="left" style={{ flex: 3 }}>
                    Amet minim mollit non deserunt .
                  </TableCell>
                  <TableCell align="left" style={{ flex: 1 }}>
                    98$
                  </TableCell>
                  <TableCell align="left" style={{ flex: 2 }}>
                    <Button
                      style={{
                        backgroundColor: "#976768",
                        marginRight: 15,
                      }}
                      variant="contained"
                      size="small"
                      onClick={() => navigate("/Dashboard/User1")}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "#976768" }}
                      variant="contained"
                      size="small"
                      // onClick={() => {
                      //   handleDelete(users.id);
                      // }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={course2} style={styles.image}></img>
                  </TableCell>
                  <TableCell align="left">The Prisoner Key</TableCell>
                  <TableCell align="left">Amet mi</TableCell>
                  <TableCell align="left">88$</TableCell>
                  <TableCell align="left">
                    <Button
                      style={{
                        backgroundColor: "#976768",
                        marginRight: 15,
                      }}
                      variant="contained"
                      size="small"
                      onClick={() => navigate("/Dashboard/User1")}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "#976768" }}
                      variant="contained"
                      size="small"
                      // onClick={() => {
                      //   handleDelete(users.id);
                      // }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </div>
  );
}
