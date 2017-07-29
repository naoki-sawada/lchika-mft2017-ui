import styles from './toolArea.css';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

@connect(state => ({
  button: state.button.state,
}))
@CSSModules(styles)
export default class ToolArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let toolArea = null;
    switch (this.props.button) {
      case 'light':
        toolArea = (
          <div styleName="light">
            <div styleName="row">
              <Button>A</Button>
              <Button>B</Button>
              <Button>C</Button>
            </div>
            <div styleName="row">
              <Button>A</Button>
              <Button>B</Button>
              <Button>C</Button>
            </div>
          </div>
        );
        break;
    }

    return (
      <div styleName="toolArea">
        <div styleName="tool">{toolArea}</div>
      </div>
    );
  }
}
