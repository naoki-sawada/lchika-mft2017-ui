import { connect } from 'react-redux';
import { buttonState } from 'actions';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { LightbulbOutline, Chat, MusicNote, Camera, Videocam } from 'material-ui-icons';
import styles from './ButtonArea.css';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#E3314D',
    color: '#fff',
  },
}));

const buttonType = [
  'light',
  'text',
  'music',
  'camera',
  'video',
];

@connect(state => ({
  button: state.button.state,
}), {
  buttonState,
})
@withStyles(styleSheet)
export default class ButtonArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.setState({ index });
    this.props.buttonState(buttonType[index]);
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            fullWidth
            centered
            indicatorColor="#fff"
          >
            <Tab label="Light" icon={<LightbulbOutline />} />
            <Tab label="Text input" icon={<Chat />} />
            <Tab label="Music" icon={<MusicNote />} />
            <Tab label="Camera" icon={<Camera />} />
            <Tab label="Video" icon={<Videocam />} />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
