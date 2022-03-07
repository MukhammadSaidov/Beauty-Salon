import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from '../CustomBtn/CustomBtn.module.css'
import ApplicationModal from '../Modal';


type Props = {
    service: string
    list: string
    title: string
    price: string
    subtitle: string
}

const Services = (props: Props) => {

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

    const [selectValue, setSelectValue] = useState('');

    const handleSelectChange = (e: any) => {
        setType(e.target.value)
    }

    const [type, setType] = useState("color");


    return (
        <>
            <Box 
                width={{xs:"90vw", md:"400px"}}
                sx={{
                    // height: "550px",
                    boxShadow: "-4px 5px 7px rgba(0, 0, 0, 0.2)",
                    borderRadius: "12px",
                    bgcolor: "#FFF",
                    padding: {xs:"10px", md:"35px 36px 35px 30px"}
                }}
            >
                <Box
                    sx={{
                        width: "82px",
                        padding: "10px",
                        bgcolor: "#BC8462",
                        borderRadius: "6px",
                        color: "#fff",
                        margin: "0 auto"
                    }}
                >
                    <Typography 
                        textAlign="center" 
                        fontSize={{xs: "14px", md:"16px"}} 
                        fontWeight="600"
                    >
                        {props.service}
                    </Typography>
                </Box>

                <Typography 
                    fontSize={{xs: "35px", md:"48px"}} 
                    fontWeight="600"
                    textAlign="center" 
                >
                    {props.title}
                </Typography>

                <Typography 
                    fontSize="20px"
                    fontWeight="normal"
                    textAlign="center"
                    color="#6B7075"
                    marginTop="10px"
                >
                    {props.price}
                </Typography>
                
                <Typography 
                    fontSize={{xs: "18px", md:"20px"}} 
                    fontWeight="600"
                    textAlign="center"
                    marginTop="40px"
                >
                    {props.subtitle}
                </Typography>

                <ul style={{
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "center", 
                        alignItems: "center"
                    }}
                >
                    <li style={{
                        fontSize: "20px",
                        textAlign:"center", 
                        color: "#6B7075",
                        listStyle: "inside"
                    }}>
                        {props.list}
                    </li>
                </ul>
                <Button 
                    fullWidth
                    className={styles.btn} 
                    variant="outlined"
                    onClick={handleOpenModal}
                >
                    Записаться
                </Button>   
            </Box>
            <ApplicationModal
                handleTextAreaChange={handleTextChange}
                open={open}
                handleCloseModal={handleCloseModal}
                changeName={handleNameChange}
                cahngeNumber={handleNumberChange}
                selectValue={type}
                handleChangeSelect={handleSelectChange}
                type={false} 
                open2={undefined}            
            />
        </>
    );
};

export default Services;