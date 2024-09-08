function timeit(fn) {
    return async function(...args) {
        const start = performance.now();
        const value = await fn(...args);
        const end = performance.now();
        const time = end - start;

        return { value, time };
    };
}