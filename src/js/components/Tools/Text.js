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
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(arg) {
    this.props.sendText('test');
  }

  render() {
    return (
      <div styleName="text">
        <Button onClick={this.onTouchEvent}>text input....</Button>
      </div>
    );
  }
}
