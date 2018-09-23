import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import styles from './style'

export default class Footer extends Component<{}> {
    render() {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.info}>
                    <FlatList
                        data={[
                            { key: '• Calle 28N #5N - 14 Barrio San Vicente' },
                            { key: '• Cali - Colombia' },
                            { key: '• Tel: (032) 668-5003 | Cel: (310) 494-2518' },
                            { key: '• servicioalcliente@macsoporte.com' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
                <View style={styles.logo}>
                    <Image source={require('../../Assets/images/Logo.png')} style={styles.cart} />
                </View>

            </View>
        )
    }
}