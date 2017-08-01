import styles from './Camera.css';
import Button from 'material-ui/Button';

@CSSModules(styles)
export default class Camera extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="camera">
        Camera input...
      </div>
    );
  }
}
