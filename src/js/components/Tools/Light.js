import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import hexRgb from 'hex-rgb';
import { CustomPicker, HuePicker, AlphaPicker } from 'react-color';
import { lightRGB } from 'actions';
import styles from './Light.css';
import lightIcon from './image/IMG_4658.svg';

let colorStates = null;

@connect(null, {
  lightRGB,
})
@CSSModules(styles)
export default class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: {} };
    this.onTouchEvent = this.onTouchEvent.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.hueChangeComplete = this.hueChangeComplete.bind(this);
    this.alphaChangeComplete = this.alphaChangeComplete.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
  }

  onTouchEvent(e, value, num) {
    // console.log(Math.round(value[0] * num/5));
    this.props.lightRGB([
      Math.round(value[0] * num/5),
      Math.round(value[1] * num/5),
      Math.round(value[2] * num/5),
    ]);
  }

  handleOnChange(value) {
    this.setState({
      val: value,
    });
  }

  hueChangeComplete(color, event) {
    colorStates = color.rgb;
  }

  alphaChangeComplete(color, event) {
    // colorStates = colorStates ? { ...colorStates, a: a } : rgb;
    // console.log(colorStates);
  }

  buttonChange() {
    const { r, g, b } = colorStates;
    this.props.lightRGB([r, g, b]);
  }

  render() {
    let { val } = this.state;
    return (
      <div styleName="light">
        <div styleName="icon">
        </div>
        <div styleName="hue">
          <HuePicker
            width={'80%'}
            onChangeComplete={this.hueChangeComplete}
          />
        </div>
        <div styleName="setButton">
          <Button raised color="accent" onClick={this.buttonChange}>SET</Button>
        </div>
      </div>
    );
  }
}

// <div styleName="icon">
//   {lightIcon}
// </div>


// <div styleName="alpha">
//   <AlphaPicker
//     width={'80%'}
//     onChangeComplete={this.alphaChangeComplete}
//   />
// </div>
