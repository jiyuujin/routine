import { atom, selector } from 'recoil'
import { fetchData } from '../lib/AsyncData'

export const itemsState = selector({
    key: 'topPage/items',
    async get({ get }) {
        const page = get(pageState)
        return await fetchData(page)
    },
})
export const pageState = atom({
    key: 'topPage/page',
    default: 1,
})
