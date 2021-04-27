/**
 * sessionStorage & localStorage 封装
 */
export const getSS = key => JSON.parse(sessionStorage.getItem(key));
export const setSS = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
export const removeSS = key => sessionStorage.removeItem(key);

export const getLS = key => JSON.parse(localStorage.getItem(key));
export const setLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const removeLS = key => localStorage.removeItem(key);