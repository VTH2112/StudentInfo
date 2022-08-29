import React from 'react';
import { StyleSheet, TextInput } from 'react-native'

const Input = (label,) => {
    const [text, setText] = React.useState("");
    return (
        <TextInput
            style={[styles.input]}
            label={label}
            placeholder={"label"}
            value={text}
            onChangeText={text => setText(text)}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'black',
        width: 220,
        borderRadius: 10,
    }
})

export default Input