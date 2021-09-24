import especieskuannachta from "../../../../assets/images/especies_kuannachta.png";
import especieshryeth from "../../../../assets/images/especies_hryeth.webp";
import especieshumanos from "../../../../assets/images/especies_humanos.webp";
import especiesnidanyira from "../../../../assets/images/especies_nidanyira.png";
import especiesdunhannar from "../../../../assets/images/especies_dunhannar.webp";
import especiestaengryza from "../../../../assets/images/especies_taengryza.png";
import especiesugara from "../../../../assets/images/especies_ugara.png";
import especiesxyarjar from "../../../../assets/images/especies_xyarjar.png";
import kuannachtaMainTitle from "../../../../assets/images/especies_kuannachta__titulo.jpg";
import kuannachtaDescription from "../../../../assets/images/especies_kuannachta__description.png";
import kuannachtaDescriptionImage from "../../../../assets/images/species_description_subtitle__kuannachta.png";
import kuannachtaMaleDescriptionImage from "../../../../assets/images/species_kuannachta_male.webp";
import kuannachtaFemaleDescriptionImage from "../../../../assets/images/species_kuannachta_female.webp";
import kuannachtaQuoter1 from "../../../../assets/images/kuannachta_quoter_khairthyl.png";
import kuannachtaHeraldicNoImage from "../../../../assets/images/heraldica/kuannachta/heraldica_kuannachta_no_image.png";
// Ethnicities
import kuannachtaEthnicityImmalar from "../../../../assets/images/heraldica/kuannachta/etnia_immalar.png";
import kuannachtaEthnicityKhazal from "../../../../assets/images/heraldica/kuannachta/etnia_khazal.png";
import kuannachtaEthnicityDrynhad from "../../../../assets/images/heraldica/kuannachta/etnia_drynhad.png";
import kuannachtaEthnicityKryvadral from "../../../../assets/images/heraldica/kuannachta/etnia_kryvadral.png";
// Cultures
import kuannachtaCultureAzavanar from "../../../../assets/images/heraldica/kuannachta/cultura_azavanar.png";
import kuannachtaCultureKarhyndra from "../../../../assets/images/heraldica/kuannachta/cultura_karhyndra.png";
import kuannachtaCultureNathalakku from "../../../../assets/images/heraldica/kuannachta/cultura_nathalakku.png";
import kuannachtaCultureSazdakku from "../../../../assets/images/heraldica/kuannachta/cultura_sazakkdu.png";
// Continents
import gahaedhaContinent from "../../../../assets/images/continents/gahaedha-icon.png";
// Habitats
import shallowCavernIcon from "../../../../assets/images/habitats/shallow-cavern-icon.png";
import deepCavernIcon from "../../../../assets/images/habitats/deep-cavern-icon.png";
import urbanIcon from "../../../../assets/images/habitats/urban-icon.png";
// Population densities
import veryLowPopulationDensity from "../../../../assets/images/population_densities/very-low__population-density.png";
import lowPopulationDensity from "../../../../assets/images/population_densities/low__population-density.png";
import mediumPopulationDensity from "../../../../assets/images/population_densities/medium__population-density.png";
import highPopulationDensity from "../../../../assets/images/population_densities/high__population-density.png";
import veryHighPopulationDensity from "../../../../assets/images/population_densities/very-high__population-density.png";

