import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button , Box} from "@mui/material";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import light from "./images/sun.png";
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

function EventsCount() {
    const [isA1, setA1] = useState(false);
    const [isA2, setA2] = useState(false);
    const [isA3, setA3] = useState(false);
    const [isA4, setA4] = useState(false);
    const [isB1, setB1] = useState(false);
    const [isB2, setB2] = useState(false);
    const [isB3, setB3] = useState(false);
    const [isB4, setB4] = useState(false);
    const [isB5, setB5] = useState(false);
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
            ? { border: isDarkMode ? '#f5f5f5 solid 6px' : '#000000 solid 3px' }
            : {};
    };

    return (
        <div>
              <ThemeProvider theme={theme}>
            <Card style={{ background: isDarkMode ? '#28282B' : '#d4d4d4', padding: '1.7%', borderRadius: '0px'}}>
                <Card style={{ position: 'relative', zIndex: 1,height:'100%', width: "85%", margin: '0 auto', marginTop: '6px', backgroundColor: isDarkMode ? '#080806' : '#f5f5f5' }}>
                    <CardContent>
                    <Button style={{ position: 'absolute', top: '20px', right: '10px', width: "30px", height: "30px",paddingBottom:'50px' , paddingTop:'10px'}} onClick={(e) => e.stopPropagation()}>
                    <img src={isDarkMode ? light : dark} style={{ width: "35px", height: "35px" }} onClick={toggleDarkMode}/>
                </Button>
                        <Typography style={{paddingTop:'3%',textAlign:'center'}} className={isDarkMode ? "Header1" : "Header2"}>How many events are you planning to create?</Typography>
                        <Grid container style={{ marginTop: '0.5%',  justifyContent: 'center'}} spacing={3}>
                        <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setA1(true)} onMouseLeave={() => setA1(false)}  onClick={()=>handleCardClick("A1")} 
                                  style={{ width: '160px', height: '160px',  ...getCardBorderStyle("A1") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isA1 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'60px' }}>
                                        <Typography style={{textAlign:'center', fontSize:''}} className={isDarkMode ? "text3" : "text1"}>Only 1</Typography>
                                   </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setA2(true)} onMouseLeave={() => setA2(false)}  onClick={()=>handleCardClick("A2")} 
                                  style={{ width: '160px', height: '160px',  ...getCardBorderStyle("A2") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isA2 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'60px' }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>2/10</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setA3(true)} onMouseLeave={() => setA3(false)}  onClick={()=>handleCardClick("A3")} 
                                  style={{ width: '160px', height: '160px',  ...getCardBorderStyle("A3") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isA3 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'60px' }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>10+</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setA4(true)} onMouseLeave={() => setA4(false)}  onClick={()=>handleCardClick("A4")} 
                                  style={{ width: '160px', height: '160px',  ...getCardBorderStyle("A4") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isA4 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'60px' }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>Not Sure</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                           
                        </Grid>

                        <Typography style={{paddingTop:'3%', textAlign:'center'}} className={isDarkMode ? "Header1" : "Header2"}>How big is your event?</Typography>
                        <Grid container style={{ marginTop: '0.5%',  justifyContent: 'center'}} spacing={3}>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setB1(true)} onMouseLeave={() => setB1(false)}  onClick={()=>handleCardClick("B1")} 
                                  style={{ width: '160px', height: '160px',  ...getCardBorderStyle("B1") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isB1 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'45px' }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>25 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setB2(true)} onMouseLeave={() => setB2(false)}  onClick={()=>handleCardClick("B2")} 
                                  style={{ width: '160px', height: '160px',  ...getCardBorderStyle("B2") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isB2 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ position: 'relative', paddingTop:'45px'  }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>25-50 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setB3(true)} onMouseLeave={() => setB3(false)}  onClick={()=>handleCardClick("B3")} 
                                  style={{width: '160px', height: '160px',  ...getCardBorderStyle("B3") ,borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isB3 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ position: 'relative', paddingTop:'45px'  }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>50-150 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setB4(true)} onMouseLeave={() => setB4(false)} onClick={() =>handleCardClick("B4")}  
                                style={{width: '160px', height: '160px', ...getCardBorderStyle("B4") , borderRadius: '40px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isB4 ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ position: 'relative' , paddingTop:'45px' }}>
                                      <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>150+ people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} >
                                <Card className="card" onMouseEnter={() => setB5(true)} onMouseLeave={() => setB5(false)} onClick={() =>handleCardClick("B5")} 
                               style={{width: '160px', height: '160px', maxHeight: '100%',  ...getCardBorderStyle("B5") , borderRadius: '40px',  boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: isDarkMode ? '#fceebf' : '#4880e2', transform: isB5 ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'60px' }}>
                                        <Typography style={{textAlign:'center'}} className={isDarkMode ? "text3" : "text1"}>Not Sure</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                        <Button  variant="contained" className="buttonText" onMouseEnter={() => setIsButtonHovered(true)} onMouseLeave={() => setIsButtonHovered(false)} style={{width:'18%',height:'45px', marginLeft: '41%', marginTop:'40px', border: isDarkMode?'#000000 solid 2px' : '#f5f5f5 solid 2px', borderRadius: '20px', backgroundColor: isDarkMode ? '#fe3044' :'#fe3044' , color: isDarkMode ?  '#000000' : '#f5f5f5', transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                            <Link to={"/eventsForm"}>CONTINUE</Link></Button>

                    </CardContent>
                </Card>
            </Card>
            </ThemeProvider>
        </div>

    );
};

export default EventsCount;
