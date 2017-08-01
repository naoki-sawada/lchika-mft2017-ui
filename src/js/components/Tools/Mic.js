import styles from './Mic.css';
import Button from 'material-ui/Button';

@CSSModules(styles)
export default class Mic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="mic">
        text input or mic input....
      </div>
    );
  }
}
