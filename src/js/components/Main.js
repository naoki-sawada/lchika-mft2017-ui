import styles from './Main.css';
import ButtonArea from './ButtonArea';
import ToolArea from './ToolArea';

@CSSModules(styles)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main">
        <ButtonArea />
        <ToolArea />
      </div>
    );
  }
}
