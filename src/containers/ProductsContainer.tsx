import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Products from '../components/Products/Products';
import styles from '../components/CustomBtn/CustomBtn.module.css'


const products = [ 
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Гель для душа",
        price: "222, 000 сум",
        img: "https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
]

const ProductsContainer = (props: {onClick: any} ) => {
    
    return (
        <>
            <Box maxWidth="1350px" display="flex" alignItems={{xs:"center",lg:"start"}} flexDirection="column" margin="0 auto">
                <Typography
                    textAlign={{xs: "center", mdP: "left"}}
                    fontSize={{xs: "20px", mdP: "24px"}}
                    fontWeight="600"
                    color="#BC8462"
                    mb="8px"
                >
                    Окрашивание волос
                </Typography>
                <Typography
                    textAlign={{xs: "center", mdP: "left"}}
                    fontSize={{xs: "35px", mdP: "48px"}}
                    fontWeight="600"
                    color="#000"
                    mb="18px"
                >
                    Наша продукция
                </Typography>
                <Box 
                    sx={{
                        display:"flex",
                        justifyContent: {xs: "center", lg: "flex-start"},
                        alignItems: {xs: "center", mdP: "flex-start"},
                        gap:"20px",
                        flexWrap: "wrap",
                        marginTop:"37px"
                    }}
                >
                    {products.map((item, idx) => (
                        <Products
                            key={idx}
                            img={item.img}
                            title={item.title} 
                            price={item.price}
                        />
                    ))}
                </Box>
                
                <Box sx={{
                    display: {xs: "flex", mdP: "block"},
                    justifyContent: {xs: "center", lg: "flex-start"},
                    alignItems: {xs: "center", mdP: "flex-start"},
                    marginTop: "38px"
                }}>
                    <Button 
                        sx={{marginTop:"25px", width:"291px"}}
                        className={styles.btn} 
                        variant="outlined"
                        onClick={props.onClick}
                    >
                        Позвонить нам
                    </Button> 
                </Box>   
            </Box>
        </>
    );
};

export default ProductsContainer;