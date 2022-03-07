import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Services from '../components/Services/Services';

const services = [
    {
        service: "Услуги",
        title: "Маникюр",
        subtitle: "Что входит в “Маникюр”",
        price: "222, 000 сум",
        list: "Лучший в мире маник",
        img: "https://images.unsplash.com/photo-1646292158826-43c33021c6d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
    },
    {
        service: "Услуги",
        title: "Маникюр",
        subtitle: "Что входит в “Маникюр”",
        price: "222, 000 сум",
        list: "Лучший в мире маник",
        img: "https://images.unsplash.com/photo-1646292158826-43c33021c6d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
    },
    {
        service: "Услуги",
        title: "Маникюр",
        subtitle: "Что входит в “Маникюр”",
        price: "222, 000 сум",
        list: "Лучший в мире маник",
        img: "https://images.unsplash.com/photo-1646292158826-43c33021c6d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
    }
]

const ServicesContainer = () => {
    
    return (
        <>
            <Box  maxWidth="1350px" margin="0 auto" textAlign={{xs:"center", lg:"unset" }} >
                <Typography
                    fontSize={{xs:"16px", smP:"20px", md:"24px"}}
                    fontWeight="600"
                    color="#BC8462"
                    mb="8px"
                >
                    Большой спектр косметических услуг
                </Typography>

                <Typography
                    fontSize={{xs:"27px", md:"48px"}}
                    fontWeight="600"
                    color="#000"
                >
                    Популярно у клиенток
                </Typography>
                <Box marginTop="37px" display="flex" gap="20px" flexWrap="wrap" justifyContent={{xs:"center", lg:"unset" }} >
                    {services.map((item, idx) => (
                        <Services 
                            key={idx}
                            service={item.service} 
                            list={item.list} 
                            title={item.title} 
                            price={item.price} 
                            subtitle={item.subtitle} 
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        display:"flex",
                        justifyContent:"center", 
                        alignItems:"center",
                        margin: "70px 0"
                    }}
                >
                    <a href="" style={{fontSize: "20px", fontWeight: "600", color: "#BC8462"}}>
                        И еще 48 услуг
                    </a>
                </Box>
            </Box>
        </>
    );
};

export default ServicesContainer;