import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenStyle } from '../styles/screenStyle'
import { MYNOTES } from '../utils/screens'
import { AppColors } from '../utils/colors'
import { HamburgerMenu, More, SearchNormal } from 'iconsax-react-nativejs'

const Header = () => {
  return (
    <View style={screenStyle.container}>

        {/* Title Kısmı */}
      <View
      style={{
        justifyContent:"center",
        alignItems:"center",
        paddingTop:20,
      }}
      >
        <Text style={{fontSize:38,color:AppColors.SECONDARY}}>My Notes</Text>
      </View>

      <View style={{
        flexDirection:"row", 
        justifyContent:"space-between", 
        marginTop:50,
        paddingHorizontal:25
        }}>
        <View>
            <HamburgerMenu/>
        </View>

        <View style={{flexDirection:"row",gap:10}}>
            <SearchNormal />
            <More/>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})