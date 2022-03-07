/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Link } from '@mui/material';
import React from 'react';

interface HeaderProps {
    ref1: any
    ref2: any
    ref3: any
    ig: string
    tg: string
    modal: any
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <Box display="flex" flexWrap="wrap" sx={{gridGap:"20px"}} justifyContent="space-between" >
                <Box display="flex" alignItems="center" sx={{gridGap:{xs:"10px", md:"35px"}}} >
                    <Typography 
                        color="#FBFDFF" 
                        fontWeight="800" 
                        fontSize={{xs:"20px", md:"36px"}} 
                    > 
                        beauty.
                    </Typography>    
                    <Box onClick={props.ref1} >
                        <Typography 
                            fontSize={{xs:"14px", md:"18px"}} 

                            color="#FBFDFF"
                            sx={{cursor:"pointer", }}   
                        >
                            Продукция
                        </Typography>
                    </Box>
                    <Typography 
                        fontSize={{xs:"14px", md:"18px"}} 
                        color="#FBFDFF"
                        sx={{cursor:"pointer"}}
                        onClick={props.ref2} 
                    >
                        Услуги
                    </Typography>
                    <Typography 
                        color="#FBFDFF"
                        fontSize={{xs:"14px", md:"18px"}} 
                        sx={{cursor:"pointer"}}
                        onClick={props.ref3} 
                    >
                        Команда
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{gridGap:"15px"}} >
                    <Box 

                        onClick={props.modal}
                        display={{xs:"none", mdP:"flex"}}
                        sx={{gridGap:"15px", cursor:"pointer"}}
                        borderRadius="10px" 
                        border="1px solid #FBFDFF" 
                        padding="13px 24px"
                    >

                        <img src="/main/phone.svg" alt="" style={{width:"17px"}} />
                        <Typography color="#FBFDFF" >Перезвоните мне</Typography>
                    </Box>
                    <Box
                        border="1px solid #FBFDFF" 
                        padding="8px 14px"
                        borderRadius="10px" 
                        onClick={props.modal}    
                        display={{mdP:"none", xs:"flex"}}
                    >
                        <img width="100%" height="100%" src="/main/phone.svg" alt="" style={{width:"17px"}} />
                    </Box>
                    

                    <Link href={props.ig} >
                        <img src="/main/ig.svg" alt="" style={{width:"34px"}} />
                    </Link>
                    <Link href={props.tg} >
                        <img src="/main/tg.svg" alt="" style={{width:"34px"}} />
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default Header;