import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import light from "./images/light.png";
import dark from "./images/dark-mode.png";


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 630,
        sm: 800,
        md: 1000,
      },
    },
  });

function EventsForm() {
    const [isEateriesHovered, setIsEateriesHovered] = useState(false);
    const [isEventsHovered, setIsEventsHovered] = useState(false);
    const [isActivitiesHovered, setIsActivitiesHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    const handleCardClick = (cardName) => {
        setSelectedCard(cardName === selectedCard ? null : cardName);
    };

    const getCardBorderStyle = (cardName) => {
        return selectedCard === cardName
            ? { border: isDarkMode ? '#c2a464 solid 2px' : '#000000 solid 2px' }
            : {};
    };

    return (
        <div>
              <ThemeProvider theme={theme}>
            <Card style={{ background: isDarkMode ? 'linear-gradient(180deg, rgba(32,29,29,1) 37%, rgba(194,164,100,1) 92%)' : 'linear-gradient(180deg, rgba(194,164,100,0.8716736694677871) 18%, rgba(0,0,0,1) 69%)', padding: '1.7%', borderRadius: '0px'}}>
                <Card style={{ position: 'relative', zIndex: 1,height:'100%', width: "85%", margin: '0 auto', marginTop: '6px', backgroundColor: isDarkMode ? '#080806' : '#a88e56' }}>
                    <CardContent>
                    <Button style={{ position: 'absolute', top: '10px', right: '10px', width: "30px", height: "30px",paddingBottom:'50px' , paddingTop:'10px'}} onClick={(e) => e.stopPropagation()}>
                    <img src={isDarkMode ? light : dark} style={{ width: "30px", height: "30px" }} onClick={toggleDarkMode}/>
                </Button>
                        <Typography style={{paddingTop:'3%',alignItems: 'center'}} className={isDarkMode ? "Header1" : "Header2"}>How many events are you planning to create?</Typography>
                        <Grid container style={{ marginTop: '0.5%',  justifyContent: 'center'}} spacing={3}>

                            <Grid item xs={10} sm={9} md={3} >
                                <Card className="card" onMouseEnter={() => setIsEventsHovered(true)} onMouseLeave={() => setIsEventsHovered(false)}  onClick={()=>handleCardClick("events")} 
                                  style={{ maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("events") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEventsHovered ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ paddingTop: '60px',paddingBottom:'60px', paddingLeft:'30px', paddingRight:'30px', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>Only 1</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={3} >
                                <Card className="card" onMouseEnter={() => setIsEventsHovered(true)} onMouseLeave={() => setIsEventsHovered(false)}  onClick={()=>handleCardClick("events")} 
                                  style={{ maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("events") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEventsHovered ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0px', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>2/10</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={3} >
                                <Card className="card" onMouseEnter={() => setIsEateriesHovered(true)} onMouseLeave={() => setIsEateriesHovered(false)} onClick={() =>handleCardClick("eateries")}  
                                style={{ maxWidth: '85%', maxHeight: '100%', ...getCardBorderStyle("eateries") , borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEateriesHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0%', position: 'relative' }}>
                                      <Typography className={isDarkMode ? "text3" : "text1"}>10+</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={3} >
                                <Card className="card" onMouseEnter={() => setIsActivitiesHovered(true)} onMouseLeave={() => setIsActivitiesHovered(false)} onClick={() =>handleCardClick("activities")} 
                               style={{ marginTop:'2%' , maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("activities") , borderRadius: '0px',  boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isActivitiesHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0%', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>Not Sure</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                        <Typography style={{paddingTop:'3%'}} className={isDarkMode ? "Header1" : "Header2"}>How big is your event?</Typography>
                        <Grid container style={{ marginTop: '0.5%',  justifyContent: 'center'}} spacing={3}>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setIsEventsHovered(true)} onMouseLeave={() => setIsEventsHovered(false)}  onClick={()=>handleCardClick("events")} 
                                  style={{ maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("events") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEventsHovered ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0px', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>25 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setIsEventsHovered(true)} onMouseLeave={() => setIsEventsHovered(false)}  onClick={()=>handleCardClick("events")} 
                                  style={{ maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("events") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEventsHovered ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0px', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>25-50 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setIsEventsHovered(true)} onMouseLeave={() => setIsEventsHovered(false)}  onClick={()=>handleCardClick("events")} 
                                  style={{ maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("events") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEventsHovered ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0px', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>50-150 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setIsEateriesHovered(true)} onMouseLeave={() => setIsEateriesHovered(false)} onClick={() =>handleCardClick("eateries")}  
                                style={{ maxWidth: '85%', maxHeight: '100%', ...getCardBorderStyle("eateries") , borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isEateriesHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0%', position: 'relative' }}>
                                      <Typography className={isDarkMode ? "text3" : "text1"}>150+ people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setIsActivitiesHovered(true)} onMouseLeave={() => setIsActivitiesHovered(false)} onClick={() =>handleCardClick("activities")} 
                               style={{ marginTop:'2%' , maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("activities") , borderRadius: '0px',  boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#131212' : '#c2a464', transform: isActivitiesHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0%', position: 'relative' }}>
                                        <Typography className={isDarkMode ? "text3" : "text1"}>Not Sure</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                        <Button  variant="contained" className="buttonText" onMouseEnter={() => setIsButtonHovered(true)} onMouseLeave={() => setIsButtonHovered(false)} style={{width:'18%',height:'45px', marginLeft: '41%', marginTop:'40px', border: '#000000 solid 2px', borderRadius: '20px', backgroundColor: isDarkMode ? '#c2a464' :'#000000' , color: isDarkMode ?  '#000000' : '#c2a464', transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>CONTINUE</Button>

                    </CardContent>
                </Card>
            </Card>
            </ThemeProvider>
        </div>

    );
};

export default EventsForm;
