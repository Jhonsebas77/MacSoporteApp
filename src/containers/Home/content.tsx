import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Banner from '../../components/Banner/index'
import CustomImage from '../../components/CustomImage'
import Footer from '../../components/Footer'
import styles from './style'

export default class Home extends Component<any, any> {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Banner />
                <View style={styles.contentContainer}>
                    <View style={styles.col2}>
                        <TouchableOpacity onPress={() => { Actions.Soporte() }} >
                            <CustomImage imageSource={require('../../Assets/images/soporte.jpg')} header='Soporte Tecnico' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.col1}>
                        <TouchableOpacity onPress={() => { Actions.Noticias() }}>
                            <CustomImage imageSource={require('../../Assets/images/noticias.jpg')} header='Noticias' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentBanner}>
                    </View>
                    <View style={styles.col1}>
                        <TouchableOpacity onPress={() => { Actions.Productos() }}>
                            <CustomImage imageSource={require('../../Assets/images/productos.jpg')} header='Productos' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.col2}>
                        <TouchableOpacity onPress={() => { Actions.Nosotros() }}>
                            <CustomImage imageSource={require('../../Assets/images/nosotros.png')} header='Nosotros' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentBanner}>
                    </View>
                    <View style={styles.col2}>
                        <TouchableOpacity onPress={() => { Actions.Contacto() }}>
                            <CustomImage imageSource={require('../../Assets/images/contactanos.jpg')} header='Contactanos' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.col1}>
                        <TouchableOpacity onPress={() => { Actions.Servicios() }}>
                            <CustomImage imageSource={require('../../Assets/images/servicios.jpg')} header='Servicios' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentBanner}>
                    </View>
                    <View style={styles.col1}>
                        <TouchableOpacity onPress={() => { Actions.Preprensa() }}>
                            <CustomImage imageSource={require('../../Assets/images/preprensa.jpg')} header='Pre-Prensa' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.col2}>
                        <TouchableOpacity onPress={() => { Actions.Preguntas() }}>
                            <CustomImage imageSource={require('../../Assets/images/preguntas.jpg')} header='Preguntas Frecuentes' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentBanner}>
                        <Footer />
                    </View>
                </View>
            </ScrollView>
        )
    }
}