/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Typography } from '@mui/material';

const TeamContainer = () => {
    const teamInfo =  [
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
        {name: "Kate Williams", social: "https://www.instagram.com/", img: "/main/test.png"},
    ]
    return (
        <>
            <Box maxWidth="1350px" margin="0 auto" display="flex" flexDirection="column" justifyContent={{xs:"center", md:"unset"}} alignItems={{xs:"center", md:"unset"}} >
                <Typography
                    textAlign={{xs: "center", lg: "left"}}
                    fontSize={{xs: "20px", mdP: "24px"}}
                    fontWeight="600"
                    color="#BC8462"
                    mb="8px"
                >
                    Лучшие специалисты города
                </Typography>

                <Typography
                    textAlign={{xs: "center", lg: "left"}}
                    fontSize={{xs: "35px", mdP: "48px"}}
                    fontWeight="600"
                    color="#fff"
                >
                    Наша команда мастеров
                </Typography>
                <Box 
                    sx={{
                        marginTop:"60px", 
                        display:"flex",
                        justifyContent: {xs: "center", lg: "flex-start"},
                        alignItems: {xs: "center", mdP: "flex-start"},
                        gap:"20px",
                        flexWrap: "wrap"
                    }}
                >
                    {teamInfo.map((item, idx) => (
                        <TeamComponent
                            key={idx} 
                            name={item.name}
                            img={item.img} 
                            social={item.social} 
                        />
                    ))}
                </Box>   
            </Box>
        </>
    );
};

export default TeamContainer;

type Props = {
    name: string
    img: string
    social: string
}

const TeamComponent = (props: Props) => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                margin="20px 50px"
            >
                <img 
                    style={{
                        objectFit: "cover",
                        width: "216px",
                        height:"216px",
                        borderRadius: "50%"
                    }}
                    src={props.img}
                    alt={props.name}
                />
                <Typography
                    margin="15px 0"
                    textAlign="center"
                    fontSize="20px"
                    fontWeight="600"
                    color="#fff"
                >
                    {props.name}
                </Typography>

                <Box display="flex" justifyContent="center" alignItems="center">
                    <a target={'_blank'} href={props.social} rel="noreferrer">
                        <img 
                            src="/instagram.svg"
                            alt={props.name}
                        />    
                    </a>
                </Box>
            </Box>
        </>
    )
}