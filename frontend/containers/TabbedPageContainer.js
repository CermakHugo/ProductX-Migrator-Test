

import { connect } from 'react-redux';
import TabbedPage from '../components/TabbedPage';

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
    tabs: state.tabs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeypadButtonPress: (button) => {
      dispatch({ type: 'HANDLE_KEYPAD_BUTTON_PRESS', button });
    },
    updateDisplayField: (content) => {
      dispatch({ type: 'UPDATE_DISPLAY_FIELD', content });
    },
  };
};

class TabbedPageContainer extends React.Component {
  handleKeypadButtonPress = (button) => {
    this.props.handleKeypadButtonPress(button);
  };

  updateDisplayField = (content) => {
    this.props.updateDisplayField(content);
  };

  render() {
    return (
      <TabbedPage
        activeTab={this.props.activeTab}
        tabs={this.props.tabs}
        handleKeypadButtonPress={this.handleKeypadButtonPress}
        updateDisplayField={this.updateDisplayField}
      />
    );
  }
}

const ConnectedTabbedPageContainer = connect(mapStateToProps, mapDispatchToProps)(TabbedPageContainer);

export default ConnectedTabbedPageContainer;