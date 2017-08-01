import styles from './Light.css';
import Button from 'material-ui/Button';

@CSSModules(styles)
export default class Light extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="light">
        <div styleName="row">
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </div>
        <div styleName="row">
          <Button>D</Button>
          <Button>E</Button>
          <Button>F</Button>
        </div>
      </div>
    );
  }
}
