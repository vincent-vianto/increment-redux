import React from 'react';
import {createStore} from 'redux'
import { Provider} from 'react-redux'
import Increment from "./component/Increment"
import Reducer from "./component/Reducer"

const store = createStore(Reducer)

function App() {
  return (
    <Provider>
      <Increment/>
    </Provider>
  );
}

export default App;
