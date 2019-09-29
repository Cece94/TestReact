import clos_du_littoral from './assets/media/CLOS_DU_LITTORAL.png';
import echapee from './assets/media/ECHAPEE_SRI_LANKAISE.png';
import entre_culture from './assets/media/ENTRE_CULTURE_ET_PLAGES.png';
import fairmont from './assets/media/FAIRMONT_DUBAI.png';
import hyatt from './assets/media/HYATT_REGENCY_CREEK.png';
import impiana from './assets/media/IMPIANA_RESORT_SAMUI.png';
import japon from './assets/media/JAPON.jpg';
import laguna from './assets/media/LAGUNA_BEACH.png';
import noku from './assets/media/NOKU_MALDIVES.png';
import sthala from './assets/media/STHALA_MARC_PATRA.png';

export default [
    {
        id: 1,
        country: "Emirates Arabes Unis",
        place: "Dubaï",
        label: "Hyatt Regency Creek",
        rating: 5,
        upto: "Dès 67€",
        redirect_label: "VERS LES EMIRATS ARABES UNIS — DUBAÏ",
        tags: [
            {
                classname: "premium",
                label: "Premium"
            },
            {
                classname: "option",
                label: "Surclassement offert"
            }
        ],
        link: "",
        img: clos_du_littoral
    },
    {
        id: 2,
        country: "Maurice",
        place: "Grand Rivière",
        label: "Laguna Beach Hotel & Spa",
        rating: 4,
        upto: "Jusqu'à -64%",
        redirect_label: "VERS MAURICE — GRAND RIVIÈRE",
        tags: [
            {
                classname: "premium",
                label: "Tout inclus"
            },
            {
                classname: "option",
                label: "Spa"
            }
        ],
        link: "",
        img: [echapee, entre_culture, fairmont ]
    },
    {
        id: 3,
        country: "Emirates Arabes Unis",
        place: "Dubaï",
        label: "Fairmont Dubaï",
        rating: 3,
        upto: "Dès 99€",
        redirect_label: "VERS LES EMIRATS ARABES UNIS — DUBAÏ",
        tags:[
            {
                classname: "premium",
                label: "Premium"
            },
            {
                classname: "option",
                label: "Rooftop"
            }
        ],
        link: "",
        img: fairmont
    },
    {
        id: 4,
        country: "Indonésie",
        place: "Bali & Gili",
        label: "Combiné Sthala - Marc - Patra",
        rating: 2,
        upto: "Dès 469€",
        redirect_label: "VERS L'INDONÉSIE — BALI & GILI",
        tags:[
            {
                classname: "premium",
                label: "Combiné"
            },
            {
                classname: "option",
                label: "Petit déjeuner inclus"
            }
        ],
        link: "",
        img: sthala
    },
    {
        id: 5,
        country: "Maldives",
        place: "Atoll de Noonu",
        label: "Noku Maldives",
        rating: 5,
        upto: "Jusqu'à -36%",
        redirect_label: "VERS MALDIVES — ATOLL DE NOONU",
        tags:[
            {
                classname: "premium",
                label: "Premium"
            },
            {
                classname: "option",
                label: "Massage offert"
            }
        ],
        link: "",
        img: noku
    },
    {
        id: 6,
        country: "Thaïlande",
        place: "Koh Samui",
        label: "Impiana Resort Samui",
        rating: 4,
        upto: "Jusqu'à -70%",
        redirect_label: "VERS LA THAÏLANDE — KOH SAMUI",
        tags: [
            {
                classname: "premium",
                label: "Massage offert"
            },
            {
                classname: "option",
                label: "Surclassement offert"
            }
        ],
        link: "",
        img:[ japon, sthala, laguna ]
    },
    {
        id: 7,
        country: "Maurice",
        place: "Grand Baie",
        label: "Clos du Littoral",
        rating: 4,
        upto: "Dès 538€",
        redirect_label: "VERS MAURICE — GRAND BAIE",
        tags: [
            {
                classname: "premium",
                label: "Premium"
            },
            {
                classname: "option",
                label: "Villas avec Piscine Privée"
            }
        ],
        link: "",
        img: noku
    },
    {
        id: 8,
        country: "Sri Lanka",
        place: "Sri Lanka",
        label: "Echappée SriLankaise",
        rating: 1,
        upto: "Dès 699€",
        redirect_label: "VERS LE SRI LANKA",
        tags: [
            {
                classname: "premium",
                label: "Circuit"
            },
            {
                classname: "option",
                label: "Privatif"
            }
        ],
        link: "",
        img: impiana
    },
    {
        id: 9,
        country: "Japon",
        place: "Tokyo",
        label: "Grand Arc Hanzomon",
        rating: 3,
        upto: "Dès 114€",
        redirect_label: "VERS LE JAPON — GRAND ARC HANZOMON",
        tags:[
            {
                classname: "premium",
                label: "City Break"
            },
            {
                classname: "option",
                label: "Insolite"
            }
        ],
        link: "",
        img:[ hyatt, clos_du_littoral, japon ]
    },
    {
        id: 10,
        country: "Vietnam",
        place: "De Hanoï à Hoi An",
        label: "Entre Culture et Plages",
        rating: 4,
        upto: "Dès 779€",
        redirect_label: "VERS LE VIETNAM — DE HANOÏ À HOI AN",
        tags: [
            {
                classname: "premium",
                label: "Circuit"
            },
            {
                classname: "option",
                label: "Privatif"
            }
        ],
        link: "",
        img: impiana
    }
];