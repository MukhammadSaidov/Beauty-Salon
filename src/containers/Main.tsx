/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Absolute from '../components/AbsoluteFilter';
import Header from '../components/Header';
import ApplicationModal from '../components/Modal';
import Faq from './FAQ';
import ProductsContainer from './ProductsContainer';
import ServicesContainer from './ServicesContainer';
import styles from '../components/CustomBtn/CustomBtn.module.css'
import Footer from '../components/Footer';
import TeamContainer from './TeamContainer';


interface MainProps {
    
}

const Main: React.FC<MainProps> = () => {

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    
    const [name, setName] = React.useState('');
    
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    
    const [number, setNumber] = React.useState('');
    
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    };

    const [text, setText] = React.useState('');
    
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    // Modal2

    const [open2, setOpen2] = React.useState(false);
    const handleOpenModal2 = () => setOpen2(true);
    const handleCloseModal2 = () => setOpen2(false);

    const [name2, setName2] = React.useState('');
    
    const handleNameChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName2(event.target.value);
    };
    
    const [number2, setNumber2] = React.useState('');
    
    const handleNumberChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber2(event.target.value);
    };


    // Select
    const [selectValue, setSelectValue] = useState('');

    const handleSelectChange = (e: any) => {
        setType(e.target.value)
    }

    // Filter
    const [type, setType] = useState("color");


    // Scroll
    

    const myRef1:React.MutableRefObject<any> = useRef()

    function smoothScroll1() {
        myRef1.current.scrollIntoView({ behavior: 'smooth'})
    }

    const myRef2:React.MutableRefObject<any> = useRef()

    function smoothScroll2() {
        myRef2.current.scrollIntoView({ behavior: 'smooth'})
    }

    const myRef3:React.MutableRefObject<any> = useRef()

    function smoothScroll3() {
        myRef3.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (

        

        <>  
            <Box sx={{backgroundImage:"url(/main/bg-black.svg)", bgcolor:"#10181E"}} >
                <Box 
                    maxWidth={{xs:"90vw", mdP:"1350px"}} 
                    margin="0 auto" 
                    padding="20px 0"
                    position="relative"
                >


                    <Header ref1={smoothScroll1} ref2={smoothScroll2} ref3={smoothScroll3} ig={''} tg={''} modal={handleOpenModal2} />


                    <Box display="flex" flexDirection={{xs:"column", mdP:"row"}} maxWidth={{xs:"100%", md:'85%'}} margin="0 auto" >
                        <Box width={{xs:"40%", md:"60%", mdP:"100%"}} display={{xs:"none", mdP:"block"}} >
                            <img style={{width:"100%", objectFit:"fill"}} src="/main/oplata.png" alt="OPLATA" />
                        </Box>
                        <Box display="flex" padding={{xs:"70px 0 300px 0"}} flexDirection="column" >
                            <Typography 
                                color="#FBFDFF"
                                fontWeight="700"
                                fontSize={{xs:"32px", md:"62px"}} 
                                fontFamily="Cormonant"
                            >
                                Make your look even More Perfetct
                            </Typography>
                            <Typography 
                                color="rgba(251, 253, 255, 0.55);"
                                fontWeight="600"
                                fontSize={{xs:"16px", md:"24px"}} 
                                maxWidth="250px"
                            >
                                Make your look even More Perfetct
                            </Typography>
                            
                            <Box 
                                marginTop="20px"
                                position="relative"
                                width={{md:"300px", xs:"250px"}}
                                height={{md:"75px", xs:"50px"}}
                            >
                                <Box
                                    top="-5px"
                                    left="-5px"
                                    position="absolute"    
                                    bgcolor="#BC8462"
                                    width="100%"
                                    height="100%"
                                >   
                                </Box>
                                <Button
                                onClick={handleOpenModal}
                                sx={{
                                    width:"100%",
                                    height:"100%",
                                    bgcolor:"#fff", 
                                    opacity:".5",
                                    border:"2px solid black",
                                    textTransform:"unset",
                                    borderRadius:"0",
                                    fontWeight:"700",
                                    "&:hover": {bgcolor:"#fff", opacity:".6",},
                                    color:"#000",
                                    fontSize:"18px"
                                }}
                                >
                                    Записаться к нам
                                </Button>
                            </Box>
                        </Box>  
                    </Box>
                    <Grid
                        position="absolute" 
                        boxShadow="3" 
                        bottom={{md:"-202px", xs:"-132px"}} 
                        display="grid" 
                        container 
                        gridTemplateColumns={{md:"repeat(3, 1fr)", xs:"repeat(2, 1fr)"}} 
                        borderRadius="20px"
                        bgcolor="#fff" 
                    >
                        <Absolute 
                            type="color"
                            img="/main/hair-shape.svg"
                            text="Тонирование и окрашивание"
                            click={() => setType("color")}
                            bg={type == "color" ? "#BC8462" : ""} 
                            borderTopRightRadius={''} 
                            borderTopLeftRadius={'20px'} 
                            borderBottomLeftRadius={''} 
                            borderBottomRightRadius={''}                       
                        />
                        <Absolute 
                            type="make-up"
                            img="/main/spray.svg"
                            text="Make-up"
                            click={() => setType("make-up")}
                            bg={type == "make-up" ? "#BC8462" : ""} 
                            borderTopRightRadius={{md:'0px', xs:"20px"}} 
                            borderTopLeftRadius={''} 
                            borderBottomLeftRadius={''} 
                            borderBottomRightRadius={''}                       
                        />
                        <Absolute 
                            type="hairdryer"
                            img="/main/hairdryer.svg"
                            text="Визаж"
                            click={() => setType("hairdryer")}
                            bg={type == "hairdryer" ? "#BC8462" : ""} 
                            borderTopRightRadius={{md:'20px', xs:""}} 
                            borderTopLeftRadius={''} 
                            borderBottomLeftRadius={''} 
                            borderBottomRightRadius={''}                        
                        />
                        <Absolute 
                            type="nails"
                            img="/main/long-hair.svg"
                            text="Ногтевой сервис"
                            click={() => setType("nails")}
                            bg={type == "nails" ? "#BC8462" : ""} 
                            borderTopRightRadius={''} 
                            borderTopLeftRadius={''} 
                            borderBottomLeftRadius={{md:'20px', xs:""}} 
                            borderBottomRightRadius={''}                       
                        />
                        <Absolute 
                            type="laminating"
                            img="/main/curled-hair.svg"
                            text="Ламинирование ресниц"
                            click={() => setType("laminating")}
                            bg={type == "laminating" ? "#BC8462" : ""} 
                            borderTopRightRadius={''} 
                            borderTopLeftRadius={''} 
                            borderBottomLeftRadius={{md:'0px', xs:"20px"}} 
                            borderBottomRightRadius={''}                     
                          />
                        <Absolute 
                            type="keratin"
                            img="/main/woman-hair.svg"
                            text="Кератин"
                            click={() => setType("keratin")}
                            bg={type == "keratin" ? "#BC8462" : ""} 
                            borderTopRightRadius={''} 
                            borderTopLeftRadius={''} 
                            borderBottomLeftRadius={''} 
                            borderBottomRightRadius={'20px'}                       
                        />
                    </Grid>
                </Box>
            </Box>
            <Box 
                sx={{backgroundImage:"url(/main/bg-gray.svg)", bgcolor:"#fff"}} 
                padding={{md:"332px 0 0 0", xs:"180px 0 0 0"}}
            >
                <Box ref={myRef1} display="flex" justifyContent="center" padding="0 20px" >
                    <ProductsContainer
                        onClick={handleOpenModal2}
                    />
                </Box  >
                    <Box ref={myRef2} height={{md:"100px", xs:"50px"}} ></Box>
                <Box padding="20px 10px" >
                    <ServicesContainer/>
                </Box>
                <Box padding="20px 10px"  >

                    <Faq
                        askBtn={
                            <Button 
                                sx={{marginTop:"25px", width:"291px"}}
                                className={styles.btn} 
                                variant="outlined"
                                onClick={handleOpenModal2}
                                
                            >
                                Задать свой вопрос
                            </Button>
                        }
                    />
                </Box>
                <Box 
                    ref={myRef3}
                    sx={{backgroundImage:"url(/main/bg-black.svg)", bgcolor:"#10181E", backgroundSize:"cover" }} 
                    padding="107px 0"
                >
                    <TeamContainer
                        
                    />
                </Box>
            <Footer/>
            </Box>































            <ApplicationModal
                open={open}
                handleCloseModal={handleCloseModal}
                changeName={handleNameChange}
                cahngeNumber={handleNumberChange}
                selectValue={type}
                handleChangeSelect={handleSelectChange}
                type={false}
                open2={undefined} 
                handleTextAreaChange={handleTextChange}            
            />
            <ApplicationModal
                open2={open2}
                handleCloseModal={handleCloseModal2}
                changeName={handleNameChange2}
                cahngeNumber={handleNumberChange2}
                selectValue=""
                handleChangeSelect=""
                type={true}
                open={""} 
                handleTextAreaChange={""}            
            />
        </>
    );
};

export default Main; 