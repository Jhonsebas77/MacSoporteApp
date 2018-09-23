import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Footer from '../../components/Footer/index'
import styles from './style'

export default class Nosotros extends Component<ItemProps, ItemState> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.parrafo}>Bienvenidos Mac Soporte</Text>
                    <Text style={styles.parrafo}>
                        Somos una empresa familiar que inició su historia en el mantenimiento de equipos de Apple con una trayectoria
                        de mas de 12 años.
                    </Text>

                    <Text style={styles.parrafo}>
                        Con una amplia trayectoria, nuestra compañía ha establecido los estándares de calidad de producto y
                        servicio  mediante la constante evolución técnica, el mejoramiento y la capacitación constante de nuestro
                        recurso humano, formando un equipo especializado que nos permite ofrecer el mejor servicio posible.
                    </Text>

                    <Text style={styles.parrafo}>
                        En Mac Soporte tambien ofrecemos ademas del mantenimiento preventivo y correctivo de los equipos de Apple, un amplio servicio
                        de asesoramiento para que seas uno con tu equipo, tambien ofrecemos servicio Tecnico y Especializado en Mantenimiento de equipos
                        de Prepensa como Dolev, CTPs y Filmadoras.
                    </Text>
                </View>
                <View >
                    <Text> "Informacion sobre Nosotros" </Text>
                    <Text style={styles.parrafointerno}>
                        Aqui puedes encontrar informacion legal relacionada a Mac Soporte (NIT: 79.539.253-9).
                    </Text>
                    <Text style={styles.parrafointerno}>
                        Conoce nuestra Política de Privacidad.
                    </Text>
                    <View style={styles.btncontainer}>
                        <TouchableOpacity
                            style={styles.buttonService}
                            onPress={() => this.props.navigation.navigate('Politica', { user: 'Política de Privacidad' })}>
                            <Text>Politica de Privacidad</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.parrafointerno}></Text>
                </View>
                <Footer />
            </ScrollView>
        )
    }
}