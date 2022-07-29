import { search, clean as currentClean } from './currentSlice'
import { add, remove } from './historySlice'
import { update, clean as lastClean } from './lastSlice'

describe('Action Creators', () => {
    it('Should return an action with "type" property equal to "current/search" and "payload" property equal to the argument received as parameter.', () => {
        expect(search('yabba')).toEqual(expect.objectContaining({
            type: 'current/search',
            payload: 'yabba'
        }))
    })

    it('Should return an action with "type" property equal to "current/clean".', () => {
        expect(currentClean()).toEqual(expect.objectContaining({
            type: 'current/clean'
        }))
    })

    it('Should return an action with "type" property equal to "history/add" and "payload" property equal to the argument received as parameter.', () => {
        expect(add('dabba')).toEqual(expect.objectContaining({
            type: 'history/add',
            payload: 'dabba'
        }))
    })

    it('Should return an action with "type" property equal to "history/remove".', () => {
        expect(remove()).toEqual(expect.objectContaining({
            type: 'history/remove'
        }))
    })

    it('Should return an action with "type" property equal to "last/update" and "payload" property equal to the argument received as parameter.', () => {
        expect(update('doo')).toEqual(expect.objectContaining({
            type: 'last/update',
            payload: 'doo'
        }))
    })

    it('Should return an action with "type" property equal to "last/clean".', () => {
        expect(lastClean()).toEqual(expect.objectContaining({
            type: 'last/clean'
        }))
    })
})