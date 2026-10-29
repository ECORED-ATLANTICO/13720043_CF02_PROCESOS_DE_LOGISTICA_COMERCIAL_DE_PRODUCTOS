<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/intro/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La verificación y el control del despacho de mercancías constituyen actividades fundamentales para garantizar que los bienes sean entregados conforme a las condiciones pactadas entre la organización y sus clientes, asegurando el cumplimiento de los tiempos, cantidades, especificaciones y requisitos establecidos durante el proceso logístico. Estas actividades permiten mantener la trazabilidad de las operaciones, fortalecer el control del flujo de mercancías y generar información confiable para la toma de decisiones.



    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/intro/img02.svg", style="max-width: 120px").mx-auto
      .col-lg
        p.mb-0 En este componente formativo se desarrollan los conocimientos relacionados con la gestión de proveedores, la administración de los recursos necesarios para el despacho, la programación de las operaciones y la aplicación de procedimientos técnicos que respaldan la preparación, verificación y entrega de mercancías. Asimismo, se abordan los mecanismos para realizar el seguimiento de las operaciones logísticas mediante indicadores de control, el registro de novedades y la implementación de acciones orientadas a la mejora continua de los procesos.

    .container
      .row.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-02.p-4
            p.mb-0 Durante el desarrollo de los contenidos, el aprendiz fortalecerá sus competencias para verificar la entrega y el control del flujo de bienes y servicios, así como para generar registros de información y novedades asociados a la distribución de mercancías, de acuerdo con los métodos de preparación de pedidos, los procedimientos establecidos por la organización y el sistema de gestión aplicable.

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
