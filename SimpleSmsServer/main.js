import SmsListener from 'react-native-android-sms-listener'
 function ValidateSms(msg) {
     try {
       return JSON.parse(msg);
     } catch (e) {
       console.error("SMS is not in the correct format", e);
       return null;
     }
 }
 function ListenToSms() {
   SmsListener.addListener(message => {
     console.info(message)
     var request = ValidateSms(message.body);
     request.phoneNumber = message.originatingAddress;
     alert(request)
   })
 }
