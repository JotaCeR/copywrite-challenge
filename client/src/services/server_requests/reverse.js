import API from '../../config/api/index'

export default async function reverseWord (word) {
    const { data } = await API.get(`/iecho?text=${word}`)

    return data.text
};