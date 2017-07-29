import styles from './ButtonArea.css';
import Button from 'material-ui/Button';
import { LightbulbOutline, Mic, Camera, Videocam } from 'material-ui-icons';
import { connect } from 'react-redux';
import { buttonState } from 'actions';

@connect(null, {
  buttonState,
})
@CSSModules(styles)
export default class ButtonArea extends React.Component {
  constructor(props) {
    super(props);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(event, type) {
    this.props.buttonState(type);
  }

  render() {
    return (
      <div styleName="buttonArea">
        <Button onClick={e => this.onTouchEvent(e, 'light')}>
          <LightbulbOutline />
        </Button>
        <Button onClick={e => this.onTouchEvent(e, 'mic')}>
          <Mic />
        </Button>
        <Button onClick={e => this.onTouchEvent(e, 'camera')}>
          <Camera />
        </Button>
        <Button onClick={e => this.onTouchEvent(e, 'video')}>
          <Videocam />
        </Button>
      </div>
    );
  }
}
