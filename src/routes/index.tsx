import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import Home from '../containers/Home/content'
import Soporte from '../containers/Soporte/content'
import Noticias from '../containers/Noticias/content'
import Productos from '../containers/Productos/content'
import Nosotros from '../containers/Nosotros/content'
import Contacto from '../containers/Contacto/content'
import Servicios from '../containers/Servicios/content'
import Preprensa from '../containers/Preprensa/content'
import Preguntas from '../containers/Preguntas/content'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='Home' component={Home} hideNavBar={true} />
          <Scene key='Soporte' component={Soporte} />
          <Scene key='Noticias' component={Noticias} />
          <Scene key='Productos' component={Productos} />
          <Scene key='Nosotros' component={Nosotros} />
          <Scene key='Contacto' component={Contacto} />
          <Scene key='Servicios' component={Servicios} />
          <Scene key='Preprensa' component={Preprensa} />
          <Scene key='Preguntas' component={Preguntas} />
        </Stack>
      </Router>
    )
  }
}