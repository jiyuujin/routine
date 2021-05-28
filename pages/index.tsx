import React from 'react'
import styles from '../static/Home.module.scss'
import { useRecoilState } from 'recoil'
import { itemsState, pageState } from '../store'

import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

import { useRecoilValueReplayLoadable } from '../lib/StoreData'

export default function Home() {
    const itemsLoadable = useRecoilValueReplayLoadable(itemsState)
    const items = itemsLoadable.getLastResolvedValue()
    const [, setPage] = useRecoilState(pageState)

    const filteredMessage = (text: string) => {
        return text.split('<http')[0]
    }

    const handlePaginate = async (newPage: number) => {
        setPage(newPage)
    }

    return (
        <>
            <SEO />
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.grid}>
                        {items?.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    href={item.url}
                                    className={styles.card}
                                    aria-pressed="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {filteredMessage(item.message)}
                                </a>
                            )
                        })}
                    </div>
                    <Pagination
                        sum={200}
                        per={20}
                        onChange={(e) => handlePaginate(e.page)}
                    />
                </main>
            </div>
        </>
    )
}
