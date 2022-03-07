/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography'

interface AbsoluteProps {
    click: any
    bg: any
    img: string
    text: string
    type: string
    borderTopRightRadius: any
    borderTopLeftRadius: any
    borderBottomLeftRadius: any
    borderBottomRightRadius: any
}

const Absolute: React.FC<AbsoluteProps> = (props) => {
    return (
        <>
            <Box  
                sx={{
                    "&:hover":{ bgcolor:"#FFEEDE"}, 
                    cursor:"pointer",
                    transition:".3s ease",
                    borderTopRightRadius:props.borderTopRightRadius, 
                    borderTopLeftRadius:props.borderTopLeftRadius, 
                    borderBottomLeftRadius: props.borderBottomLeftRadius, 
                    borderBottomRightRadius:props.borderBottomRightRadius
                }}
            >
                <Box 
                    id={props.type}
                    onClick={()=>props.click(event)}
                    border="1px solid #E0E0E0"
                    sx={{
                        borderTopRightRadius:props.borderTopRightRadius, 
                        borderTopLeftRadius:props.borderTopLeftRadius, 
                        borderBottomLeftRadius: props.borderBottomLeftRadius, 
                        borderBottomRightRadius:props.borderBottomRightRadius
                        
                    }}
                    width="100%"
                    height="100%"
                    bgcolor={props.bg}
                    display="flex" 
                    flexDirection="column"                 
                    justifyContent="center" 
                    alignItems="center" 
                    padding={{xs:"20px 0", md:"54px 0"}}
                    textAlign="center"
                >
                    <Box width={{xs:"50px"}} >
                        <img style={{width:"100%"}} src={props.img} alt="" />
                    </Box>
                    <Typography
                        fontWeight="600"
                        fontSize={{xs:"14px", md:"24px"}}
                    > 
                        {props.text}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Absolute;