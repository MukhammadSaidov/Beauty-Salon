/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography'
import faqData from "./api/faq.json"



interface FaqProps {
    askBtn: any
}

const Faq: React.FC<FaqProps> = (props) => {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            maxWidth="1350px" 
            margin="0 auto" 
            alignItems={{xs:"center", lg:"unset"}}
            justifyContent={{xs:"center", lg:"unset"}}
        >
            <Typography 
                color="#000"
                fontSize={{xs:"27px", md:"48px"}}
            >
                Часто задаваемые вопросы
            </Typography>
            <Box 
                display="flex" 
                flexDirection={{xs:"column", lg:"row"}}  
                marginTop="57px"  
            >
                <Box display="flex" alignItems="center" width={{xs:"100%", sm:"400px", smP:"500px", md:"700px", lg:"900px"}} margin="0 auto" >
                    <img 
                        style={{width:"100%"}}
                        src="/main/oplata.png" 
                        alt="" 
                    />
                </Box>
                <Box
                    display="flex" 
                    flexWrap="wrap"
                    sx={{gridGap:"20px"}}
                    alignItems={{xs:"start", lg:"unset"}}
                    justifyContent={{xs:"center", lg:"unset"}}
                >
                    {faqData.map((item: any, idx) => 
                        <Box
                            key={idx}
                            display="flex" 
                            flexDirection="column"
                            width={{xl:"400px",lg:"360px",md:"320px", xs:"90vw"}}
                            sx={{gridGap:"15px"}}
                            marginBottom="30px"
                        >
                        <Typography
                            fontSize={{xs:"18px", md:"22px"}}
                            color="#BC8462"
                            fontWeight="700"

                        >
                            {item.question}
                        </Typography>
                        <Typography
                            fontSize={{xs:"16px", md:"18px"}}
                            color=" rgba(0, 0, 0, 0.55);"
                            fontWeight="700"

                        >
                            {item.answer}
                        </Typography>
                    </Box>
                    )}
                <Box>
                    {props.askBtn}
                </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Faq;