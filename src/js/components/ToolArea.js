import styles from './toolArea.css';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import Light from './Tools/Light';
import Mic from './Tools/Mic';
import Camera from './Tools/Camera';
import Video from './Tools/Video';

@connect(state => ({
  button: state.button.state,
}))
@CSSModules(styles)
export default class ToolArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tool = null;
    switch (this.props.button) {
      case 'light':
        tool = <Light />;
        break;
      case 'mic':
        tool = <Mic />;
        break;
      case 'camera':
        tool = <Camera />;
        break;
      case 'video':
        tool = <Video />;
        break;
    }
    return (
      <div styleName="toolArea">
        <div styleName="tool">{tool}</div>
      </div>
    );
  }
}
