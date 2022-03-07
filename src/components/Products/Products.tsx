/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
    img: string
    title: string
    price: string
}
const Products = (props: Props) => {
    return (
        <>
            <Box display="flex" width={{xs:"93vw", sm:"300px"}} flexDirection="column" sx={{bgcolor: "#F1F6FA"}}>
                <img 
                    style={{width: "100%"}} 
                    src={props.img}
                    alt={props.title} 
                />
                
                <Box sx={{margin: "15px 31px"}}>
                    <Typography
                        fontSize="24px"
                        fontWeight="600"
                        color="#BC8462"
                    >
                        {props.title}
                    </Typography>

                    <Typography
                        fontSize="18px"
                        fontWeight="600"
                        color="#000"
                        marginTop="8px"
                    >
                        {props.price}
                    </Typography>
                </Box>
            </Box>   
        </>
    );
};

export default Products;