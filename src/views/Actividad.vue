<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificación y control del despacho de mercancías.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conocimientos relacionados con la gestión de proveedores, los recursos logísticos, la programación del despacho, los procedimientos técnicos y el control de las operaciones aplicados al despacho de mercancías.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Felicitaciones! Ha aprobado satisfactoriamente la actividad de aprendizaje. Su resultado evidencia la apropiación de los conceptos relacionados con la verificación y el control del despacho de mercancías. Lo invitamos a continuar con el desarrollo de las siguientes actividades del componente formativo.',
      mensaje_reprobado:
        'Aún puede fortalecer sus conocimientos. Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con proveedores, recursos, programación, procedimientos técnicos, verificación, control y mejora del despacho de mercancías. Posteriormente podrá presentar nuevamente la actividad para evidenciar el logro de los resultados de aprendizaje.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal propósito de evaluar periódicamente a los proveedores dentro del proceso de despacho de mercancías?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de proveedores contratados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el presupuesto destinado a compras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar su desempeño y garantizar el cumplimiento de los requisitos de la operación logística.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los registros de abastecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La evaluación permite verificar el desempeño de los proveedores y garantizar la continuidad de las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con la gestión de proveedores en el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos corresponde a un recurso físico utilizado en el despacho de mercancías?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estanterías para almacenamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presupuesto anual de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Plan estratégico comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las estanterías hacen parte de los recursos físicos utilizados durante las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente los tipos de recursos utilizados en el despacho de mercancías.',
        },
        {
          id: 3,
          texto:
            '¿Qué aspecto debe considerarse prioritariamente al programar un despacho de mercancías?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño del logotipo empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El color del embalaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La distribución del mobiliario administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La disponibilidad de recursos, los tiempos de entrega y las prioridades de los pedidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La programación del despacho considera recursos, tiempos y prioridades para garantizar el cumplimiento de las entregas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con la programación del despacho de mercancías.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal de los procedimientos técnicos durante el despacho de mercancías?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar estrategias publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estandarizar las actividades para garantizar un despacho seguro y conforme a los requisitos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el número de pedidos diarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los controles del sistema de gestión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los procedimientos técnicos permiten ejecutar las operaciones de forma estandarizada y segura.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los procedimientos técnicos para el despacho.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal función de los recursos humanos en el proceso de despacho?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Planificar, coordinar y ejecutar las actividades logísticas conforme a los procedimientos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir los recursos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar las políticas tributarias de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar exclusivamente informes financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El talento humano es responsable de ejecutar y controlar las actividades logísticas del despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los recursos humanos en las operaciones logísticas.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta facilita el registro y la consulta de información en tiempo real durante las operaciones de despacho?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libro contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formato de vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sistema de gestión de almacenes (Warehouse Management System - WMS).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organigrama institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El WMS facilita el control y la actualización de la información logística en tiempo real.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los recursos tecnológicos utilizados en el despacho de mercancías.',
        },
        {
          id: 7,
          texto:
            '¿Qué actividad hace parte del procedimiento de verificación antes de autorizar el despacho de mercancías?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar el presupuesto anual de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar campañas promocionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualizar el reglamento interno de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprobar que las referencias, cantidades y documentos correspondan al pedido preparado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La verificación confirma que la mercancía y la documentación coincidan con el pedido antes del despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los procedimientos de verificación del despacho.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el propósito principal de establecer tiempos de operación durante la programación del despacho?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de actividades administrativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y controlar la ejecución de las actividades para cumplir los tiempos de entrega establecidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la programación del transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los controles de calidad del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los tiempos de operación permiten planificar y controlar el desarrollo eficiente del despacho de mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con la programación del despacho de mercancías.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes actividades corresponde a la fase de asignación de recursos en la programación del despacho?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distribuir el personal, los equipos y los vehículos necesarios para ejecutar las operaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar campañas de mercadeo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar el portafolio de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcular los impuestos de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La asignación de recursos garantiza la disponibilidad de los medios necesarios para ejecutar el despacho.',
          mensaje_incorrecto:
            'Revise nuevamente las fases de la programación del despacho.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes documentos evidencia el desarrollo de las operaciones y las novedades presentadas durante el despacho?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual de identidad corporativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organigrama institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro logístico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El registro logístico documenta las operaciones realizadas y las novedades ocurridas durante el despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los registros de información y novedades.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el principal objetivo del seguimiento del despacho de mercancías?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar informes financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar nuevos productos para el mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Monitorear el cumplimiento de la programación e identificar oportunamente las novedades de la operación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la evaluación de proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El seguimiento permite controlar el desarrollo del despacho e identificar oportunamente cualquier novedad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con el seguimiento del despacho.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la finalidad de utilizar indicadores de control en el proceso de despacho?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la cantidad de documentos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Medir el desempeño de las operaciones y apoyar la toma de decisiones para la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los procedimientos técnicos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el seguimiento de las entregas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los indicadores permiten evaluar el desempeño de las operaciones logísticas y fortalecer la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los indicadores de control.',
        },
        {
          id: 13,
          texto:
            'Cuando durante el despacho se identifica una diferencia entre la mercancía preparada y la orden de entrega, la organización debe:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuar el despacho sin registrar la situación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la documentación del pedido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Informar únicamente al cliente una vez finalice la entrega.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar la novedad y aplicar el procedimiento establecido para corregir la situación antes de la entrega.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las novedades deben registrarse y atenderse conforme a los procedimientos definidos por la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con la verificación y el control del despacho.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes acciones corresponde a una medida preventiva dentro del proceso de despacho?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Capacitar periódicamente al personal para reducir errores operativos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Esperar a que ocurran fallas para tomar decisiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los controles establecidos por la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender el seguimiento de las operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La capacitación fortalece las competencias del personal y contribuye a prevenir errores durante el despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con las acciones preventivas en el proceso de despacho.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el principal propósito de incorporar innovación tecnológica en el proceso de despacho de mercancías?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de actividades manuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Optimizar las operaciones, mejorar la trazabilidad y fortalecer el control del proceso logístico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir totalmente al talento humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la programación de las operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La innovación tecnológica mejora la eficiencia, la trazabilidad y el control de las operaciones de despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con la innovación aplicada al despacho de mercancías.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes prácticas contribuye al mejoramiento continuo del proceso de despacho de mercancías?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar las actividades sin registrar los resultados obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener los mismos procedimientos sin evaluar su eficacia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar los indicadores de desempeño e implementar acciones de mejora cuando se identifiquen oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar los controles establecidos para agilizar el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis de indicadores permite identificar oportunidades de mejora y fortalecer el desempeño del proceso logístico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con el control y la mejora del proceso de despacho.',
        },
        {
          id: 17,
          texto:
            '¿Qué criterio es fundamental para seleccionar un proveedor que participe en el proceso de despacho de mercancías?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su capacidad para cumplir los requisitos de calidad, tiempos de entrega y condiciones acordadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su ubicación geográfica únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de empleados administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La antigüedad de la empresa sin considerar su desempeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La selección de proveedores debe basarse en su capacidad para cumplir los requisitos definidos por la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los criterios para la selección de proveedores.',
        },
        {
          id: 18,
          texto:
            'Si durante la entrega el cliente informa que la cantidad recibida no coincide con la orden de despacho, ¿cuál debe ser la actuación correcta?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalizar la entrega sin verificar la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solicitar al cliente que modifique la orden de despacho.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Esperar a que finalice la jornada para informar la novedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar la información, registrar la novedad y aplicar el procedimiento establecido por la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Toda diferencia detectada durante la entrega debe verificarse, registrarse y atenderse conforme a los procedimientos establecidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con la verificación de la entrega y el registro de novedades.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito principal de registrar las novedades presentadas durante el despacho de mercancías?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la cantidad de documentos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener la trazabilidad de la operación y facilitar la implementación de acciones correctivas y preventivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la programación del despacho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la evaluación de los procesos logísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El registro de novedades permite mantener la trazabilidad del proceso y apoyar la mejora continua de las operaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con los registros de información y novedades del despacho.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el beneficio más importante de aplicar buenas prácticas en el control del despacho de mercancías?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la participación del talento humano en el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir el uso de herramientas tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalecer la eficiencia, la confiabilidad y la satisfacción del cliente mediante operaciones controladas y estandarizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de realizar verificaciones antes de la entrega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las buenas prácticas permiten optimizar el proceso de despacho, reducir errores y ofrecer un mejor servicio al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido relacionado con el control y la mejora continua del proceso de despacho.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
