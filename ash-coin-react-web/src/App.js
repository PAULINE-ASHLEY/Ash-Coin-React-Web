import React from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';

function App() {
  return (
    <div className="App font-roboto">
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
