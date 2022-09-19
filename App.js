import React, { useState, useEffect }  from 'react';
import { Text,View, StyleSheet, Button,Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import logo from './assets/logo.png'; 
import * as ImagePicker from 'expo-image-picker';



const Video1 = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
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
       
        <View >
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>   
      </View>
    );
  }
  
  export default Video1
  
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
     
     },
     Perfil:{

     }
    
  });