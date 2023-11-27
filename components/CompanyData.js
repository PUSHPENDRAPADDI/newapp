import React from 'react'
import { Text, View } from 'react-native'

const CompanyData = (props) => {
    return (
        <View>
            <Text>CompanyName {props.name}</Text>
            <Text>CompanyEmp</Text>
        </View>
    )
}

export default CompanyData