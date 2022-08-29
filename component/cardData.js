import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { deleteItem } from '../src/redux/actions/deleteAction'
const CardData = ({ id, name, dob, gender, addr, onClick }) => {
    const dispatch = useDispatch()
    const handleDeleteBtn = () => {
        console.log(id);
        dispatch(deleteItem({
            id: id,
            name: name,
            dob: dob,
            gender: gender,
            addr: addr,
        }))
    }
    return (

        <View style={styles.container}>
            <View style={styles.contentCont}>
                <View style={styles.name}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.dob}>
                    <Text style={styles.text}>{dob}</Text>
                </View>
                <View style={styles.gender}>
                    <Text style={styles.text}>{gender}</Text>
                </View>
                <View style={styles.addr}>
                    <Text style={styles.text}>{addr}</Text>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity style={styles.btnStyle} onPress={handleDeleteBtn}>
                        <Text style={styles.text}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerCont: {
        flexWrap: "wrap",
        borderWidth: 1,
    },
    btnCont: {
        width: "15%",
        borderLeftWidth: 1,
        borderTopWidth: 0,
        alignItems: "center",
        justifyContent: 'center'
    },
    contentCont: {
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 0,
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
        fontSize: 14,
        textAlign: "center"
    }
})

export default CardData