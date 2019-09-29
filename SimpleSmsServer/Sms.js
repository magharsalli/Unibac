  import SmsListener from 'react-native-android-sms-listener'


   import React, { Component } from 'react';
   import { Text, View, Alert } from 'react-native';

   export default class SimpleSmsListener extends Component {

  	constructor(props){
      super(props);
      this.state ={ isLoading: true}
	  SmsListener.addListener(message => {
			try{
				let request = message.body;
				request.phoneNumber = message.originatingAddress;
				Alert.alert('Received JSON Message !', JSON.stringify(request).toString());
			}catch(e){
				Alert.alert("Unknown message format",e);
			}
			
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
