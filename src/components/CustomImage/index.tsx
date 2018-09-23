import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import styles from './style'
import ImageOverlay from '../ImageOverlay'

export default class CustomImage extends Component<CustomImageProps> {
    constructor(props) {
        super(props)
    }

    render() {
        const { imageSource, header, paragraph } = this.props
        return (
            <ImageBackground source={imageSource} style={styles.image} >
                <ImageOverlay header={header} paragraph={paragraph} />
            </ImageBackground>
        )
    }
}