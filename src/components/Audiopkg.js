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

import Autocomplete from "@mui/material/Autocomplete";
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

export default function Audiopkg() {
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
        <Card style={{ padding: "35px", height: "90vh", borderRadius: "20px" }}>
          <div className="row">
            <div className="col-md-9">
              <h2
                style={{
                  textAlign: "left",
                  marginBottom: 40,
                  color: "#976768",
                }}
              >
                <b>Audio Packages</b>
              </h2>
            </div>
            <div className="col-md-3">
              <Button
                style={{
                  backgroundColor: "#976768",
                  marginRight: 15,
                  marginTop: 20,
                }}
                variant="contained"
                size="small"
                onClick={handleOpen}
              >
                Add Audio Packages
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styles.mod}>
                  <div>
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
                      fullWidth
                    />
                    <h6
                      style={{
                        marginTop: "10px",
                        // marginLeft: "20px",
                        //   color: "#976768",
                        fontWeight: "bold",
                      }}
                    >
                      Audios
                    </h6>
                    <Autocomplete
                      disablePortal
                      fullWidth
                      variant="outlined"
                      id="combo-box-demo"
                      options={top100Films}
                      //  sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Audios" />
                      )}
                    />

                    <h6
                      style={{
                        marginTop: "10px",
                        // marginLeft: "20px",
                        //   color: "#976768",
                        fontWeight: "bold",
                      }}
                    >
                      Price{" "}
                    </h6>

                    <TextField
                      id="outlined-basic"
                      label="Price"
                      type="number"
                      variant="outlined"
                      fullWidth
                    />
                  </div>

                  <Button
                    style={{
                      backgroundColor: "#976768",
                      marginTop: "10px",
                    }}
                    variant="contained"
                    size="small"
                    component="label"
                  >
                    Submit
                  </Button>
                </Box>
              </Modal>
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
                  <TableCell style={styles.th}>Title</TableCell>
                  <TableCell style={styles.th} align="left">
                    Price
                  </TableCell>
                  <TableCell style={styles.th} align="right">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" style={{ flex: 2 }}>
                    Harry Potter and the Prison
                  </TableCell>

                  <TableCell align="left" style={{ flex: 1 }}>
                    98$
                  </TableCell>
                  <TableCell align="right" style={{ flex: 2 }}>
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
                  <TableCell align="left">The Prisoner Key</TableCell>
                  <TableCell align="left">88$</TableCell>
                  <TableCell align="right">
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
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
