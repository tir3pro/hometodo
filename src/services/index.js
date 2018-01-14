export const getStorage = () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || {},
    history: JSON.parse(localStorage.getItem('history')) || [],
    account: JSON.parse(localStorage.getItem('account')) || {}
});

export const updateStorage = (store) => {
    localStorage.setItem('history', JSON.stringify(store.getState().history));
    localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
    localStorage.setItem('account', JSON.stringify(store.getState().account));
};