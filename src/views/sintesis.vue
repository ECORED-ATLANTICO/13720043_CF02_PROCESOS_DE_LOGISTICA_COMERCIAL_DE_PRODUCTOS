<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

   
    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/intro/img03.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El componente formativo Verificación y control del despacho de mercancías desarrolla los fundamentos relacionados con la gestión de proveedores para el abastecimiento de las operaciones de despacho, la administración de los recursos humanos, físicos, tecnológicos y financieros requeridos para su ejecución, y la programación de las actividades mediante métodos, técnicas, tiempos y fases de operación. 
        
             
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Asimismo, aborda la aplicación de procedimientos técnicos para la preparación, verificación y entrega de mercancías, y finaliza con el seguimiento y control del proceso mediante indicadores, acciones correctivas y preventivas, innovación y buenas prácticas orientadas al fortalecimiento de la trazabilidad, la eficiencia y la mejora continua de las operaciones logísticas.
        

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo Verificación y control del despacho de mercancías aborda la gestión de proveedores, la administración de recursos y la programación de actividades logísticas. Incluye procedimientos técnicos de preparación, verificación y entrega de mercancías, así como indicadores de seguimiento, acciones correctivas y preventivas, innovación y buenas prácticas para fortalecer la trazabilidad, la eficiencia operativa y la mejora continua de los procesos de despacho.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
