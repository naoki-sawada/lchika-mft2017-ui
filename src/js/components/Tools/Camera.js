import { connect } from 'react-redux';
import styles from './Camera.css';
import Button from 'material-ui/Button';
import { cameraState } from 'actions';
import shutter from './audio/Camera-Shutter03-1.mp3';
import lchikaLogo from './image/event_logo3.gif';
import mftLogo from './image/Tokyo-MF_logo_outlined.jpg';

const countDownTime = 9;

@connect(state => ({
  state: state.camera.state,
  image: state.camera.image,
}), {
  cameraState,
})
@CSSModules(styles)
export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countTimer: countDownTime };
    this.onTouchEvent = this.onTouchEvent.bind(this);
    this.countTimer = this.countTimer.bind(this);
  }

  countTimer() {
    const timer = setInterval(() => {
      if (this.state.countTimer <= 0) {
        this.setState({ countTimer: countDownTime });
        clearInterval(timer);
        this.props.cameraState('shot');
        new Audio(shutter).play();
      } else {
        this.setState({ countTimer: this.state.countTimer - 1 });
      }
    }, 1000);
  }

  onTouchEvent() {
    setTimeout(() => {
      this.props.cameraState('count');
      this.countTimer();
    }, 950);
  }

  render() {
    let cameraArea = null;
    switch (this.props.state) {
      case 'init':
        cameraArea = (
          <div styleName="camera">
            <div styleName="buttonOnly">
              <Button onClick={this.onTouchEvent}>
                take a picture!
              </Button>
            </div>
          </div>
        );
        break;

      case 'count':
        cameraArea = (
          <div styleName="cameraCount">
            <div styleName="count">
              <div styleName={`wrap-${this.state.countTimer}`}>
                <div styleName="c"></div>
                <div styleName="o"></div>
                <div styleName="u"></div>
                <div styleName="n"></div>
                <div styleName="t"></div>
              </div>
              <svg>
                <defs>
                  <filter id="filter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
                    <feComposite in="SourceGraphic" in2="filter" operator="atop" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        );
        break;

      case 'fin':
        cameraArea = (
          <div styleName="camera">
            <div styleName="image">
              <img styleName="photo" src={this.props.image[0]} />
              <img styleName="lchikaLogo" src={lchikaLogo} />
              <img styleName="mftLogo" src={mftLogo} />
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

// <div styleName="title">写真を撮影するよ！</div>
// <div styleName="example"> </div>
// <div styleName="buttonArea">
//   <div styleName="buttonContents">
//     <Button raised onClick={this.onTouchEvent} color="accent">
//       start
//     </Button>
//   </div>
// </div>
