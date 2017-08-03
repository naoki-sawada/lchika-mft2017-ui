import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { videoState } from 'actions';
import styles from './Video.css';

@connect(state => ({
  state: state.video.state,
}), {
  videoState,
})
@CSSModules(styles)
export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent() {
    setTimeout(() => {
      this.props.videoState('rec');
    }, 500);
  }

  render() {
    let videoArea = null;
    switch (this.props.state) {
      case 'off':
        videoArea = (
          <div styleName="video">
            <div styleName="title">ビデオを撮影するよ！</div>
            <div styleName="example">なにか視覚的情報を入れる</div>
            <div styleName="buttonArea">
              <div styleName="buttonContents">
              <Button raised onClick={this.onTouchEvent} color="accent">
                start
              </Button>
              </div>
            </div>
          </div>
        );
        break;

      case 'rec':
        videoArea = (
          <div styleName="video">
            さつえいちゅう。。。
          </div>
        );
        break;

      default:
        break;
    }

    return (
      videoArea
    );
  }
}
