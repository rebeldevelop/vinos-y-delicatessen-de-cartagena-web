import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default({
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en: {
      home: 'Home',
      contacto: 'Contact',
      quienesSomos: 'Who we are',
      somosTradicion: 'We are Tradition and Compromise',
      contactanos: 'Contact us',
      nombre: 'Name',
      email: 'Email',
      tuMensaje: 'Your Message',
      enviar: 'Send',
      mensajeCorrecto: 'Message Sended!',
      contactaremos: 'We will contact you as soon as possible.',
      volver: 'Return',
      tuNombre: 'Your Name',
      tuEmail: 'Your Email',
      primerParrafo: 'We are a small team specialized in the representation, marketing and distribution of all kinds of wines made in various wineries: from the most representative of our country to others not yet so popular whose product quality is impeccable. It should be noted that we also have international products.',
      segundoParrafo: 'We work daily to offer the best service and satisfy the most exquisite palates. Our objective is clear: to give the best quality at the best price. For this we adapt to you, making your experience unforgettable.'
    },
    es: {
      home: 'Home',
      contacto: 'Contacto',
      quienesSomos: 'Quiénes somos',
      somosTradicion: 'Somos Tradición y Compromiso',
      contactanos: 'Contáctanos',
      nombre: 'Nombre',
      email: 'Email',
      tuMensaje: 'Tu Mensaje',
      enviar: 'Enviar',
      mensajeCorrecto: 'Mensaje enviado correctamente!',
      contactaremos: 'Te contactaremos lo antes posible.',
      volver: 'Volver',
      tuNombre: 'Tu Nombre',
      tuEmail: 'Tu Email',
      primerParrafo: 'Somos un pequeño equipo especializado en la representación, comercialización y distribución de todo tipo de vinos elaborados en diversas bodegas: desde las más representativas de nuestro país a otras aún no tan populares cuya calidad de producto es impecable. Cabe señalar que también contamos con productos de ámbito internacional.',
      segundoParrafo: 'Trabajamos a diario para ofrecer el mejor servicio y satisfacer a los paladares más exquisitos. Nuestro objetivo es claro: dar la mejor calidad al mejor precio. Para ello nos adaptamos a ti, haciendo que tu experiencia sea inolvidable.'
    }
  }
})
