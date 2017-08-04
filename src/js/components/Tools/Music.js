import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { musicChange } from 'actions';
import styles from './Music.css';

@connect(null, {
  musicChange,
})
@CSSModules(styles)
export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(arg) {
    this.props.musicChange('xxxx.mp3');
  }

  render() {
    return (
      <div styleName="music">
        <Button onClick={this.onTouchEvent}>Music Change</Button>
      </div>
    );
  }
}
