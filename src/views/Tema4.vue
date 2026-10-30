<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Especificaciones de materiales y mercancías


    .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los procedimientos técnicos establecen las actividades, responsabilidades y controles necesarios para desarrollar el despacho de mercancías de manera organizada y segura. Su aplicación permite estandarizar las operaciones, reducir errores, mantener la trazabilidad y cumplir los requisitos establecidos por la organización.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto de procedimientos técnicos



    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0

        .row.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema4/img03.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 En el despacho de mercancías, orientan las actividades de preparación, verificación, embalaje, cargue y entrega, con el propósito de garantizar que se desarrollen conforme a las condiciones establecidas.
            p.mb-0 La estandarización facilita la capacitación del personal, disminuye las diferencias en la ejecución de las tareas y contribuye al cumplimiento de los requisitos de calidad y seguridad.
        .container
          .row.align-items-center.bg-fondo-07.br-15.mb-4.p-3
            p.mb-0 Su finalidad es coordinar las operaciones de almacenamiento, preparación de pedidos, verificación y transporte, considerando la disponibilidad de recursos y las condiciones de entrega acordadas con los clientes.

        p.mb-0(data-aos="fade-right") Estos procedimientos deben actualizarse cuando se presenten cambios en los equipos, las tecnologías, las condiciones operativas o los requisitos aplicables.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora establece un procedimiento para el despacho de productos que define las actividades de preparación, verificación y cargue, así como los responsables de cada operación. Su aplicación permite organizar el trabajo y reducir las diferencias entre los pedidos preparados y los efectivamente despachados.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos de procedimientos técnicos


    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img04.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-2 Los procedimientos técnicos se establecen según las características de las mercancías, las actividades desarrolladas y los controles requeridos durante el despacho.
        p.mb-0 Entre los procedimientos más utilizados se encuentran:


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img05.png", data-aos="zoom-in", alt="")
      .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img06.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Preparación de pedidos
            p.text-center.mb-0 Establece las actividades para localizar, seleccionar y organizar las mercancías de acuerdo con las referencias y cantidades solicitadas.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Verificación de mercancías
            p.text-center.mb-0 Define los controles necesarios para comprobar las cantidades, referencias, condiciones físicas y documentación de los productos.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Embalaje y acondicionamiento
            p.text-center.mb-0 Establece las condiciones de protección, embalaje, identificación y manipulación requeridas según las características de las mercancías.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cargue y despacho
            p.text-center.mb-0 Orienta la organización de la carga, la utilización de equipos, la verificación de condiciones de seguridad y la autorización de salida.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Registro de información y novedades
            p.text-center.mb-0 Determina cómo documentar los movimientos de mercancías, las diferencias identificadas y las situaciones que afectan la operación.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img13.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Entrega y confirmación de recepción
            p.text-center.mb-0 Establece los controles para identificar al destinatario, entregar las mercancías y registrar la conformidad o las novedades.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img14.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Gestión de devoluciones e incidencias
            p.text-center.mb-0 Define las actividades para registrar, clasificar y gestionar devoluciones, daños, diferencias y demás situaciones posteriores al despacho.


    .bg-fondo-14.px-lg-5.px-4.py-lg-4.py-2.mb-3
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de reparto utiliza diferentes procedimientos técnicos para preparar, verificar, embalar, cargar y entregar las mercancías de acuerdo con las características de cada envío. La aplicación de estos procedimientos permite mantener un control organizado sobre las operaciones y las condiciones de entrega.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Procedimientos de preparación del despacho

    p.mb-4 La preparación del despacho comprende las actividades necesarias para acondicionar las mercancías y garantizar que estén listas para su salida del almacén.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img15.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-07.br-15.mb-4.p-3
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img16.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Este procedimiento inicia con la autorización del pedido e incluye la localización de productos, la selección de cantidades, la clasificación, la consolidación, el embalaje y el etiquetado.

        p.mb-2 Durante su ejecución, es necesario comprobar que los materiales de protección correspondan a las características de los productos y que las unidades estén identificadas para facilitar su manipulación y trazabilidad.

        p.mb-0 La correcta preparación contribuye a reducir errores, prevenir daños y cumplir los tiempos establecidos para el despacho.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora recibe una orden de despacho de productos de aseo. El personal localiza las referencias, selecciona las cantidades solicitadas y organiza los productos según sus características. Posteriormente, realiza el embalaje y etiquetado para trasladar el pedido a la zona de verificación.

    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Procedimientos de verificación

    .container
      .row.align-items-center.bg-fondo-09.br-15.mb-4.p-4
        .col-lg-auto
          p.mb-0 La verificación consiste en comprobar que las mercancías preparadas cumplan las condiciones establecidas en la orden de despacho y en los documentos correspondientes.

      

    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img17.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-2 Este procedimiento permite identificar diferencias antes de autorizar la salida de los productos y constituye una actividad fundamental para garantizar la confiabilidad de las operaciones.
        p.mb-0 En la siguiente tabla, se enuncian los aspectos de verificación en el despacho de mercancías junto con el control requerido: 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 4.
          span Aspectos de verificación en el despacho de mercancías
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Aspecto
                th Control requerido
            tbody
              tr
                td Referencias
                td Confirmar que los productos correspondan a los registrados en la orden.
              tr
                td Cantidades
                td Comprobar que las unidades preparadas coincidan con las solicitadas.
              tr
                td Estado físico
                td Identificar daños, deterioros o alteraciones en las mercancías.
              tr
                td Embalaje
                td Verificar que los materiales de protección sean adecuados y estén en condiciones apropiadas.
              tr
                td Identificación
                td Comprobar que las etiquetas contengan la información necesaria para el despacho.
              tr
                td Documentación
                td Confirmar la correspondencia entre las mercancías y los documentos de salida.


    p.mb-3 La verificación puede apoyarse en listas de chequeo, lectores de códigos de barras, dispositivos de radiofrecuencia y sistemas de información logística.
    p.mb-4 Cuando se identifica una diferencia, esta debe registrarse y gestionarse antes de autorizar el despacho, conforme al procedimiento establecido.



    .bg-fondo-11.px-lg-5.px-4.py-lg-4.py-2.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora verifica un pedido de repuestos mediante una lista de chequeo y un lector de códigos de barras. Durante la revisión identifica una referencia incorrecta, registra la novedad y solicita su corrección antes de autorizar la salida.

    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Procedimientos para la entrega de mercancías


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img18.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0

        p.mb-2(data-aos="fade-right") La entrega de mercancías comprende las actividades necesarias para poner los productos a disposición del destinatario autorizado, de acuerdo con las condiciones establecidas.
        p.mb-3 Antes de efectuarla, se verifica la información del destinatario, la documentación correspondiente y las condiciones de la carga. 
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-4.p-3
            p.mb-0 Una vez recibidas las mercancías, se registra la confirmación de entrega mediante los mecanismos definidos por la organización, como comprobantes físicos o registros electrónicos.
        p.mb-0 Cuando se presentan diferencias, daños o incumplimientos, las novedades deben documentarse para facilitar su seguimiento y gestión.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de transporte entrega un pedido a un establecimiento comercial. El responsable verifica la identificación del destinatario y registra la recepción de las mercancías. Durante la entrega se identifica un paquete deteriorado, por lo que se documenta la novedad y se inicia el procedimiento correspondiente.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-20.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex.order-3
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-1
              h4.mb-2 Video sugerido. Módulo 3: procesos logísticos en la recepción, almacenamiento y despacho de mercancías
              p.mb-0 Para fortalecer los conocimientos sobre los procedimientos técnicos aplicados a las operaciones logísticas, se invita a consultar el siguiente video como complemento de los contenidos desarrollados.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-2
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=BYFAeVPFuto&t=2078s'" target="_blank")
                span Ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1.order-lg-2
              h4.mb-2 Lectura sugerida. Preparación de pedidos
              p.mb-0 Para profundizar en las actividades y procedimientos relacionados con la preparación de mercancías, se recomienda consultar el siguiente material de formación.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-3.order-md-2.order-lg-3
              a.boton.color-acento-botones(:href="'https://webfacil.tinet.cat/usuaris/sbf/ESP_Preparacion_de_Pedidos_MF1326_1_20221212201950.pdf'" target="_blank")
                span Ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex.order-lg-1
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
