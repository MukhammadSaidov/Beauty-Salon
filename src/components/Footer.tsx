/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React from 'react';

interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <Box  
            display="flex"
            justifyContent="space-between"
            padding="20px"
            bgcolor="#fff"
            maxWidth="1542px"
            margin="0 auto"
        >
            <Typography
                color="#000"
                fontSize={{md:"16px", xs:"12px"}}
                lineHeight="20px"
                fontWeight="600"
            >
                “Gulchehra Salon” 2016-2022 год
            </Typography>
            <Box 
                display="flex" 
                alignItems="center"
                sx={{gridGap:"10px"}} 
            >
                
                    <a href="tel:+998662349779" style={{textDecoration:"none"}} >
                        <Typography
                            color="#000"
                            fontSize={{md:"16px", xs:"12px"}}
                            fontWeight="600"
                            lineHeight="20px"
                            >
                                +998 (66) 234-97-79
                        </Typography>
                    </a>
                    <Box width="30px" height="30px" display={{xs:"none", md:"block"}} >
                        <a href="tel:+998662349779" style={{textDecoration:"none", width:"100%", height:"100%"}} >                    
                            <img style={{height:"86%"}} src="/main/phone-bl.svg" alt="" />
                        </a>
                    </Box>
                    <Box width="30px" height="30px" display={{xs:"none", md:"block"}} >
                        <a href="" style={{height:"100%"}} >        
                            <img style={{height:"100%"}} src="/main/ig-bl.svg" alt="" />
                        </a>
                    </Box>
                
            </Box>
        </Box>
    );
};

export default Footer;