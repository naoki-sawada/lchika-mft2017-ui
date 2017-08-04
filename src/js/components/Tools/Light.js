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
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(arg) {
    this.props.lightRGB([255, 255, 255]);
  }

  render() {
    return (
      <div styleName="light">
        <Button onClick={this.onTouchEvent}>right</Button>
      </div>
    );
  }
}
