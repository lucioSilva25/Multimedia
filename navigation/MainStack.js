import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Video1 from '../Video1'
import informacion from '../Informacion'

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return(
                <Stack.Navigator >

                    <Stack.Screen
                        name = 'Video1'
                        component = {Video1}
                    />
                    <Stack.Screen
                        name = 'informacion'
                        component = {informacion}
                    />

                    
                   
                    
                 
                </Stack.Navigator>
    )
}

export default MainStack