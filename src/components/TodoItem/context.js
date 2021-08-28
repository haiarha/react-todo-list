import { createContext } from 'react';

const context = createContext({
  remove: (index) => {},
  setChecked: (index, checked) => {}
});

export default context;