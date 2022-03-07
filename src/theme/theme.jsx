import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";


// Create a theme instance.
const theme = createTheme({

  

  typography:{
    fontFamily:[
      'Open Sans', 
    ].join(','),
  },

  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.55)",
    },
    secondary: {
      main:"#003F79"
    },
    error: {
      main: red.A400,
    },
  },

  components:{
    MuiButton:{
      variants:[
        {
          props: {variant: 'contain', color:"secondary.main", },
          style:{
            backgroundColor:"",
            borderRadius:"1px",
            color:"#FFFFFF",
            fontWeight:"00"
          },
        },
        {
          props: {variant: 'outline', color:"secondary"},
          style:{
            backgroundColor:"secondary.main",
            border:"1px solid #003F79",
            borderRadius:"3px",
            color:"#003F79",
            fontWeight:"500"
          }
        }
      ]
    }
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      smP:600,
      md: 720,
      mdP: 920,
      mdPP:1080,
      lg: 1280,
      lgP: 1560,
      lgPP:1720,
      xl: 1920,
      twoK:2400,
      threeK:3072,
      fourK:3820,
    },
  },
});

export default theme;
