import React, { Fragment } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import ShowResults from '../components/ShowResults/ShowResults'
import styles from './Home.module.sass'

export default function Home () {
  return (
    <div className={styles.display}>
      <SearchBar />
      <ShowResults />
    </div>
  )
}