export const species: any[] = [
  {
    name: "dunhannar",
    source: especiesdunhannar,
  },
  {
    name: "humanos",
    source: especieshumanos,
  },
  {
    name: "hryeth",
    source: especieshryeth,
  },
  {
    description_image: kuannachtaDescription,
    description: [
      "Mamíferos humanoides endogeoplacentarios, delgados pero muy fuertes, de movimientos gráciles y baja estatura. Pueden ver tanto en la oscuridad como con la luz del sol. Son capaces de orientarse en cualquier lugar, ya que sienten la presencia de unas líneas de energía - magnetismo - que ellos conocen como Pulsos de la Tierra. Tanto la piel como el pelo poseen un alto contenido en sílice y otros minerales que les otorgan sus características especiales y cierto aspecto pétreo. Su conexión con la roca es tal que para que los fetos se vuelvan conscientes, sus madres deben entrar en las Piedras Natalicias: rocas de origen mítico de las que surgieron en este mundo según sus creencias y que son extraordinariamente raras.",
    ],
    description_data: {
      female: {
        features: {
          description:
            "Las hembras kuannachta presentan rasgos son más suaves, y en general, su figura es mucho más gracil, y sus movimientos más elegantes que los de los machos. Su tendencia a la petrificación dérmica aumenta marcadamente con la edad, por lo que si no hacen ejercicio con regularidad en esa época de sus vidas, se vuelven cada más lentas e inmóviles. Aparte de presentar vello silicificado en la cabeza que, a diferencia de los machos, les sale de los laterales de la parte superior del cráneo, al dar a luz en las Piedras Natalicias comienzan a salirles mechones más cortos en brazos y abdomen que son altamente considerados como síbolo de resistencia y fuerza vital.",
          description_traits: [
            {
              label: "Agilidad",
              value: "++",
            },
            {
              label: "Canalizar energía espiritual",
              value: "+",
            },
            {
              label: "Orientación",
              value: "+",
            },
            {
              label: "Resiliencia fisiológica",
              value: "++",
            },
            {
              label: "Termovisión",
              value: "++",
            },
          ],
          description_image: kuannachtaFemaleDescriptionImage,
          height: "1,40 - 1,50 m",
          weight: "40 - 55 kgs",
          skin_color: ["marfil", "pardo", "ceruleo", "negro"],
          hair_color: ["verde", "azul", "burdeos"],
          eye_color: ["verde", "azul", "rojo", "violeta"],
          facial_features:
            "7 espinas faciales: 4 malares prominentes, 3 maxilares",
          birth_rate: "3-4 crías",
          life_span: "110 - 120 años",
          sex: "female",
        },
      },
      male: {
        features: {
          description:
            "Las hembras kuannachta presentan rasgos son más suaves, y en general, su figura es mucho más gracil, y sus movimientos más elegantes que los de los machos. Su tendencia a la petrificación dérmica aumenta marcadamente con la edad, por lo que si no hacen ejercicio con regularidad en esa época de sus vidas, se vuelven cada más lentas e inmóviles. Aparte de presentar vello silicificado en la cabeza que, a diferencia de los machos, les sale de los laterales de la parte superior del cráneo, al dar a luz en las Piedras Natalicias comienzan a salirles mechones más cortos en brazos y abdomen que son altamente considerados como síbolo de resistencia y fuerza vital.",
          description_traits: [
            {
              label: "Fuerza",
              value: "+",
            },
            {
              label: "Mimetismo",
              value: "+",
            },
            {
              label: "Orientación",
              value: "+",
            },
            {
              label: "Resiliencia fisiológica",
              value: "+",
            },
            {
              label: "Termovisión",
              value: "+",
            },
          ],
          description_image: kuannachtaMaleDescriptionImage,
          height: "1,25 - 1,35 m",
          weight: "50 - 60 kgs",
          skin_color: ["marfil", "pardo", "ceruleo", "negro"],
          hair_color: ["verde", "azul", "violeta"],
          eye_color: ["verde", "azul", "rojo", "violeta"],
          facial_features:
            "5 espinas faciales: 2 malares, 3 maxilares prominentes",
          birth_rate: "-",
          life_span: "60 - 70 años",
          sex: "male",
        },
      },
    },
    description_title_image: kuannachtaDescriptionImage,
    ethnicities: [
      {
        continents: ["Gahaedha"],
        cultures: [
          {
            name: "Azavanar",
            icon: kuannachtaCultureAzavanar,
          },
          {
            name: "Karhyndra",
            icon: kuannachtaCultureKarhyndra,
          },
          {
            name: "Nathalakku",
            icon: kuannachtaCultureNathalakku,
          },
          {
            name: "Sazakkdu",
            icon: kuannachtaCultureSazdakku,
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ullamcorper justo eu porttitor. Phasellus non hendrerit mi. Fusce finibus quam feugiat ex ultrices, quis consequat augue lacinia. Integer aliquet consequat justo id dignissim. Quisque nec dui accumsan, posuere tellus non, ultricies erat. Morbi pulvinar arcu dolor, sit amet condimentum odio aliquam in. Integer efficitur laoreet tortor eget laoreet. Duis mauris dui, viverra commodo commodo vitae, porta eget purus. Pellentesque non blandit augue.",
        description_specifities: [],
        habitats: ["Cavernas", "Cavernas Profundas", "Urbano"],
        icon: kuannachtaEthnicityImmalar,
        name: "Immalar",
        presence: [
          {
            region: "Azavach",
            population_density: "very-low",
          },
          {
            region: "Kuarhyndara",
            population_density: "medium",
          },
          {
            region: "Nauthalarkka",
            population_density: "low",
          },
          {
            region: "Sazadakáuma",
            population_density: "low",
          },
        ],
      },
      {
        continents: ["Gahaedha"],
        cultures: [
          {
            name: "Darghu",
            icon: kuannachtaHeraldicNoImage,
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ullamcorper justo eu porttitor. Phasellus non hendrerit mi. Fusce finibus quam feugiat ex ultrices, quis consequat augue lacinia. Integer aliquet consequat justo id dignissim. Quisque nec dui accumsan, posuere tellus non, ultricies erat. Morbi pulvinar arcu dolor, sit amet condimentum odio aliquam in. Integer efficitur laoreet tortor eget laoreet. Duis mauris dui, viverra commodo commodo vitae, porta eget purus. Pellentesque non blandit augue.",
        description_specifities: [],
        habitats: ["Cavernas", "Cavernas Profundas", "Urbano"],
        icon: kuannachtaEthnicityKhazal,
        name: "Khazal",
        presence: [
          {
            region: "Darghod",
            population_density: "medium",
          },
        ],
      },
      {
        continents: ["Gahaedha"],
        cultures: [
          {
            name: "Vahrath",
            icon: kuannachtaHeraldicNoImage,
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ullamcorper justo eu porttitor. Phasellus non hendrerit mi. Fusce finibus quam feugiat ex ultrices, quis consequat augue lacinia. Integer aliquet consequat justo id dignissim. Quisque nec dui accumsan, posuere tellus non, ultricies erat. Morbi pulvinar arcu dolor, sit amet condimentum odio aliquam in. Integer efficitur laoreet tortor eget laoreet. Duis mauris dui, viverra commodo commodo vitae, porta eget purus. Pellentesque non blandit augue.",
        description_specifities: [],
        habitats: ["Cavernas", "Cavernas Profundas", "Urbano"],
        icon: kuannachtaEthnicityDrynhad,
        name: "Drynhad",
        presence: [
          {
            region: "Muathangur",
            population_density: "low",
          },
        ],
      },
      {
        continents: ["Gahaedha"],
        cultures: [
          {
            name: "Zathgul",
            icon: kuannachtaHeraldicNoImage,
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ullamcorper justo eu porttitor. Phasellus non hendrerit mi. Fusce finibus quam feugiat ex ultrices, quis consequat augue lacinia. Integer aliquet consequat justo id dignissim. Quisque nec dui accumsan, posuere tellus non, ultricies erat. Morbi pulvinar arcu dolor, sit amet condimentum odio aliquam in. Integer efficitur laoreet tortor eget laoreet. Duis mauris dui, viverra commodo commodo vitae, porta eget purus. Pellentesque non blandit augue.",
        description_specifities: [],
        habitats: ["Cavernas Profundas"],
        icon: kuannachtaEthnicityKryvadral,
        name: "Krývadral",
        presence: [
          {
            region: "Nakhrimgul",
            population_density: "low",
          },
        ],
      },
    ],
    name: "kuannachta",
    source: especieskuannachta,
    presentationalName: "Kuannachta",
    title_background: kuannachtaMainTitle,
    subtitle:
      "Los Kuannachta, los Hijos de Kuann, Señor de la Tierra, parecen estar siguiendo el destino de sus antiguos aliados Khalyva pues sus números decrecen continuamente. Las continuas guerras en el Mundo Sin Luz contra Hryeth y Xyarjar, han diezmado y mermado su población hasta el punto de hacerles prácticamente desaparecer del oeste del continente, donde antaño eran numerosos y temidos. Ahora sólo resisten los baluartes y fortalezas del este, y nadie sabe durante cuanto tiempo más se oirán sus voces sobre el mundo, o se verán las bellas obras de artesanía que elaboran",
    quotes: [
      {
        author: "Khairthyl agha Sakhandar aghai Immalek",
        authorRole: "Mraogha y Señor del Recuerdo",
        quoteImage: kuannachtaQuoter1,
        quoteMessage:
          "Nuestro pecado de inacción nos ha llevado al desastre: el sur es un yermo silencioso. Solo unas voces débiles, cada vez más leves y difíciles de oír, alaban aún allí la gloria y la grandeza de la Roca Primigenia, origen de toda vida y consciencia. Ese ha sido siempre mi destino: llevar mi aliento a Nauthalarkka, para que mi voz se una a su aciago destino. Para que el final jamás sea olvidado.",
      },
    ],
  },
  {
    name: "nidanyira",
    source: especiesnidanyira,
  },
  {
    name: "taengryza",
    source: especiestaengryza,
  },
  {
    name: "ugara",
    source: especiesugara,
  },
  {
    name: "xyarjar",
    source: especiesxyarjar,
  },
];

export const getContinentIcon = (continent: string): any => {
  let icon = null;

  switch (continent) {
    case "Gahaedha":
      icon = gahaedhaContinent;
      break;
    default:
  }

  return icon;
};

export const getHabitatIcon = (habitat: string): any => {
  let icon = null;

  switch (habitat) {
    case "Cavernas":
      icon = shallowCavernIcon;
      break;
    case "Cavernas Profundas":
      icon = deepCavernIcon;
      break;
    case "Urbano":
      icon = urbanIcon;
      break;
    default:
  }

  return icon;
};

export const getPopulationDensityIconAndColor = (pop: string): any => {
  let data = {};

  switch (pop) {
    case "very-low":
      data = {
        icon: veryLowPopulationDensity,
        color: "dark-red",
      };
      break;
    case "low":
      data = {
        icon: lowPopulationDensity,
        color: "red",
      };
      break;
    case "medium":
      data = {
        icon: mediumPopulationDensity,
        color: "orange",
      };
      break;
    case "high":
      data = {
        icon: highPopulationDensity,
        color: "green",
      };
      break;
    case "very-high":
      data = {
        icon: veryHighPopulationDensity,
        color: "dark-green",
      };
      break;
    default:
  }

  return data;
};
