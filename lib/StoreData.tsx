import { useRef, useEffect } from 'react'
import { useRecoilValueLoadable, Loadable, RecoilValue } from 'recoil'

type ReplayLoadable<T> = Loadable<T> & {
    getLastResolvedValue(): T | undefined
}

export function useRecoilValueReplayLoadable<T>(
    state: RecoilValue<T>
): ReplayLoadable<T> {
    const loadable = useRecoilValueLoadable(state)
    const lastValueRef = useRef<T>()
    useEffect(() => {
        if (loadable.state === 'hasValue') {
            lastValueRef.current = loadable.contents
        }
    }, [loadable])
    return {
        ...loadable,
        getLastResolvedValue() {
            return this.state === 'hasValue'
                ? this.contents
                : lastValueRef.current
        },
    }
}
