const setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value)
}

const getItem = (key: string): any => {
    return localStorage.getItem(key) || false
}


export {setItem, getItem}