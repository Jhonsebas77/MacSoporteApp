import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Footer from '../../components/Footer/index'
import styles from './style'

export default class Noticias extends Component<ItemProps, ItemState> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Actualidad en el mundo de Apple</Text>
                <View style={styles.cardContainer}>
                    <Text>"Noticia 1"</Text>
                    <Text style={styles.body}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                        enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                        eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                        nisi. Aenean vulputate eleifend
                    </Text>
                </View>
                <View style={styles.cardContainer}>
                    <Text>"Noticia 2"</Text>
                    <Text style={styles.body}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                        enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                        eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                        nisi. Aenean vulputate eleifend
                    </Text>
                </View>
                <Footer />
            </ScrollView>
        )
    }
}