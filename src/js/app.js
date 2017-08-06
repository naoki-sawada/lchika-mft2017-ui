import Main from './components/Main';
import { Provider } from 'react-redux';
import configureStore from './store';
import { initial } from './reducers';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={configureStore(initial)}>
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
