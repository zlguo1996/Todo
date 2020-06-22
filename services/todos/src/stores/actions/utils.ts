interface BaseAction {
    type: string,
}

export function simpleActionFuncFactory<ReturnedAction extends BaseAction>(type: ReturnedAction['type']) {
    const res = (payload: Omit<ReturnedAction, 'type'>): ReturnedAction => {
        return {
            ...payload as ReturnedAction,
            type: type,
        }
    }

    return res
}
