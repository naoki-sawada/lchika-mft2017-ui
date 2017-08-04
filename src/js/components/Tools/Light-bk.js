import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import hexRgb from 'hex-rgb';
import { lightRGB } from 'actions';
import styles from './Light.css';

console.log(styles);

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

  render() {
    let { val } = this.state;
    return (
      <div styleName="light">
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #fc0964, transparent)' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#fc0964'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#fc0964'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#fc0964'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#fc0964'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#fc0964'), 1)}> </Button>
        </div>
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #ef9a35, transparent)' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#ef9a35'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#ef9a35'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#ef9a35'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#ef9a35'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#ef9a35'), 1)}> </Button>
        </div>
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #eeec3b, transparent)' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#eeec3b'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#eeec3b'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#eeec3b'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#eeec3b'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#eeec3b'), 1)}> </Button>
        </div>
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #52eb2e, transparent)' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#52eb2e'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#52eb2e'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#52eb2e'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#52eb2e'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#52eb2e'), 1)}> </Button>
        </div>
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #005af6, transparent)' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#005af6'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#005af6'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#005af6'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#005af6'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#005af6'), 1)}> </Button>
        </div>
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #6615f9, transparent' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#6615f9'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#6615f9'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#6615f9'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#6615f9'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#6615f9'), 1)}> </Button>
        </div>
        <div styleName="col" style={{ background: 'linear-gradient(to bottom, #c42af7, transparent' }}>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#c42af7'), 5)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#c42af7'), 4)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#c42af7'), 3)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#c42af7'), 2)}> </Button>
          <Button onClick={(e) => this.onTouchEvent(e, hexRgb('#c42af7'), 1)}> </Button>
        </div>
      </div>
    );
  }
}
