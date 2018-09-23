import React from 'react'
import { ImageBackground } from 'react-native'
import styles from './style'
import ImageOverlay from '../ImageOverlay'

export default ({ }: any) => {
    return (
        <ImageBackground source={require('../../Assets/images/Header.jpg')}
            style={styles.banner} >
            <ImageOverlay header='- Mac Soporte - ' paragraph='Servicio Tecnico Especializado' />
        </ImageBackground>
    )
}