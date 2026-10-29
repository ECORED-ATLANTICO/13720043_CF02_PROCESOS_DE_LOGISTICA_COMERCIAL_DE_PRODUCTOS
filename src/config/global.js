export default {
  global: {
    Name: 'Verificación y control del despacho de mercancías',
    Description:
      'El componente formativo desarrolla los fundamentos para la verificación y el control del despacho de mercancías mediante la aplicación de procedimientos técnicos, la programación de las operaciones y la gestión de proveedores y recursos. Aborda la verificación de la entrega, el control del flujo de bienes y servicios, la generación de registros e información de novedades, así como el seguimiento de las operaciones mediante indicadores, fortaleciendo la trazabilidad, la eficiencia y la mejora continua en los procesos de distribución.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proveedores para el despacho de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de proveedor',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de proveedores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Lista de proveedores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Criterios para la selección de proveedores',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos para el despacho de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de recursos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de recursos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recursos humanos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Recursos físicos y tecnológicos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Recursos financieros',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programación del despacho de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de programación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de programación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de programación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tiempos de operación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Fases de la programación del despacho',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimientos técnicos para el despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de procedimientos técnicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de procedimientos técnicos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procedimientos de preparación del despacho',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Procedimientos de verificación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Procedimientos para la entrega de mercancías',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Control y mejora del proceso de despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Seguimiento del despacho',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Indicadores de control',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Acciones correctivas y preventivas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Innovación en los procesos de despacho',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Buenas prácticas para la mejora continua',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62110009_CF02_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'Medidas implementadas para eliminar las causas de una no conformidad detectada durante el proceso de despacho.',
    },
    {
      termino: 'Acciones preventivas',
      significado:
        'Medidas orientadas a evitar la ocurrencia de fallas o desviaciones en las operaciones de despacho.',
    },
    {
      termino: 'Buenas prácticas logísticas',
      significado:
        'Conjunto de recomendaciones y procedimientos que contribuyen a mejorar la seguridad, eficiencia y calidad del proceso de despacho.',
    },
    {
      termino: 'Despacho de mercancías',
      significado:
        'Proceso de preparación, verificación y entrega de mercancías conforme a los procedimientos y acuerdos establecidos.',
    },
    {
      termino: 'Flujo de bienes',
      significado:
        'Movimiento de mercancías desde el origen hasta el destino, de acuerdo con la programación logística.',
    },
    {
      termino: 'Indicadores logísticos',
      significado:
        'Medidas utilizadas para evaluar el desempeño de las operaciones de despacho y apoyar la mejora continua.',
    },
    {
      termino: 'Lista de proveedores',
      significado:
        'Registro organizado de los proveedores autorizados para suministrar bienes o prestar servicios relacionados con la operación logística.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso permanente de evaluación y optimización de las actividades logísticas para incrementar su eficiencia y calidad.',
    },
    {
      termino: 'Novedades',
      significado:
        'Situaciones o eventos que afectan el desarrollo normal del proceso de despacho y requieren registro y seguimiento.',
    },
    {
      termino: 'Procedimientos técnicos',
      significado:
        'Conjunto de actividades estandarizadas que orientan la preparación, verificación y entrega de mercancías.',
    },
    {
      termino: 'Programación del despacho',
      significado:
        'Organización de las actividades, recursos y tiempos necesarios para ejecutar el despacho de mercancías.',
    },
    {
      termino: 'Proveedor',
      significado:
        'Persona natural o jurídica que suministra bienes o servicios requeridos para el desarrollo de las operaciones logísticas.',
    },
    {
      termino: 'Recursos logísticos',
      significado:
        'Elementos humanos, físicos, tecnológicos y financieros necesarios para ejecutar el proceso de despacho.',
    },
    {
      termino: 'Registro logístico',
      significado:
        'Documento físico o digital que evidencia la ejecución de las operaciones y las novedades presentadas durante el despacho.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Actividad mediante la cual se monitorea el cumplimiento de las operaciones programadas y los resultados obtenidos.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'Conjunto de políticas, procesos y procedimientos que orientan el control y la mejora de las operaciones de despacho.',
    },
    {
      termino: 'Tiempos de operación',
      significado:
        'Periodos establecidos para ejecutar las actividades de preparación, verificación y entrega de mercancías.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para identificar y realizar el seguimiento de las mercancías y de la información asociada durante el proceso de despacho.',
    },
    {
      termino: 'Verificación',
      significado:
        'Comprobación de que las mercancías, la documentación y las condiciones de entrega cumplen con los requisitos establecidos.',
    },
    {
      termino: 'Verificación de la entrega',
      significado:
        'Confirmación del cumplimiento de las condiciones pactadas para la entrega de mercancías al cliente o destinatario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Bowersox, D. J., Closs, D. J., & Cooper, M. B. (2013). Administración y logística en la cadena de suministros (2.ª ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2008). Administración de la cadena de suministro: estrategia, planeación y operación (3.ª ed.). Pearson Educación.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Christopher, M. (2016). Logística y gestión de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2022). Manual de buenas prácticas logísticas.',
      link: 'https://ccs.org.co/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2024). Materiales de formación: Gestión logística y despacho de mercancías.',
      link: 'https://www.sena.edu.co/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2024). Biblioteca Digital SENA.',
      link: 'https://biblioteca.sena.edu.co/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático logística',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Experto temático comercio y servicio',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
