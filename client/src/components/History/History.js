import React, { Fragment } from 'react'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import styles from './History.module.sass'

export default function History ({ values }) {

    return (
        <div className={styles.display} >
            <Typography variant="h4" component="div" sx={{alignSelf: 'flex-start'}} >Results:</Typography>
            <List className={styles.list} >
                { values.length > 0 ? values.map(word => <ListItem className={styles.item} ><ListItemText primary={word}/></ListItem>) : <ListItem className={styles.item} ><ListItemText primary="Empty..." /></ListItem>}
            </List>
        </div>
    )
}