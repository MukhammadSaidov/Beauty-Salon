/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField, MenuItem, Select } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styles from './CustomBtn/CustomBtn.module.css'

const style = {
  position: 'absolute' as 'absolute',
  display:"flex",
  flexDirection:"column",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"90vw", md:"600px" },
  bgcolor: '#fff',
  boxShadow: 24,
  padding: {md:"26px 36px", xs:"11px 12px"},
  borderRadius:"20px"
};

interface ApplicationModal{
  open: any,
  open2: any,
  handleCloseModal:any,
  changeName:any,
  cahngeNumber:any,
  selectValue:any,
  handleChangeSelect:any,
  handleTextAreaChange: any,
  type: boolean
}
const ApplicationModal = (props: ApplicationModal) => {

    return (
      <div>
        <Modal
          open={props.type == false ? props.open : props.open2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box  
                display="flex"
                justifyContent="end"
            >
                <IconButton onClick={props.handleCloseModal} >
                    <img src="/main/X.svg" alt="" />
                </IconButton>
            </Box>
            <Box  
                padding={{md:"0 40px 40px 40px", xs:"0 10px 10px 10px"}}
            >
                <Typography
                    fontFamily="Cormorant"
                    fontSize={{md:"52px", xs:"25px"}}
                    fontWeight="600"
                    marginBottom="20px"
                >
                  {props.type == false ? "Оставить заявку" : "Перезвоните мне"}
                </Typography>
                <form action="" style={{display:"flex", flexDirection:"column", gridGap:"15px" }} >
                  <TextField
                    label="Имя и фамилия"
                    fullWidth
                    required                    
                    sx={{background: '#E0E0E0'}}
                    onChange={props.changeName}                            
                  />
                  <TextField
                    label="Ваш номер телефона"
                    fullWidth
                    required
                    sx={{background: '#E0E0E0'}}
                    onChange={props.cahngeNumber}                            
                  />
                  <Select
                    sx={{display: props.type == false ? "block" : "none", background: '#E0E0E0'}}
                    value={props.selectValue}
                    defaultValue={props.selectValue}
                    onChange={props.handleChangeSelect}
                  >
                    <MenuItem value="color">Тонирование и окрашивание</MenuItem>
                    <MenuItem value="make-up">Make-up</MenuItem>
                    <MenuItem value="hairdryer">Визаж</MenuItem>
                    <MenuItem value="nails">Ногтевой сервис</MenuItem>
                    <MenuItem value="laminating">Ламинирование ресниц</MenuItem>
                    <MenuItem value="keratin">Кератин</MenuItem>
                  </Select>
                  <Box display={props.type == false ? "block" : "none"} height={{xs:"100px", md:"200px"}} >
                    <TextareaAutosize
                      placeholder="Сообщение или пожелания"  
                      onChange={props.handleTextAreaChange}                  
                      style={{ 
                        width: "100%", 
                        padding:"10px", 
                        height:"100%", 
                        resize:"none", 
                        border:"none", 
                        background: '#E0E0E0', 
                        fontSize:"18px", 
                        display: props.type == false ? "block" : "none"
                      }}
                    />                  
                  </Box>
                  <Button 
                    className={styles.btn} 
                    variant="outlined"
                    type="submit"
                    fullWidth
                  >
                    Отправить
                </Button>    
                </form>
            </Box>
          </Box>
        </Modal>
      </div>
    );
}

export default ApplicationModal