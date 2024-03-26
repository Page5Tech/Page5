import React from 'react';
import {
  StyleSheet,
  Text,
  Share,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Linking,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationEvents} from 'react-navigation';
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 2.5,
    };
  }

  _onBlurr = () => {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  };

  _onFocus = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  };

  _handleBackButtonClick = () => {
    // BackHandler.exitApp();
    return true;
  };
  render() {
    return (
      <View>
        <NavigationEvents
          onWillFocus={this._onFocus}
          onWillBlur={this._onBlurr}
        />
        <Text>djbcjsz</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
