import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Aform() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{ height: "100%", paddingTop: "5px", backgroundColor: "#f5f5f5" }}
    >
      <div className=" p-4 m-3">
        <Card style={{ padding: "35px", borderRadius: "20px" }}>
          <Card
            className="m-5"
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "#fff",
            }}
          >
            <div>
              <h5
                style={{
                  textAlign: "center",
                  padding: "10px",
                  color: "white",
                  backgroundColor: "#976768 ",
                }}
              >
                Add Audio
              </h5>

              <div className="row mt-4 pb-4">
                <div className="col-md-3">
                  <h6
                    style={{
                      marginTop: "10px",
                      marginLeft: "20px",
                      //   color: "#976768",
                      fontWeight: "bold",
                    }}
                  >
                    Name
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />{" "}
                </div>
              </div>
              <div className="row mt-4 pb-4">
                <div className="col-md-3">
                  <h6
                    style={{
                      marginTop: "10px",
                      marginLeft: "20px",
                      // color: "#976768",
                      fontWeight: "bold",
                    }}
                  >
                    Summary
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="outlined-basic"
                    label="Summary"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />{" "}
                </div>
              </div>
              <div className="row mt-4 pb-4">
                <div className="col-md-3">
                  <h6
                    style={{
                      marginTop: "10px",
                      marginLeft: "20px",
                      //color: "#976768",
                      fontWeight: "bold",
                    }}
                  >
                    Price
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />{" "}
                </div>
              </div>

              <div className="row mt-4 pb-4">
                <div className="col-md-4">
                  <h6
                    style={{
                      marginLeft: "20px",
                      marginTop: "10px",
                      fontWeight: "bold",
                      //color: "#346448",
                    }}
                  >
                    Add Audio
                  </h6>
                </div>
                <div className="col-md-1 offset-md-6">
                  <IconButton
                    sx={{
                      marginLeft: "50px",
                      marginTop: "20px",
                      color: "#976768",
                    }}
                    onClick={handleOpen}
                  >
                    <AddCircleIcon />
                  </IconButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
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
                          label="Title"
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
                  </Modal>{" "}
                </div>
              </div>
            </div>

            <div className="row mt-4 pb-4">
              <div className="col-md-12">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#976768",
                    float: "right",
                    marginRight: "20px",
                  }}
                  variant="contained"
                  size="small"
                >
                  Save
                </Button>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
}
