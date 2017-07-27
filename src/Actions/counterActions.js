export function IncrementAction (params) {
    return {
        type: 'INCREMENT', 
        param: 2
    }
}

export function DecrementAction (params) {
    return {
        type: 'DECREMENT', 
        param: 2
    }
}