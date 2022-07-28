import API from '../../config/api/index'

export default async function reverseWord (word) {
    try {
        const { data } = await API.get(`/iecho?text=${word}`)

        return data.text
    } catch (e) {
        console.error(e)
        return 'Fatal Error'
    }
};