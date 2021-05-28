/**
 * データをフェッチ
 */
export const fetchData = async (page: number) => {
    const res = await fetch(`${process.env.NEXT_ROUTINE_API}?page=${page}`)
    const json = await res.json()
    return await json.data
}
