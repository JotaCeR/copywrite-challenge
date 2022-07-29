import currentReducer from './currentSlice'
import historyReducer from './historySlice'
import lastReducer from './lastSlice'

import { search, clean as currentClean } from './currentSlice'
import { add, remove } from './historySlice'
import { update, clean as lastClean } from './lastSlice'

describe('Current Reducer', () => {
    const initialState = {
        word: null,
        reverse: null
    }

    it('Should return the proper initial state.', () => {
        expect(currentReducer(undefined, {})).toEqual(expect.objectContaining({
            word: null,
            reverse: null
        }))
    })

    it('Should add the payload received in the "word" property.', () => {
        expect(currentReducer(initialState, search('monster')).toEqual(expect.objectContaining({
            word: 'monster'
        })))
    })

    it('Should add the value received after calling the API in the "reverse" property.', () => {
        expect(currentReducer(initialState, search('monster')).toEqual(expect.objectContaining({
            reverse: 'retsnom'
        })))
    })

    it('Should reset the state values to "null".', () => {
        expect(currentReducer({word: 'monster', reverse: 'retsnom'}, currentClean())).toEqual(expect.objectContaining({
            word: null,
            reverse: null
        }))
    })
})

describe('History Reducer', () => {
    const initialState = {
        values: []
    }

    it('Should return the proper initial state.', () => {
        expect(historyReducer(undefined, {})).toEqual(expect.objectContaining({
            values: []
        }))
    })

    it('Should add the payload received to the Array "values".', () => {
        expect(historyReducer(initialState, add('McQueen'))).toEqual(expect.objectContaining({
            values: ['McQueen']
        }))
    })

    it('Should remove the last value on the Array "values".', () => {
        expect(historyReducer({values: ['McQueen', 'Francesco', 'Sally', 'Mate']}, remove())).toEqual(expect.objectContaining({
            values: ['McQueen', 'Francesco', 'Sally']
        }))
    })
})

describe('Last Reducer', () => {
    const initialState = {
        word: null
    }

    it('Should return the proper initial state.', () => {
        expect(lastReducer(undefined, {})).toEqual(expect.objectContaining({ word: null }))
    })

    it('Should update the "word" property with the payload.', () => {
        expect(lastReducer(initialState, update('school'))).toEqual(expect.objectContaining({
            word: 'school'
        }))
    })

    it('Should reset state value to "null".', () => {
        expect(lastReducer({ word: 'college' }, lastClean())).toEqual(expect.objectContaining({
            word: null
        }))
    })
})