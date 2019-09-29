  import SmsListener from 'react-native-android-sms-listener'


   import React, { Component } from 'react';
   import { Text, View } from 'react-native';

   export default class SimpleSmsListener extends Component {

  	constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }

	componentDidMount() {
		this.state.isLoading = true;
		SmsListener.addListener(message => {
			console.info(message);
			isLoading = false;
			let request = JSON.parse(msg);
			request.phoneNumber = message.originatingAddress;
			alert(request);
		});
	}


     render() {
       return (
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           <Text>Hello, world!</Text>
         </View>
       );
     }
   }
