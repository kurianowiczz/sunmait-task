export default {
    setItem(key, item) {
       global.container[key] = item;
    },
    getItem(key) {
        return global.container[key];
    },
};
