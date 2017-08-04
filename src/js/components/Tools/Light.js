import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import hexRgb from 'hex-rgb';
import Slider from 'react-rangeslider';
import { lightRGB } from 'actions';
import styles from './Light.css';

@connect(null, {
  lightRGB,
})
@CSSModules(styles)
export default class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 100 };
    this.onTouchEvent = this.onTouchEvent.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  onTouchEvent(arg) {
    this.props.lightRGB([255, 255, 255]);
  }

  handleOnChange(value) {
    this.setState({
      val: value,
    });
  }

  render() {
    let { val } = this.state;
    return (
      <div styleName="light">
        <div styleName="slider">
          <Slider
            min={0}
            max={255}
            value={val}
            // onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            // onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
    );
  }
}

// <div styleName="col" style={{ background: 'linear-gradient(to bottom, #fc0964, transparent)' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
// <div styleName="col" style={{ background: 'linear-gradient(to bottom, #ef9a35, transparent)' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
// <div styleName="col" style={{ background: 'linear-gradient(to bottom, #eeec3b, transparent)' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
// <div styleName="col" style={{ background: 'linear-gradient(to bottom, #52eb2e, transparent)' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
// <div styleName="col" style={{ background: 'linear-gradient(to bottom, rgb(0, 90, 246), transparent)' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
// <div styleName="col" style={{ background: 'linear-gradient(to bottom, #6615f9, transparent' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
// <div styleName="col" style={{ background: 'linear-gradient(to bottom, #c42af7, transparent' }}>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
//   <Button onClick={this.onTouchEvent}> </Button>
// </div>
