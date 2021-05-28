import React, { useContext, useRef, useState, useEffect } from 'react'
import styles from '../static/Pagination.module.scss'

import { ColorThemeContext } from '../lib/ColorThemeContext'

interface Props {
    sum: number
    per: number
    onChange: (e: { page: number }) => void
}

const Pagination: React.FC<Props> = (props) => {
    const colorTheme = useContext(ColorThemeContext)
    const isChecked = colorTheme.colorMode === 'dark'

    const isFirstRender = useRef(true)
    const [currentPage, setPage] = useState(1)
    useEffect(() => {
        // 初回レンダリング時はスキップし、変数を更新する
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        props.onChange({ page: currentPage })
    }, [currentPage])

    const totalPage: number = Math.ceil(props.sum / props.per)

    const handleBack = (): void => {
        if (currentPage === 1) {
            return
        }
        setPage(currentPage - 1)
    }

    const handleForward = (): void => {
        if (currentPage === totalPage) {
            return
        }
        setPage(currentPage + 1)
    }

    const handleMove = (page: number): void => {
        setPage(page)
    }

    return (
        <div>
            {totalPage !== 0 && (
                <div
                    className={styles.pager}
                    style={{ background: isChecked ? '#303030' : '#fff' }}
                >
                    <span onClick={() => handleBack()}>&lt;</span>
                    <ul className={styles.pagination}>
                        {[...Array(totalPage).keys()].map((page) => {
                            page++
                            return page === currentPage ? (
                                <li
                                    key={page}
                                    className={styles.active}
                                    aria-pressed="true"
                                    onClick={() => handleMove(page)}
                                >
                                    {page}
                                </li>
                            ) : (
                                <li key={page} onClick={() => handleMove(page)}>
                                    {page}
                                </li>
                            )
                        })}
                    </ul>
                    <span aria-pressed="true" onClick={() => handleForward()}>
                        &gt;
                    </span>
                </div>
            )}
        </div>
    )
}

export default Pagination
