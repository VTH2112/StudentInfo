import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'
import CardData from '../component/cardData'
import { useDispatch, useSelector } from 'react-redux'

const RenderScreen = ({ navigation }) => {

    useEffect(() => {
        console.log(info);
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    const info = useSelector((state) => state.studentInfo.studentInfo)

    const renderItem = ({ item }) => {
        return (
            <CardData key={item.id} id={item.id} name={item.name} dob={item.dob} gender={item.gender} addr={item.addr} />
        )
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerCont}>
                <View style={styles.name}>
                    <Text style={styles.text}>Name</Text>
                </View>
                <View style={styles.dob}>
                    <Text style={styles.text}>Date of birth</Text>
                </View>
                <View style={styles.gender}>
                    <Text style={styles.text}>Gender</Text>
                </View>
                <View style={styles.addr}>
                    <Text style={styles.text}>Address</Text>
                </View>
                <View style={styles.btnCont}>
                        <Text style={styles.text}>BTN</Text>
                </View>
            </View>
            <FlatList
                style={styles.FlatList}
                data={info}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerCont: {
        flexDirection: "row",
        borderWidth: 1,
    },
    contentCont: {
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 30,
    },
    name: {
        width: "22%",
        padding: 10,
        borderRightWidth: 1,
        justifyContent: 'center'
    },
    dob: {
        width: "20%",
        padding: 10,
        borderRightWidth: 1,
        justifyContent: 'center'
    },
    gender: {
        width: "20%",
        padding: 10,
        borderRightWidth: 1,
        justifyContent: 'center'
    },
    addr: {
        width: "23%",
        padding: 10,
        justifyContent: 'center'
    },
    text: {
        color: "black",
        fontSize: 15,
        textAlign: "center"
    },
    FlatList: {
        marginBottom: 65,
    },
    btnCont:{
        width: "15%",
        borderLeftWidth: 1,
        borderTopWidth: 0,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default RenderScreen