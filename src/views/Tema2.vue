<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recursos para el despacho de mercancías

  

    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-09.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img01.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Los recursos para el despacho de mercancías comprenden los medios humanos, físicos, tecnológicos y financieros necesarios para desarrollar las actividades de preparación, verificación, control y entrega de productos. Su adecuada planificación y administración permiten aprovechar la capacidad operativa, optimizar los costos y cumplir los tiempos y condiciones establecidos para la distribución.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto de recursos
  
  
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema2/img02.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 Los recursos son los medios que una organización utiliza para desarrollar sus actividades y alcanzar los objetivos establecidos. En el despacho de mercancías, incluyen el personal, la infraestructura, los equipos, las herramientas tecnológicas y los fondos económicos requeridos para ejecutar las operaciones logísticas.

        .container
          .row.align-items-center.bg-fondo-07.br-15.mb-4.p-3
            p.mb-0 Su disponibilidad y adecuada utilización permiten mantener la continuidad de los procesos, responder a las necesidades de los clientes y reducir riesgos asociados con retrasos, errores o interrupciones durante el despacho.
          
        p.mb-0(data-aos="fade-right") La planificación de estos recursos debe considerar el volumen de pedidos, las características de las mercancías, los tiempos de entrega y la capacidad operativa de la organización. De esta manera, es posible asignarlos según las necesidades de cada actividad y favorecer el cumplimiento de los procedimientos establecidos.
  
    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora recibe un incremento de pedidos durante una temporada comercial. Para atender la demanda, reorganiza los turnos del personal, verifica la disponibilidad de equipos de manipulación y coordina los vehículos necesarios para el transporte. Esta planificación permite mantener la continuidad de las operaciones y cumplir los tiempos de despacho.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos de recursos
  

    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema2/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las organizaciones emplean diferentes tipos de recursos para garantizar el desarrollo eficiente de los procesos logísticos. Cada uno cumple una función específica dentro del despacho de mercancías y, en conjunto, permiten mantener la continuidad de las operaciones.

    p.mb-4 Los principales tipos de recursos utilizados en logística son:
    
    .row.mb-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema2/img05.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4 Recursos humanos
              p.mb-0 Comprenden el personal encargado de planificar, ejecutar y controlar las actividades logísticas, como coordinadores, supervisores, auxiliares de almacén y conductores.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema2/img06.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4 Recursos físicos
              p.mb-0 Incluyen instalaciones, equipos y herramientas utilizados para almacenar, manipular y movilizar mercancías, como bodegas, estanterías, montacargas y muelles de carga.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema2/img07.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4 Recursos tecnológicos
              p.mb-0 Corresponden a los sistemas de información y dispositivos que facilitan el registro, seguimiento y control de las operaciones, como los sistemas WMS, lectores de códigos de barras y terminales móviles.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema2/img08.png')})`}")
            .tarjeta-flip__contenido.p-4
              h4 Recursos financieros
              p.mb-0 Son los fondos económicos destinados a cubrir los costos de personal, transporte, mantenimiento, adquisición de insumos y demás necesidades de la operación logística.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 La integración de estos recursos permite desarrollar las actividades de despacho de manera organizada, reducir dificultades operativas y favorecer el cumplimiento de los compromisos de entrega.

    
    .bg-fondo-11.px-lg-5.px-4.py-lg-4.py-2.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora organiza el despacho de sus pedidos mediante la asignación de personal operativo, la utilización de equipos de manipulación, el registro de mercancías en un sistema de información y la disponibilidad de presupuesto para transporte y embalaje. La coordinación de estos recursos facilita el cumplimiento de la programación establecida.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Recursos humanos



    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Los recursos humanos comprenden el personal responsable de planificar, coordinar, ejecutar y controlar las actividades relacionadas con el despacho de mercancías. Sus conocimientos, habilidades y experiencia contribuyen al cumplimiento de los procedimientos y a la calidad de las operaciones logísticas.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 En este proceso participan diferentes perfiles ocupacionales, como coordinadores logísticos, supervisores de almacén, auxiliares de bodega, operarios de preparación de pedidos, responsables de verificación, conductores y personal administrativo.
        .container
          .row.align-items-center.bg-fondo-07.br-15.mb-3.p-3
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img12.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 .La asignación del personal debe considerar el volumen de trabajo, la complejidad de las actividades, las competencias requeridas y las condiciones de seguridad y salud en el trabajo.
          
        p.mb-0 Asimismo, la formación continua permite fortalecer las habilidades relacionadas con la manipulación de mercancías, el uso de equipos y tecnologías, la aplicación de procedimientos técnicos y la atención de novedades durante el despacho.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos alimenticios organiza su personal según las actividades de preparación, verificación y despacho. Los auxiliares recolectan las mercancías, el responsable de verificación comprueba las referencias y cantidades, y el coordinador logístico supervisa el cumplimiento de la programación. Esta distribución de funciones facilita el control de las operaciones y reduce los errores.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Recursos físicos y tecnológicos

    p.mb-4 Los recursos físicos y tecnológicos permiten desarrollar las operaciones de despacho mediante el uso de instalaciones, equipos, herramientas y sistemas de información.


    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .cajon.bg-color-04.px-5.py-4.h-100.align-content-center
          p.mb-0 Los recursos físicos comprenden la infraestructura y los elementos utilizados para almacenar, manipular y movilizar mercancías. Entre ellos se encuentran las bodegas, estanterías, muelles de carga, montacargas, bandas transportadoras, estibas y contenedores.
      .col-lg-7.mb-0
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-0.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img13.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Por su parte, los recursos tecnológicos incluyen dispositivos y sistemas informáticos que facilitan la planificación, ejecución y seguimiento de las actividades logísticas. Entre los más utilizados se encuentran los sistemas de gestión de almacenes (WMS), los sistemas de planificación de recursos empresariales (ERP), los lectores de códigos de barras, los dispositivos de radiofrecuencia y los terminales móviles.

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img14.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-3 La integración de estos recursos permite registrar movimientos de mercancías, consultar información actualizada, reducir errores y fortalecer la trazabilidad durante la preparación y el despacho.
        p.mb-0 Su utilización requiere mantenimiento, condiciones adecuadas de funcionamiento y personal capacitado para garantizar operaciones seguras y eficientes.


    .bg-fondo-11.px-lg-5.px-4.py-lg-4.py-2.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos de consumo utiliza estanterías para organizar las mercancías, montacargas para movilizar cargas y lectores de códigos de barras para registrar los productos preparados. La información se actualiza en el sistema de gestión de almacenes, lo que facilita el control de inventarios y la verificación de los pedidos antes del despacho.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5	Recursos financieros
      
    .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los recursos financieros son los fondos económicos destinados a cubrir los costos, gastos e inversiones necesarios para desarrollar las operaciones de despacho de mercancías. Su adecuada administración permite garantizar la disponibilidad de recursos, controlar los costos y mantener la continuidad de los procesos logísticos.

    p.mb-4 En la tabla a continuación, se detalla la gestión de los recursos financieros en el despacho de mercancías y su aplicación:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Gestión de recursos financieros en el despacho de mercancías
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Aspecto
                th Descripción
                th Aplicación en el despacho
            tbody
              tr
                td Planificación financiera
                td Determina los recursos económicos necesarios para desarrollar las operaciones logísticas.
                td Elaboración de presupuestos para transporte, personal, embalaje, mantenimiento y tecnología.
              tr
                td Asignación de recursos
                td Distribuye el presupuesto disponible según las necesidades y prioridades operativas.
                td Destinación de fondos para contratar servicios, adquirir insumos y mantener equipos.
              tr
                td Control presupuestal
                td Compara los valores presupuestados con los gastos realizados para identificar desviaciones.
                td Seguimiento de costos de transporte, materiales y servicios asociados al despacho.
              tr
                td Optimización de costos
                td Identifica oportunidades para utilizar eficientemente los recursos sin afectar la calidad del servicio.
                td Reducción de gastos innecesarios y mejor aprovechamiento de equipos, materiales y servicios.
              tr
                td Evaluación financiera
                td Analiza los resultados económicos para apoyar la toma de decisiones y la mejora continua.
                td Valoración de inversiones, contratación de servicios y ajustes en la distribución del presupuesto.



    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c2.p-4
          p.mb-0 La gestión de los recursos financieros contribuye al control de los costos operativos y facilita la toma de decisiones para garantizar la eficiencia y sostenibilidad de las actividades de despacho.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora establece un presupuesto mensual para el despacho de mercancías. Durante su ejecución, registra los costos de transporte, embalaje y mantenimiento de equipos. Al finalizar el período, compara los valores presupuestados con los gastos realizados e identifica oportunidades para optimizar los recursos en las siguientes operaciones.


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-20.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex.order-3
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-1
              h4.mb-2 Video sugerido. Gestión de operaciones II
              p.mb-0 Para fortalecer los conocimientos sobre los recursos necesarios en las operaciones logísticas, se invita a consultar el siguiente video, que complementa los conceptos relacionados con su planificación, asignación y utilización durante el despacho.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-2
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=s4XzNg_FOT4'" target="_blank")
                span Ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1.order-lg-2
              h4.mb-2 Lectura sugerida. Tic’s aplicadas a la logística
              p.mb-0 Para ampliar los conocimientos sobre las herramientas tecnológicas que apoyan los procesos organizacionales, se recomienda consultar el siguiente documento como material complementario.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-3.order-md-2.order-lg-3
              a.boton.color-acento-botones(:href="'http://virtualnet2.umb.edu.co/virtualnet/archivos/open.php/133/modulo2/pdf/tecinfcom.pdf'" target="_blank")
                span Ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex.order-lg-1
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto



    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-22.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema4/img11.png", data-aos="fade-right").mx-auto.w-md-75-img
            .col-lg-6.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Para complementar los contenidos de los capítulos 1 y 2, se invita a consultar el pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Proveedores y recursos para un despacho eficiente"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )
              p.mb-0 Que profundiza en la importancia de coordinar el abastecimiento y los recursos necesarios para desarrollar las operaciones logísticas.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
