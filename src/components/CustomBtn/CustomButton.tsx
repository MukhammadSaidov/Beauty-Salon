import React from 'react';
import styles from './CustomBtn.module.css'
import { Button } from '@mui/material'

type Props = {
    entryBtn: boolean
    onClick: any
    btn: boolean
    entry: string
    button: string
    btnType: any
    fullWidth: boolean
}

const CustomButton = (props: Props) => {
    return (
        <>
            {props.btn == true ?
                <Button 
                    onClick={props.onClick}
                    className={styles.btn} 
                    variant="outlined"
                    type={props.btnType}
                    fullWidth={props.fullWidth}
                >
                    {props.button}
                </Button> : ""
            }

            {props.entryBtn == true ? 
                <Button 
                    className={styles.btnEntry} 
                    variant="outlined"
                >
                    {props.entry}
                </Button> : ""    
            }
        </>
    );
};

export default CustomButton;