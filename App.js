import * as React from 'react';
import { Text,View, StyleSheet, Button,Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import logo from './assets/logo.png'; 

export default function App() {
  const video = React.useRef(null);
  const video1 = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [status1, setStatus1] = React.useState({});
  return (
    <View style={styles.container}>
        <Image source={logo}style={styles.logo} />
        <Text style={styles.titleText}> Big Buck Bunny </Text>
       
     
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>

      <Video
        ref={video1}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status1 => setStatus1(() => status1)}
      />
      <View style={styles.buttons}>
        <Button
          title={status1.Play? 'Pause' : 'Play'}
          onPress={() =>
            status1.Play ? video1.current.pauseAsync() : video1.current.playAsync()
          }
        />
      </View>

      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems:'center'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,

  },
  logo:{ 
    width: 200,
    height: 54,
   
   }
  
});