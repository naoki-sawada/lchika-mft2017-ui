import Main from './components/Main';
import { Provider } from 'react-redux';
import configureStore from './store';
import { initial } from './reducers';
import { MuiThemeProvider } from 'material-ui/styles';

ReactDOM.render(
  <Provider store={configureStore(initial)}>
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
