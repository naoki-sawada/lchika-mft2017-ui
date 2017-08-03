import styles from './Text.css';
import Button from 'material-ui/Button';

@CSSModules(styles)
export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="text">
        text input....
      </div>
    );
  }
}
