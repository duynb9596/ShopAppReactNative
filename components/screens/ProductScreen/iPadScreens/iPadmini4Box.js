import React from 'react'
import { View, Dimensions, ScrollView, Text, SafeAreaView, Image} from 'react-native'

const dvWidth = Dimensions.get('window').width

export default class iPadmini4Box extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: params ? params.title : null,
    }
  };

  constructor(props)
  {
    super(props);
    console.disableYellowBox = true;
  }

  render(){
    return(
      <SafeAreaView
        style={{flex: 4}}>
        <ScrollView
          style={{ width: dvWidth, backgroundColor: '#fff'}}>
          <View
            style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 20 }}>
            <Text
              style={{ fontFamily: 'System', fontSize: 28, marginTop: 40 }}>What's in the Box</Text>
            <View
              style={{ marginTop: 40, marginHorizontal: 20, paddingHorizontal: 40, alignItems: 'center', backgroundColor: '#F9FAFB'}}>
              <Image
                style={{ width: 225, height: 280, resizeMode: 'stretch' }}
                source={require('./iPadmini4/iPadmini4-box-ipadmini4.jpeg')}>
              </Image>
            </View>
            <Text
              style={{ fontFamily: 'System', fontSize: 16, marginTop: 40 }}>iPad mini 4</Text>
            <View
              style={{ marginTop: 40, marginHorizontal: 20, paddingHorizontal: 40, alignItems: 'center', backgroundColor: '#F9FAFB' }}>
              <Image
                style={{ width: 225, height: 280, resizeMode: 'contain' }}
                source={require('./iPadmini4/iPadmini4-box-lightening.jpeg')}>
              </Image>
            </View>
            <Text
              style={{ fontFamily: 'System', fontSize: 16, marginTop: 40 }}>Lightning to USB Cable</Text>
            <View
              style={{ marginTop: 40, marginHorizontal: 20, paddingHorizontal: 40, alignItems: 'center', backgroundColor: '#F9FAFB' }}>
              <Image
                style={{ width: 225, height: 280, resizeMode: 'contain' }}
                source={require('./iPadmini4/iPadmini4-box-power.jpeg')}>
              </Image>
            </View>
            <Text
              style={{ fontFamily: 'System', fontSize: 16, marginTop: 40 }}>USB Power Adapter</Text>
          </View>
        </ScrollView>
      </SafeAreaView>  
    )
  }
}
