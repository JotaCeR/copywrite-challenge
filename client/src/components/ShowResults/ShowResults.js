import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../../reducer/historySlice'
import { update } from '../../reducer/lastSlice'
import LastResult from '../LastResult/LastResult'
import History from '../History/History'
import styles from './ShowResults.module.sass'

export default function ShowResults () {
    const dispatch = useDispatch()
    
    let current = useSelector(state => state.current)
    let last = useSelector(state => state.last.word)
    let history = useSelector(state => state.history.values)

    useEffect(() => {
        if (history.length >= 10) dispatch(remove())
        dispatch(add(last))
        dispatch(update(current.reverse))
    }, [current.word]);


    return (
        <div className={styles.display} >
            <LastResult value={last} />
            <History values={history} />
        </div>
    )
}