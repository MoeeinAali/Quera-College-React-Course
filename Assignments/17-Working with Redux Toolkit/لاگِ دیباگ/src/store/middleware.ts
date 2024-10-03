const alertMiddleware = (store: any) => (next: any) => (action: any) => {
    const prevState = store.getState();
    const result = next(action);
    const nextState = store.getState();
    if (prevState !== nextState) {
        console.log(`value changed from ${prevState.counter.value} to ${nextState.counter.value}`)
    }
    return result
};

export default alertMiddleware;
