import React, { useState } from 'react'
import styles from './SearchBar.module.sass'
import { Button, TextField } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { search, revert } from '../../reducer/currentSlice'

export default function SearchBar () {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [word, setWord] = useState({ word: '' })

  function handleChange (e) {
    e.preventDefault()
    setWord({ word: e.target.value })
  }

  async function handleClick (e) {
    e.preventDefault()
    const value = word.word
    dispatch(search(value))
    dispatch(revert(value))
    setWord({ word: '' })
  }

  function validateClick (wrd) {
    if (wrd.word === '') return false
    return true
  }

  return (
    <div className={styles.display}>
      <TextField name='search' value={word.word} onChange={(e) => handleChange(e)} size='small' sx={{ marginRight: '1.5rem', backgroundColor: theme.palette.background.main, borderRadius: '5%' }} />
      {validateClick(word) ? <Button onClick={(e) => handleClick(e)} variant='contained' size='small' color='secondary'>Send</Button> : <Button onClick={(e) => handleClick(e)} variant='contained' size='small' color='secondary' disabled>Send</Button>}
    </div>
  )
}
