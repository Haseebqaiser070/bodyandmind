import React, { useState, useEffect } from "react";
import { Box, Button, Card, Modal, TextField } from "@mui/material";
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

export default function User1() {
  const navigate = useNavigate();
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
    mod: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    },
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{ height: "100%", paddingTop: "5px", backgroundColor: "#f5f5f5" }}
    >
      <div className="p-4 m-4">
        <div className="row">
          <div className="col-md-6" style={{ marginBottom: "10px" }}>
            <Card style={{ padding: "10px", margin: "5px" }}>
              <div
                className="row"
                style={{
                  marginBottom: "25px",
                  marginLeft: "10px",
                  paddingTop: "15px",
                }}
              >
                <div className="col-md-6">
                  <h5>New Beginings</h5>
                </div>

                <div className="col-md-5">
                  <Button
                    sx={{
                      marginLeft: "8px",
                      color: "white",
                      backgroundColor: "#976768",
                    }}
                    onClick={handleOpen}
                  >
                    Add new Begining
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styles.mod}>
                      <div>
                        {" "}
                        <h6
                          style={{
                            marginTop: "10px",
                            // marginLeft: "20px",
                            //   color: "#976768",
                            fontWeight: "bold",
                          }}
                        >
                          Title
                        </h6>
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />{" "}
                      </div>
                      <div className="row" style={{ marginTop: "15px" }}>
                        <div className="col-md-8">
                          <h6
                            style={{
                              marginTop: "10px",
                              // marginLeft: "20px",
                              //   color: "#976768",
                              fontWeight: "bold",
                            }}
                          >
                            Upload Content
                          </h6>
                        </div>
                        <div className="col-md-2">
                          <Button
                            style={{
                              backgroundColor: "#976768",
                              marginTop: "10px",
                            }}
                            variant="contained"
                            size="small"
                            component="label"
                          >
                            Upload
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                        </div>
                      </div>{" "}
                    </Box>
                  </Modal>
                </div>
              </div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Hello{" "}
                      </TableCell>
                      <TableCell align="center">
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
                      </TableCell>{" "}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </div>

          <div className="col-md-6" style={{ marginBottom: "10px" }}>
            <Card style={{ padding: "10px", margin: "5px" }}>
              <div
                className="row"
                style={{
                  marginBottom: "25px",
                  marginLeft: "10px",
                  paddingTop: "15px",
                }}
              >
                <div className="col-md-6">
                  <h5>New Endings</h5>
                </div>

                <div className="col-md-5">
                  <Button
                    sx={{
                      marginLeft: "8px",
                      color: "white",
                      backgroundColor: "#976768",
                    }}
                    onClick={handleOpen}
                  >
                    Add new Ending
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styles.mod}>
                      <div>
                        {" "}
                        <h6
                          style={{
                            marginTop: "10px",
                            // marginLeft: "20px",
                            //   color: "#976768",
                            fontWeight: "bold",
                          }}
                        >
                          Title
                        </h6>
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />{" "}
                      </div>
                      <div className="row" style={{ marginTop: "15px" }}>
                        <div className="col-md-8">
                          <h6
                            style={{
                              marginTop: "10px",
                              // marginLeft: "20px",
                              //   color: "#976768",
                              fontWeight: "bold",
                            }}
                          >
                            Upload Content
                          </h6>
                        </div>
                        <div className="col-md-2">
                          <Button
                            style={{
                              backgroundColor: "#976768",
                              marginTop: "10px",
                            }}
                            variant="contained"
                            size="small"
                            component="label"
                          >
                            Upload
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                        </div>
                      </div>{" "}
                    </Box>
                  </Modal>
                </div>
              </div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Hello{" "}
                      </TableCell>
                      <TableCell align="center">
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
                      </TableCell>{" "}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
