import P5Wrapper from 'react-p5-wrapper';
import { EventEmitter } from 'events';
import { connect } from 'react-redux';
import { lightRGB } from 'actions';
import styles from './Light.css';
import Button from 'material-ui/Button';

class Sketch extends EventEmitter {
  sketch(p, test) {
    console.log(test);
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      this.emit('message', [0, 0, 0]);
    };
    p.draw = () => {
      p.background(100);
    };
  }
}

@connect(null, {
  lightRGB,
})
@CSSModules(styles)
export default class Light extends React.Component {
  constructor(props) {
    super(props);
    this.sketch = new Sketch();
    this.sketch.on('message', event => {
      this.props.lightRGB(event);
    });
  }

  render() {
    return (
      <div styleName="light">
        <P5Wrapper sketch={p => this.sketch.sketch(p, 'test')} />
      </div>
    );
  }
}
