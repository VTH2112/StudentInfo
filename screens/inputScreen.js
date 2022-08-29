import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../src/redux/actions/addAction'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'

const InputScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    const [checkBoxValue, setCheckBoxValue] = useState("");

    // if (toggleCheckBox == true) {
    //     checkBoxValue = "Female"
    // }
    // if (toggleCheckBox1 == true) {
    //     checkBoxValue = "Male"
    // }
    console.log(checkBoxValue);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [name, onChangeName] = React.useState("");
    const [addr, onChangeAddr] = React.useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const dispatch = useDispatch()
    const handleAddButtonClick = () => {
        dispatch(addStudent({
            id: uuidv4(),
            name: name,
            dob: moment(selectedDate.toLocaleDateString()).format("DD/MM/YYYY"),
            gender: checkBoxValue,
            addr: addr,
        }))
        Alert.alert(
            "Upload data completed",
            "Your information has been saved",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };
    return (
        <KeyboardAwareScrollView >
            <SafeAreaView style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.text}>
                        Student Form
                    </Text>
                </View>
                <TextInput
                    style={[styles.input]}
                    label={"Name"}
                    placeholder={"Name"}
                    placeholderTextColor={"grey"}
                    value={name}
                    onChangeText={name => onChangeName(name)}
                />
                <View style={styles.block}>
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        style={[styles.input]}
                        label={"Name"}
                        placeholder={"Name"}
                        placeholderTextColor={"grey"}
                        value={selectedDate ? moment(selectedDate.toLocaleDateString()).format("DD/MM/YYYY") : 'No date selected'}
                    />
                    <TouchableOpacity onPress={showDatePicker}>
                        <MaterialCommunityIcons name="calendar-range" size={30} color={"black"} />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        date={selectedDate}
                        isVisible={datePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox}>
                        <Text style={styles.label}>Male</Text>
                        <CheckBox
                            tintColors={{ false: 'black' }}
                            disabled={false}
                            value={toggleCheckBox1}
                            onValueChange={(newValue) => {
                                setToggleCheckBox1(newValue)
                                if (newValue == true) {
                                    setToggleCheckBox(false)
                                    setCheckBoxValue("Male")
                                }
                            }}
                        />
                    </View>

                    <View style={styles.checkbox}>
                        <Text style={styles.label}>FeMale</Text>
                        <CheckBox
                            tintColors={{ false: 'black' }}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => {
                                setToggleCheckBox(newValue)
                                if (newValue == true) {
                                    setToggleCheckBox1(false)
                                    setCheckBoxValue("Female")
                                }
                            }}
                        />
                    </View>
                </View>
                <TextInput
                    style={[styles.input]}
                    label={"Addr"}
                    placeholder={"Address"}
                    placeholderTextColor={"grey"}
                    value={addr}
                    onChangeText={addr => onChangeAddr(addr)}
                />
                <TouchableOpacity style={styles.btnAdd}
                    onPress={handleAddButtonClick}>
                    <Text style={{ color: "black" }}>Add</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAwareScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 50,
        marginTop: 150,
        marginRight: 50,
        borderWidth: 1,
        padding: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        color: "black",
    },
    input: {
        width: 270,
        height: 60,
        borderRadius: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        color: "black",
    },
    block: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',

    },
    btnAdd: {
        width: 150,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 80,
    },
    text: {
        color: "black",
        fontSize: 20,
    }
})

export default InputScreen