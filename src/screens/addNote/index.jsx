import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { screenStyle } from '../../styles/screenStyle'
import { AppColors } from '../../utils/colors'
import { MYNOTES } from '../../utils/screens'


const AddNote = ({navigation,route}) => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const {addNote} = route.params;

    const saveNote = () => {

        if(!title.length>0){
            Alert.alert("Başlık giriniz.");
            return;
        }

        if(!desc.length>0){
            Alert.alert("Açıklama giriniz.");
            return;
        }

        const form = {
            id: new Date(),
            title,
            description:desc,
            date: new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString()
        }

        addNote(form);

        Alert.alert("Notunuz eklendi.")

        navigation.goBack();
    }



  return (
    <SafeAreaView style={screenStyle.container}>
        <View style={screenStyle.container}>
            <View style={{flex:1, padding:10}}>
                <Text
                    style={{fontSize:16, fontWeight:"600"}}
                >Başlık</Text>
                <TextInput 
                placeholder='Başlık giriniz...'
                value={title}
                onChangeText={setTitle}
                style={{
                    backgroundColor: "white",
                    borderWidth:1,
                    padding:5,
                    margin: 8,
                    borderRadius:5,
                    borderColor:AppColors.GRAY,
                    height: 45,
                    marginVertical: 10
                }}
                />

                <Text
                    style={{fontSize:16, fontWeight:"600"}}
                >Açıklama</Text>
                <TextInput 
                placeholder='Açıklama giriniz...'
                value={desc}
                onChangeText={setDesc}
                multiline
                style={{
                    backgroundColor: "white",
                    borderWidth:1,
                    padding:5,
                    margin: 8,
                    borderRadius:5,
                    borderColor:AppColors.GRAY,
                    height:300,
                    marginVertical: 10
                }}
                />
                
            </View>

            <View>
                <TouchableOpacity

                    onPress={saveNote}

                    style={{
                        width:"90%",
                        margin: "auto",
                        backgroundColor:AppColors.PRIMARY,
                        paddingHorizontal:20,
                        paddingVertical:10,
                        borderRadius:10
                    }}
                >
                    <Text
                        style={{
                            textAlign:"center",
                            color:"white",
                            fontSize:25
                        }}
                    >NOT EKLE</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AddNote

const styles = StyleSheet.create({})