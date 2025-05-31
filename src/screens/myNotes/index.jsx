import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { screenStyle } from '../../styles/screenStyle'
import NoteCard from '../../components/NoteCard'
import FloatActionButton from '../../components/FloatActionButton'
import { ADDNOTE } from '../../utils/screens'
import { screenHeight, screenWidth } from '../../utils/constants'

const MyNotes = ({ navigation }) => {


    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "Design Engineer",
            description: "birinci not açıklaması",
            date: "10:30"
        },
        {
            id: 2,
            title: "RN Developer",
            description: "birinci not açıklaması",
            date: "10:30"
        },
        {
            id: 3,
            title: "QA Tester",
            description: "birinci not açıklaması",
            date: "10:30"
        },
    ]);

    const addNote = (note) => {

        const newNotes = [...notes, note]

        setNotes(newNotes);
    }

    // addNote({
    //     id: notes.length + 1,
    //     title: "MERN Developer",
    //     description: "son eklenen not açıklaması",
    //     date: "10:30"
    // })

    const removeNote = (id) => {

        const newNotes = notes.filter((item)=>item.id!==id);

        setNotes(newNotes);
    }


    return (
        <SafeAreaView style={screenStyle.container}>
            <View style={screenStyle.container}>
                <Header />

                {/* ScrollView kullanmayacağız çünkü ScrollView, ekranda gözükmeyen elementleri bile ekrana basar bu yüzden de element sayımız çoğaldıkça performansımız düşer.*/}
                {/* <ScrollView></ScrollView> */}

                {/* flatlist ise sadece o an ekranda gözükmesi gereken elementleri renderlar, geri kalanı sadece hafızasında tutar. */}
                <FlatList
                    scrollEnabled={true}
                    style={{ height: screenHeight / 5, marginBottom: 80 }}
                    data={notes}
                    renderItem={({ item }) => (<NoteCard item={item} removeNote={removeNote} />)}
                    keyExtractor={item => item.id.toString()}
                />

                <FloatActionButton onPress={() => {
                    navigation.navigate(ADDNOTE,{addNote})
                }} />
            </View>
        </SafeAreaView>
    )
}

export default MyNotes

const styles = StyleSheet.create({})