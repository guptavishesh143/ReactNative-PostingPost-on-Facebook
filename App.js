import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Linking } from 'react-native';

export default function App() {

   const [facebookShareURL, setFacebookShareURL] = useState(
     'https://icws.in',
   );
   
   const [postContent, setPostContent] = useState(
    'Hello Guys, I am sharing my Post on Faceboi',
  );
   
      const postOnFacebook = () => {
   let facebookParameters = [];
   if (facebookShareURL)
   if (postContent)
     facebookParameters.push('quote=' + encodeURI(postContent));
  const url =
     'https://www.facebook.com/sharer/sharer.php?'
    + facebookParameters.join('&');

   Linking.openURL(url)
      .then((data) => {
      alert('Facebook Opened');
      })
      .catch(() => {
     alert('Something went wrong');
      });
 };
  return (
    <View style={styles.container}>
    
    <TouchableOpacity onPress={()=>postOnFacebook()} > 
    <View style={{backgroundColor: '#ecf0f1',}}>
    <Text>
    click me
    </Text>
    </View>
    </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
       backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
