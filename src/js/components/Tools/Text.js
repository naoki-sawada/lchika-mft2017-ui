import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import styles from './Text.css';
import { sendText } from 'actions';

@connect(state => ({
  
}), {
  sendText,
})
@CSSModules(styles)
export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="text">
        text input....
      </div>
    );
  }
}
