import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { lightRGB } from 'actions';
import styles from './Light.css';

@connect(null, {
  lightRGB,
})
@CSSModules(styles)
export default class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: 'rgba(0, 0, 0, 0.8)' };
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(arg) {
    this.props.lightRGB([255, 255, 255]);
  }

  render() {
    return (
      <div styleName="light">
        <div styleName="row">
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
        </div>
        <div styleName="row">
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
        </div>
        <div styleName="row">
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
        </div>
        <div styleName="row">
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
        </div>
        <div styleName="row">
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
          <Button onClick={this.onTouchEvent}> </Button>
        </div>
      </div>
    );
  }
}
