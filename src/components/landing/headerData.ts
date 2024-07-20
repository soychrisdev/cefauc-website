interface HeaderData {
  title: string;
  href: string;
  description: string;
  isCard: boolean;
  id: number;
}

interface navbarItems {
  title: string;
  items: HeaderData[];
  id: number;
}

interface NavbarTitulos {
  title: string;
  id: number;
}

export const navbarTitulos: NavbarTitulos[] = [
  {
    title: "Nuestra iglesia",
    id: 1
  },
  {
    title: "Grupos",
    id: 2
  },
  {
    title: "Crecimiento",
    id: 3
  },
  {
    title: "Contacto",
    id: 4
  },

]

export const navbarItems: navbarItems[] = [
  {
    title: "nuestra-iglesia",
    items: [{
      title: "Historia",
      href: "/historia",
      description:
        "Conoce nuestra historia y como Dios nos ha guiado hasta el día de hoy.",
      isCard: true,
      id: 1
    },
    {
      title: "Quiero ser parte",
      href: "/quiero-ser-parte",
      description:
        "Conoce como ser parte de nuestra iglesia.",
      isCard: false,
      id: 1
    },
    {
      title: "Calendario",
      href: "/calendario",
      description:
        "Conoce nuestros eventos y actividades.",
      isCard: false,
      id: 1
    }],
    id: 1
  },
  {
    title: "grupos",
    items: [
      {
        title: "Damas",
        href: "/damas",
        description:
          "Conoce nuestro grupo de damas y participa en actividades diseñadas especialmente para ti.",
        isCard: false,
        id: 2
      },
      {
        title: "Jóvenes",
        href: "/jovenes",
        description:
          "Conoce nuestro grupo de jóvenes y únete a eventos emocionantes y enriquecedores.",
        isCard: false,
        id: 2
      },
      {
        title: "Escuela dominical",
        href: "/escuela-dominical",
        description:
          "Descubre nuestra escuela dominical y aprende de la Palabra de Dios de una manera interactiva y dinámica.",
        isCard: false,
        id: 2
      },
      {
        title: "Alabanza",
        href: "/alabanza",
        description:
          "Únete a nuestro grupo de alabanza y participa en momentos de adoración y alabanza a Dios.",
        isCard: false,
        id: 2
      },
      {
        title: "Danza",
        href: "/danza",
        description:
          "Explora nuestro grupo de danza y expresa tu adoración a través del arte del movimiento.",
        isCard: false,
        id: 2
      },
      {
        title: "Adolecentes",
        href: "/adolecentes",
        description:
          "Conoce nuestro grupo de adolescentes y vive experiencias significativas junto a tus compañeros.",
        isCard: false,
        id: 2
      },
      {
        title: "Niños",
        href: "/ninos",
        description:
          "Descubre nuestro grupo de niños y acompáñalos en su crecimiento espiritual y desarrollo personal.",
        isCard: false,
        id: 2
      },
      {
        title: "Evangelismo",
        href: "/evangelismo",
        description:
          "Participa en nuestro grupo de evangelismo y comparte el amor de Cristo con aquellos que te rodean.",
        isCard: false,
        id: 2
      },
      {
        title: "Familias",
        href: "/familias",
        description:
          "Únete a nuestro grupo de familias y fortalece los lazos familiares a través de actividades y enseñanzas.",
        isCard: false,
        id: 2
      }
    ],
    id: 2
  },
  {
    title: "crecimiento",
    //items:escuela dominical, ibc, video-predicaciones, podcast, radio avivamiento chile
    items: [
      {
        title: "Escuela dominical",
        href: "/escuela-dominical",
        description:
          "Descubre nuestra escuela dominical y aprende de la Palabra de Dios de una manera interactiva y dinámica.",
        isCard: false,
        id: 3
      },
      {
        title: "IBC",
        href: "/ibc",
        description:
          "Conoce nuestro instituto bíblico y aprende de la Palabra de Dios de una manera interactiva y dinámica.",
        isCard: false,
        id: 3
      },
      {
        title: "Video predicaciones",
        href: "/video-predicaciones",
        description:
          "Disfruta de nuestras predicaciones en video.",
        isCard: false,
        id: 3
      },
      {
        title: "Podcast",
        href: "/podcast",
        description:
          "Disfruta de nuestras predicaciones en audio.",
        isCard: false,
        id: 3
      },
      {
        title: "Radio avivamiento chile",
        href: "/radio-avivamiento-chile",
        description:
          "Disfruta de nuestra radio online.",
        isCard: false,
        id: 3
      }
    ],
    id: 3
  },
  {
    title: "contacto",
    //items: contacto, consejeria, oracion, reuniones
    items: [
      {
        title: "Contacto",
        href: "/contacto",
        description:
          "Contáctanos para cualquier consulta o solicitud.",
        isCard: false,
        id: 3
      },
      {
        title: "Consejería",
        href: "/consejeria",
        description:
          "Recibe apoyo y orientación en situaciones difíciles.",
        isCard: false,
        id: 3
      },
      {
        title: "Oración",
        href: "/oracion",
        description:
          "Únete a nuestras sesiones de oración y comunión.",
        isCard: false,
        id: 3
      },
      {
        title: "Reuniones",
        href: "/reuniones",
        description:
          "Participa en nuestras reuniones y eventos especiales.",
        isCard: false,
        id: 3
      }
    ],
    id: 4
  }
]