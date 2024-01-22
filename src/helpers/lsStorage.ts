const setLS =<T> (key:string, value:T) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set LS state error');
  }
};

const getLS = <T>(key:string):T|undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get LS state error');
  }
};

export { setLS, getLS };
