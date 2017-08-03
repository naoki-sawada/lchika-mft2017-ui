import { connect } from 'react-redux';
import styles from './Camera.css';
import Button from 'material-ui/Button';
import { cameraState } from 'actions';

@connect(state => ({
  state: state.camera.state,
}))
@CSSModules(styles)
export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent() {
    this.props.cameraState('start');
  }

  render() {
    let cameraArea = null;
    switch (this.props.state) {
      case 'init':
        cameraArea = (
          <div styleName="camera">
            <div styleName="title">写真を撮影するよ！</div>
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

      default:
        break;
    }

    return (
      cameraArea
    );
  }
}
