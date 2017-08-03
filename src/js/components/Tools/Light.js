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
  }

  render() {
    return (
      <div styleName="light">
      </div>
    );
  }
}
