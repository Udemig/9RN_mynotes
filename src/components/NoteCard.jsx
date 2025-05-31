import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Edit, Trash } from 'iconsax-react-nativejs'
import { noteCardStyle } from '../styles/noteCardStyle'
import { useNavigation } from '@react-navigation/native'

const NoteCard = ({ item, removeNote }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={noteCardStyle.container}
            onPress={()=>Alert.alert('karta bastınız')}
        >
            {/* baloncuk divi */}
            <View style={noteCardStyle.bubbleContainer}>
                <View style={noteCardStyle.bubble}></View>
            </View>

            {/* içerik divi */}
            <View style={noteCardStyle.contentContainer}>
                <Text style={noteCardStyle.title}>{item.title}</Text>
                <Text style={noteCardStyle.description}>{item.description}</Text>
                <Text style={noteCardStyle.date}>{item.date}</Text>
            </View>

            {/* kontroller divi */}
            <View style={noteCardStyle.buttonContainer}>
                <TouchableOpacity onPress={()=>removeNote(item.id)}>
                    <Trash size="24" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Edit size="20" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default NoteCard

const styles = StyleSheet.create({})