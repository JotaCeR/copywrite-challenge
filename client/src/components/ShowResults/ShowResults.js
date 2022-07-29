import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, clean as hClean } from '../../reducer/historySlice'
import { update, clean as lClean } from '../../reducer/lastSlice'
import { clean as cClean } from '../../reducer/currentSlice'
import LastResult from '../LastResult/LastResult'
import History from '../History/History'
import styles from './ShowResults.module.sass'

export default function ShowResults () {
  const dispatch = useDispatch()

  const current = useSelector(state => state.current)
  const last = useSelector(state => state.last.word)
  const history = useSelector(state => state.history.values)

  useEffect(() => {
    dispatch(update(current.reverse))
  }, [current])

  useEffect(() => {
    if (history.length >= 10) dispatch(remove())
    dispatch(add(last))
  }, [last])

  useEffect(() => {
    dispatch(cClean())
    dispatch(lClean())
    dispatch(hClean())
  }, [dispatch])

  return (
    <div className={styles.display}>
      <LastResult value={last} />
      <History values={history} />
    </div>
  )
}
