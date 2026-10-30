<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Documentación para la preparación y despacho

    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La programación del despacho de mercancías permite organizar las actividades logísticas, asignar recursos y establecer prioridades de acuerdo con los pedidos recibidos y los compromisos de entrega. Su adecuada aplicación contribuye a optimizar la capacidad operativa, reducir tiempos de espera y coordinar las actividades de preparación, verificación, cargue y distribución.


    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto de programación


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0

        p.mb-3(data-aos="fade-right") La programación del despacho es el proceso mediante el cual se establecen las actividades, los responsables, los recursos y los tiempos necesarios para preparar y despachar mercancías durante un período determinado.
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-4.p-3
            p.mb-0 Su finalidad es coordinar las operaciones de almacenamiento, preparación de pedidos, verificación y transporte, considerando la disponibilidad de recursos y las condiciones de entrega acordadas con los clientes.
        .row.align-items-center.mb-0
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema3/img03.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-2 Para desarrollar una programación adecuada, es necesario tener en cuenta el volumen de pedidos, las prioridades de atención, la capacidad operativa, las características de las mercancías y los horarios establecidos para el despacho.
            p.mb-0 Esta organización permite anticipar necesidades, reducir interrupciones y realizar ajustes cuando se presentan cambios en la operación.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora recibe pedidos con diferentes fechas de entrega. El responsable logístico organiza las actividades según su prioridad, asigna personal para la preparación de mercancías y coordina los vehículos disponibles. De esta manera, establece una programación que facilita el cumplimiento de los despachos.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Métodos de programación


    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-09.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0(data-aos="fade-right") Los métodos de programación son las formas utilizadas para organizar las actividades de despacho según criterios operativos previamente establecidos. Su selección depende del volumen de pedidos, la capacidad disponible y las condiciones de distribución.

    p.mb-4 A continuación, se presenta una tabla en donde se detalla los métodos de programación del despacho de mercancías más utilizados y su aplicación logística:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Métodos de programación de despacho de mercancías
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Método
                th Descripción
                th Aplicación logística
            tbody
              tr
                td Por prioridad
                td Organiza los pedidos según su urgencia, fecha de entrega o nivel de servicio.
                td Atender primero los pedidos con compromisos de entrega más próximos.
              tr
                td Por horarios
                td Distribuye las actividades en franjas de tiempo previamente definidas.
                td Establecer turnos de preparación y horarios de cargue de vehículos.
              tr
                td Por rutas
                td Agrupa los pedidos según los destinos y recorridos de distribución.
                td Organizar los despachos correspondientes a una misma zona geográfica.
              tr
                td Por capacidad
                td Asigna las actividades considerando los recursos disponibles.
                td Distribuir pedidos según la disponibilidad de personal, equipos y vehículos.



    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-0.p-4
          p.mb-0 La elección del método debe responder a las necesidades de la operación. En algunos casos, las organizaciones combinan varios métodos para mejorar la coordinación y aprovechar los recursos disponibles.


    .bg-fondo-11.px-lg-5.px-4.py-lg-4.py-2.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora programa sus despachos por rutas y horarios. Durante la mañana prepara los pedidos destinados a establecimientos cercanos y, posteriormente, organiza los envíos hacia otras ciudades. Esta combinación facilita la asignación de vehículos y el cumplimiento de los horarios de salida.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Técnicas de programación


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img05.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-2 Las técnicas de programación son herramientas y procedimientos que permiten aplicar los métodos seleccionados, organizar las actividades y controlar su ejecución.
        p.mb-0 Entre las principales técnicas utilizadas en el despacho de mercancías se encuentran:



    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in", alt="").mx-auto
      .col-lg-9.mb-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Elaboración de cronogramas")
            p.mb-0 Establece las actividades, los responsables y los tiempos previstos para su ejecución. Permite organizar los recursos disponibles, coordinar las tareas y controlar el cumplimiento de los plazos establecidos.
          .tarjeta(titulo="Programación diaria de pedidos")
            p.mb-0 Organiza las órdenes que deben prepararse y despacharse durante una jornada de trabajo. Considera las cantidades solicitadas, la disponibilidad de inventario, los horarios de despacho y las fechas de entrega para garantizar una atención oportuna.
          .tarjeta(titulo="Asignación de rutas")
            p.mb-0 Distribuye los pedidos entre los vehículos disponibles, considerando los destinos, las distancias, las condiciones de entrega y la capacidad de carga. Su objetivo es optimizar los recorridos, reducir los costos de transporte y cumplir los tiempos establecidos.
          .tarjeta(titulo="Priorización operativa")
            p.mb-0 Establece el orden de atención de los pedidos según los compromisos de servicio y las necesidades de la operación. Tiene en cuenta factores como la urgencia, las fechas límite, las características de la mercancía y los requerimientos especiales de los clientes.
          .tarjeta(titulo="Distribución de cargas de trabajo")
            p.mb-0 Asigna las tareas entre el personal disponible para evitar sobrecargas y tiempos de espera innecesarios. Considera las habilidades de los trabajadores, el volumen de actividades y los recursos disponibles para mantener un flujo de trabajo equilibrado y eficiente.

    .row.mb-lg-4.mb-0.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 Estas técnicas pueden apoyarse en sistemas de información que facilitan la actualización de los registros, la coordinación entre áreas y la atención de novedades durante la operación.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora elabora diariamente un cronograma de despacho en el que registra los pedidos, las actividades, los responsables y los horarios previstos. Durante la jornada, el coordinador logístico actualiza la programación cuando se presentan retrasos o cambios en las prioridades de entrega. 

    .row.mb-lg-4.mb-0.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 La utilización de sistemas de información fortalece la aplicación de estas técnicas, ya que permite actualizar la programación en tiempo real y mejorar la comunicación entre las áreas involucradas.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Tiempos de operación




    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Los tiempos de operación corresponden a la duración requerida para desarrollar las actividades relacionadas con la preparación y el despacho de mercancías. Su medición permite evaluar el cumplimiento de la programación e identificar oportunidades para mejorar la productividad.

    p.mb-4 Entre los tiempos que normalmente se controlan se encuentran los descritos en la siguiente tabla:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Tiempos de operación en el despacho de mercancías
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Actividad
                th Tiempo de operación
            tbody
              tr
                td Recepción del pedido
                td Período necesario para recibir, registrar y validar la solicitud.
              tr
                td Preparación de mercancías
                td Tiempo empleado en localizar y recolectar los productos solicitados.
              tr
                td Verificación
                td Duración de la revisión de referencias, cantidades y condiciones de los productos.
              tr
                td Embalaje
                td Tiempo requerido para acondicionar, proteger e identificar las mercancías.
              tr
                td Cargue
                td Período utilizado para organizar e introducir las mercancías en el vehículo.
              tr
                td Despacho
                td Tiempo destinado a completar los controles de salida y autorizar la expedición del envío.
              tr
                td Entrega
                td Tiempo transcurrido desde la salida del envío hasta su recepción por el destinatario.


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img08.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-2 El registro y análisis de estos tiempos permite identificar retrasos, actividades que requieren ajustes y posibles cuellos de botella.
        p.mb-0 Asimismo, facilita el establecimiento de tiempos de referencia y el seguimiento de indicadores relacionados con el cumplimiento de la programación.


    .bg-fondo-11.px-lg-5.px-4.py-lg-4.py-2.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora identifica que la verificación de pedidos requiere más tiempo del previsto. Después de revisar el procedimiento, reorganiza las estaciones de trabajo y mejora la identificación de los productos. Estas acciones permiten disminuir los tiempos de verificación sin afectar la exactitud de los despachos.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5	Fases de la programación del despacho

    .container
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-09.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0(data-aos="fade-right") La programación del despacho comprende cinco fases que permiten organizar las actividades logísticas y realizar seguimiento a su ejecución. Cada fase contribuye al cumplimiento de los compromisos de entrega.

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img16.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase 1. Recepción de la información").align-content-center
            p.mb-0 Se recopilan y verifican los datos de los pedidos, las cantidades, los destinos y las condiciones de entrega establecidas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase 2. Planeación de actividades").align-content-center
            p.mb-0 Se determinan las tareas, prioridades, tiempos y recursos necesarios para desarrollar las operaciones de despacho.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase 3. Asignación de recursos").align-content-center
            p.mb-0 Se distribuyen el personal, los equipos, los vehículos y los materiales requeridos para ejecutar las actividades programadas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase 4. Ejecución del despacho").align-content-center
            p.mb-0 Se desarrollan las actividades de preparación, verificación, embalaje, cargue y salida de las mercancías, conforme a la programación establecida.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fase 5. Seguimiento y control").align-content-center
            p.mb-0 Se verifica el cumplimiento de las actividades programadas, se registran novedades y se establecen ajustes cuando es necesario.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-04.p-4
          p.mb-0 La aplicación organizada de estas fases permite coordinar las operaciones, aprovechar los recursos disponibles y responder oportunamente a las necesidades del despacho. 


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora recibe pedidos para diferentes destinos y organiza su programación diaria. El responsable logístico verifica las solicitudes, establece prioridades, asigna personal y vehículos, y coordina la ejecución de los despachos. Durante la jornada, realiza seguimiento a los tiempos establecidos y ajusta la programación cuando se presentan novedades.



    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-20.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex.order-3
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-1
              h4.mb-2 Video sugerido. Programación de despachos
              p.mb-0 Para fortalecer los conocimientos sobre la organización y programación de las operaciones logísticas, se invita a consultar el siguiente video como complemento de los contenidos abordados en el capítulo:
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-2
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=6zEm-9rIvus'" target="_blank")
                span Ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1.order-lg-2
              h4.mb-2 Lectura sugerida. Gestión logística integral
              p.mb-0 Para profundizar en la planificación de las operaciones de distribución, se recomienda consultar el apartado Planificación y utilización de rutas de transporte, páginas 230 a 235, del libro Gestión logística integral.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-3.order-md-2.order-lg-3
              a.boton.color-acento-botones(:href="'https://www.fesc.edu.co/portal/archivos/e_libros/logistica/gestion_logistica.pdf'" target="_blank")
                span Ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex.order-lg-1
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
