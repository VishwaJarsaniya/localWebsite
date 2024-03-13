import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import colorfontTheme from './colorfontTheme';
import logo from "./images/locallogo.png";
import pen from "./images/pen.png";
import bin from "./images/bin.png";
import Swal from "sweetalert2";
import down from "./images/download.png";

function ManageEvents() {
    const [upcards, setUpCards] = useState([
        { id: 11, content: "Card 1" },
        { id: 12, content: "Card 2" },
        { id: 13, content: "Card 3" },
        { id: 14, content: "Card 4" }
    ]);

    const [pastcards, setPastCards] = useState([
      { id: 21, content: "Card 1" },
      { id: 22, content: "Card 2" },
      { id: 23, content: "Card 3" },
  ]);

    const handleDeleteUpCards = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                // Filter out the card with the specified id
                const updatedUpCards = upcards.filter(upcard => upcard.id !== id);
                setUpCards(updatedUpCards);
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
            }
        });
    };

    const handleDeletePastCards = (id) => {
      Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this item!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
      }).then((result) => {
          if (result.isConfirmed) {
              // Filter out the card with the specified id
              const updatedPastCards = pastcards.filter(pastcard => pastcard.id !== id);
              setPastCards(updatedPastCards);
              Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
          }
      });
  };

    return (
        <div>
            <Card style={{ padding: '0%', borderRadius: '0px'}}>
                <CardContent>
                    <Grid container spacing={2} style={{justifyContent:'center', height:'800px'}}>
                        {/* Left Column */}
                        <Grid item xs={3} style={{backgroundColor:'#ffffff',paddingBottom:'120px'}}>
                            <img src={logo} style={{width:'85%' }}></img>
                            <hr></hr>
                            <Link style={{textDecoration:'none',fontSize:'110%', marginLeft:'25%', fontFamily:'Roboto, sans-serif', paddingBottom:'40px'}}>CURRENT EVENTS</Link>
                            <br />
                            <Link style={{textDecoration:'none',fontSize:'110%', marginLeft:'25%', fontFamily:'Roboto, sans-serif'}}>MANAGE EVENTS</Link>
                            <br />
                            <Link style={{textDecoration:'none',fontSize:'110%', marginLeft:'25%', fontFamily:'Roboto, sans-serif'}}>PROFILE</Link>
                        </Grid>
                        {/* Right Column */}
                        <Grid item xs={9} style={{ justifyContent: 'center', backgroundColor: '#f5f8fe',paddingBottom:'120px'}}>
                            <Typography style={{fontSize:'250%', textAlign:'center', color: colorfontTheme.palette.brand500.main}}>Manage Events</Typography>
                            <Typography style={{fontSize:'135%', marginTop:'30px', marginBottom:'15px', color: colorfontTheme.palette.brand400.main}}>Upcoming Events</Typography>
                            <div style={{display:'flex'}}>
                                {upcards.map(upcard => (
                                    <Card key={upcard.id} style={{ width: '265px', height: '230px' ,borderRadius: '15px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', backgroundColor: colorfontTheme.palette.brand100.main, marginRight:'20px'}}>
                                        <Card style={{ width: '235px', height: '150px' ,borderRadius: '15px', marginLeft:'11px', marginTop:'11px'}}>
                                        </Card>
                                        <CardContent style={{  position: 'relative'}}>
                                            <div style={{display:'flex'}}>
                                                <Link to="/eventsCount">
                                                    <img src={pen} style={{width:'30px', position: 'absolute',left:0, marginLeft:'15px', cursor:'pointer'}} />
                                                </Link>
                                                <img src={bin} onClick={() => handleDeleteUpCards(upcard.id)} style={{width:'30px', position: 'absolute',right:0, marginRight:'15px', cursor:'pointer'}} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <Typography style={{fontSize:'135%', marginTop:'70px', marginBottom:'15px',  color: colorfontTheme.palette.brand400.main}}>Past Events</Typography>
                            <div style={{display:'flex'}}>
                                {pastcards.map(pastcard => (
                                    <Card key={pastcard.id} style={{ width: '265px', height: '230px' ,borderRadius: '15px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', backgroundColor: colorfontTheme.palette.brand100.main, marginRight:'20px'}}>
                                        <Card style={{ width: '235px', height: '150px' ,borderRadius: '15px', marginLeft:'11px', marginTop:'11px'}}>
                                        </Card>
                                        <CardContent style={{  position: 'relative'}}>
                                            <div style={{display:'flex'}}>
                                                <Link to="/eventsCount">
                                                    <img src={down} style={{width:'30px', position: 'absolute',left:0, marginLeft:'15px', cursor:'pointer'}} />
                                                </Link>
                                                <img src={bin} onClick={() => handleDeletePastCards(pastcard.id)} style={{width:'30px', position: 'absolute',right:0, marginRight:'15px', cursor:'pointer'}} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default ManageEvents;
