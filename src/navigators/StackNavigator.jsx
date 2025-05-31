import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ADDNOTE, MYNOTES } from '../utils/screens';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import { AttachCircle, More, Share } from 'iconsax-react-nativejs';
import { AppColors } from '../utils/colors';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MYNOTES}
        component={MyNotes}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={ADDNOTE}
        component={AddNote}
        options={{
          title: "",
          headerRight: () => (
            <View style={{flexDirection:"row",gap:15}}>
              <AttachCircle size="25" />
              <Share size="25"/>
              <More size="25" />
            </View>
          ),
          headerStyle:{
            backgroundColor:AppColors.WHITE
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator