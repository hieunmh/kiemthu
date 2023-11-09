'use client'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import styles from './forms.module.css'


export default function FormsPage(){
    const [inputValue, setInputValue] = useState('')
    const [subMessage, setSubMessage] = useState('')
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Testing Forms</h1>
            <TextField 
                data-test="subscribe-form"
                className={styles.input} 
                label="Email" 
                variant="filled" 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            
            <Button data-test="subscribe-button"  onClick={() => {
                if (inputValue && !inputValue.includes('.com')){
                    setSubMessage(`Invalid email: ${inputValue}!`)
                } else if (inputValue.length){
                    setSubMessage(`Successfully subbed: ${inputValue}!`)
                } else {
                    setSubMessage('fail!')
                }
                setTimeout(() => {
                    setSubMessage('')
                    setInputValue('');
                }, 1500)
            }}
                className='subbutton'
            >
                Subscribe
            </Button>
            {
                subMessage && <p>{subMessage}</p>
            }
        </main>
    )
}