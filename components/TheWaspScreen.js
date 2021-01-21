import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default class TheWaspScreen extends React.Component {

 static navigationOptions = ({ navigation }) => ({   
     title: "The Wasp Family",   
 });
  render() {
   return (
     <View style={{ flex: 1 , backgroundColor : '#eee' }}>
       <Image
         source={{ uri : "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1574/15746725/3410496-antmanandthewasp-spoilertalk-site.jpg"  }} 
         style={{width: '100%', height: 200}}
        />       
     </View>
   );
 }
}