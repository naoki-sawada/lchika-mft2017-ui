import styles from './Video.css';
import Button from 'material-ui/Button';

@CSSModules(styles)
export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="video">
        Video input...
      </div>
    );
  }
}
