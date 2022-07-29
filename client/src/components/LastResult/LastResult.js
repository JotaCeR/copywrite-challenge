import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import styles from './LastResult.module.sass'

export default function LastResult ({ value }) {

    return (
        <div className={styles.display} >
            <Typography variant='h4' component='div' sx={{alignSelf: 'flex-start'}} >Last Result:</Typography>
            <Typography className={styles.field} variant='subtitle1' component='div'>{value ? value : 'Empty...'}</Typography>
        </div>
    )
}