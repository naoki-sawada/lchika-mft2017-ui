import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { musicChange } from 'actions';
import styles from './Music.css';
import conf from 'conf';

@connect(null, {
  musicChange,
})
@CSSModules(styles)
export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(event, arg) {
    this.props.musicChange(arg);
  }

  render() {
    return (
      <div styleName="music">
        <div styleName="row">
          <Button onClick={e => this.onTouchEvent(e, conf.music[0])}>Music 1</Button>
          <Button onClick={e => this.onTouchEvent(e, conf.music[1])}>Music 2</Button>
        </div>
        <div styleName="row">
          <Button onClick={e => this.onTouchEvent(e, conf.music[2])}>Music 3</Button>
          <Button onClick={e => this.onTouchEvent(e, conf.music[3])}>Music 4</Button>
        </div>
      </div>
    );
  }
}
