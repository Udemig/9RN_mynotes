import { StyleSheet } from "react-native";
import { AppColors } from "../utils/colors";

export const noteCardStyle = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"row",
        backgroundColor: AppColors.WHITE,
        padding:10,
        margin:5,
        borderRadius:10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height:1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
    },
    bubbleContainer:{
        flex:1,
        alignItems:"center",
        paddingRight:5,
        paddingTop: 5
    },
    bubble:{
        width: 10,
        height: 10,
        backgroundColor: AppColors.GRAY,
        borderRadius: 100
    },

    contentContainer:{
        flex: 8
    },

    title:{
        fontSize:18,
        color: AppColors.SECONDARY,
        fontWeight:"bold"
    },
    description:{
        fontSize:14,
        color: AppColors.GRAY,
        marginVertical: 5
    },
    date:{
        fontSize:14,
        color: AppColors.GRAY,
        marginVertical: 5
    },
    buttonContainer:{
        justifyContent:"space-around"
    }
})