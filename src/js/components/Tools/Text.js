import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import styles from './Text.css';
import { sendText } from 'actions';

const texts = [
  'こんにちは！',
  'mft2017に来たよ',
  'たのしー',
  'L-Chika Bot',
  'はじめまして！',
  '記念撮影したよ',
  'わーい',
  'え  る  ち  か',
  'Hello, World!',
];

@connect(state => ({

}), {
  sendText,
})
@CSSModules(styles)
export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouchEvent(event, value) {
    this.props.sendText(texts[value]);
  }

  render() {
    return (
      <div styleName="text">
        <div styleName="row">
          <Button style={{ background: '#D12B1C' }} onClick={e => this.onTouchEvent(e, 0)}>{texts[0]}</Button>
          <Button style={{ background: '#2F549F' }} onClick={e => this.onTouchEvent(e, 1)}>{texts[1]}</Button>
          <Button style={{ background: '#DF6196' }} onClick={e => this.onTouchEvent(e, 2)}>{texts[2]}</Button>
        </div>
        <div styleName="row">
          <Button style={{ background: '#65BBE4' }} onClick={e => this.onTouchEvent(e, 3)}>{texts[3]}</Button>
          <Button style={{ background: '#EB772C' }} onClick={e => this.onTouchEvent(e, 4)}>{texts[4]}</Button>
          <Button style={{ background: '#1B953E' }} onClick={e => this.onTouchEvent(e, 5)}>{texts[5]}</Button>
        </div>
        <div styleName="row">
          <Button style={{ background: '#6DBC4B' }} onClick={e => this.onTouchEvent(e, 6)}>{texts[6]}</Button>
          <Button style={{ background: '#F5DD63' }} onClick={e => this.onTouchEvent(e, 7)}>{texts[7]}</Button>
          <Button style={{ background: '#AB9AC8' }} onClick={e => this.onTouchEvent(e, 8)}>{texts[8]}</Button>
        </div>
      </div>
    );
  }
}
