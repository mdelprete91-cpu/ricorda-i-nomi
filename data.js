// Dati generati automaticamente - foto e nomi collegati al gioco
const PEOPLE = [
  {
    "id": 1,
    "name": "Melinda Sveberg",
    "image": "images/person_000.jpg"
  },
  {
    "id": 2,
    "name": "Kuzey Yorulmaz",
    "image": "images/person_001.jpg"
  },
  {
    "id": 3,
    "name": "Dragica Divac",
    "image": "images/person_002.jpg"
  },
  {
    "id": 4,
    "name": "Virgil Webb",
    "image": "images/person_003.jpg"
  },
  {
    "id": 5,
    "name": "Laurie Banks",
    "image": "images/person_004.jpg"
  },
  {
    "id": 6,
    "name": "Gabrielle Brown",
    "image": "images/person_005.jpg"
  },
  {
    "id": 7,
    "name": "Ann Spencer",
    "image": "images/person_006.jpg"
  },
  {
    "id": 8,
    "name": "Mayte Salgado",
    "image": "images/person_007.jpg"
  },
  {
    "id": 9,
    "name": "Isaac Torres",
    "image": "images/person_008.jpg"
  },
  {
    "id": 10,
    "name": "Ana Ray",
    "image": "images/person_009.jpg"
  },
  {
    "id": 11,
    "name": "Ruža Perišić",
    "image": "images/person_010.jpg"
  },
  {
    "id": 12,
    "name": "Olga Roger",
    "image": "images/person_011.jpg"
  },
  {
    "id": 13,
    "name": "Pablo Nieto",
    "image": "images/person_012.jpg"
  },
  {
    "id": 14,
    "name": "Diego Sanz",
    "image": "images/person_013.jpg"
  },
  {
    "id": 15,
    "name": "Nikola Urošević",
    "image": "images/person_014.jpg"
  },
  {
    "id": 16,
    "name": "Matthew Williams",
    "image": "images/person_015.jpg"
  },
  {
    "id": 17,
    "name": "Corina Porto",
    "image": "images/person_016.jpg"
  },
  {
    "id": 18,
    "name": "Derek Hicks",
    "image": "images/person_017.jpg"
  },
  {
    "id": 19,
    "name": "Wanda Kelley",
    "image": "images/person_018.jpg"
  },
  {
    "id": 20,
    "name": "Anđela Malešević",
    "image": "images/person_019.jpg"
  },
  {
    "id": 21,
    "name": "Leana Aubert",
    "image": "images/person_020.jpg"
  },
  {
    "id": 22,
    "name": "Jonathan Larsen",
    "image": "images/person_021.jpg"
  },
  {
    "id": 23,
    "name": "Oskari Joki",
    "image": "images/person_022.jpg"
  },
  {
    "id": 24,
    "name": "Jar Cruz",
    "image": "images/person_023.jpg"
  },
  {
    "id": 25,
    "name": "Rémi Van Domburg",
    "image": "images/person_024.jpg"
  },
  {
    "id": 26,
    "name": "Sebastian Carroll",
    "image": "images/person_025.jpg"
  },
  {
    "id": 27,
    "name": "مهدي سالاری",
    "image": "images/person_026.jpg"
  },
  {
    "id": 28,
    "name": "Anna Jiménez",
    "image": "images/person_027.jpg"
  },
  {
    "id": 29,
    "name": "Elaine Gutierrez",
    "image": "images/person_028.jpg"
  },
  {
    "id": 30,
    "name": "Pinja Kemppainen",
    "image": "images/person_029.jpg"
  },
  {
    "id": 31,
    "name": "Chloé Aubert",
    "image": "images/person_030.jpg"
  },
  {
    "id": 32,
    "name": "Ursula Lucas",
    "image": "images/person_031.jpg"
  },
  {
    "id": 33,
    "name": "Malou Larsen",
    "image": "images/person_032.jpg"
  },
  {
    "id": 34,
    "name": "Yvonne Gregory",
    "image": "images/person_033.jpg"
  },
  {
    "id": 35,
    "name": "Concepción Ramírez",
    "image": "images/person_034.jpg"
  },
  {
    "id": 36,
    "name": "Ludmilla Wacker",
    "image": "images/person_035.jpg"
  },
  {
    "id": 37,
    "name": "Sebastian Hansen",
    "image": "images/person_036.jpg"
  },
  {
    "id": 38,
    "name": "Vira Voytenko",
    "image": "images/person_037.jpg"
  },
  {
    "id": 39,
    "name": "Leokadia Rist",
    "image": "images/person_038.jpg"
  },
  {
    "id": 40,
    "name": "Peetu Karvonen",
    "image": "images/person_039.jpg"
  },
  {
    "id": 41,
    "name": "Ezio Robert",
    "image": "images/person_040.jpg"
  },
  {
    "id": 42,
    "name": "Clyde Meyer",
    "image": "images/person_041.jpg"
  },
  {
    "id": 43,
    "name": "Tess Moreau",
    "image": "images/person_042.jpg"
  },
  {
    "id": 44,
    "name": "Chloe Brown",
    "image": "images/person_043.jpg"
  },
  {
    "id": 45,
    "name": "Nandita Shroff",
    "image": "images/person_044.jpg"
  },
  {
    "id": 46,
    "name": "Carl-Heinz Ruppert",
    "image": "images/person_045.jpg"
  },
  {
    "id": 47,
    "name": "Alexander Madsen",
    "image": "images/person_046.jpg"
  },
  {
    "id": 48,
    "name": "Suzanna Shelton",
    "image": "images/person_047.jpg"
  },
  {
    "id": 49,
    "name": "Georgia Singh",
    "image": "images/person_048.jpg"
  },
  {
    "id": 50,
    "name": "Marius Jensen",
    "image": "images/person_049.jpg"
  },
  {
    "id": 51,
    "name": "غزل نكو نظر",
    "image": "images/person_050.jpg"
  },
  {
    "id": 52,
    "name": "Encarnación Cano",
    "image": "images/person_051.jpg"
  },
  {
    "id": 53,
    "name": "Juan Grant",
    "image": "images/person_052.jpg"
  },
  {
    "id": 54,
    "name": "Ayşe Uluhan",
    "image": "images/person_053.jpg"
  },
  {
    "id": 55,
    "name": "Emilia Cepeda",
    "image": "images/person_054.jpg"
  },
  {
    "id": 56,
    "name": "Håkon Haarr",
    "image": "images/person_055.jpg"
  },
  {
    "id": 57,
    "name": "Julia Vidal",
    "image": "images/person_056.jpg"
  },
  {
    "id": 58,
    "name": "Otto Wuollet",
    "image": "images/person_057.jpg"
  },
  {
    "id": 59,
    "name": "Pilar Hernández",
    "image": "images/person_058.jpg"
  },
  {
    "id": 60,
    "name": "Laura Gautier",
    "image": "images/person_059.jpg"
  },
  {
    "id": 61,
    "name": "Elsa Lacroix",
    "image": "images/person_060.jpg"
  },
  {
    "id": 62,
    "name": "Veraldina Castro",
    "image": "images/person_061.jpg"
  },
  {
    "id": 63,
    "name": "Meral Sinanoğlu",
    "image": "images/person_062.jpg"
  },
  {
    "id": 64,
    "name": "Connor Walker",
    "image": "images/person_063.jpg"
  },
  {
    "id": 65,
    "name": "Alban Fernandez",
    "image": "images/person_064.jpg"
  },
  {
    "id": 66,
    "name": "Diego Morel",
    "image": "images/person_065.jpg"
  },
  {
    "id": 67,
    "name": "Eli Carlson",
    "image": "images/person_066.jpg"
  },
  {
    "id": 68,
    "name": "Henry Morgan",
    "image": "images/person_067.jpg"
  },
  {
    "id": 69,
    "name": "Gustavo Yáñez",
    "image": "images/person_068.jpg"
  },
  {
    "id": 70,
    "name": "Isla Juntunen",
    "image": "images/person_069.jpg"
  },
  {
    "id": 71,
    "name": "Aatu Kujala",
    "image": "images/person_070.jpg"
  },
  {
    "id": 72,
    "name": "Vincent Patel",
    "image": "images/person_071.jpg"
  },
  {
    "id": 73,
    "name": "Joseline Van der Vegt",
    "image": "images/person_072.jpg"
  },
  {
    "id": 74,
    "name": "Rodrigo Iglesias",
    "image": "images/person_073.jpg"
  },
  {
    "id": 75,
    "name": "Samuel Ferrer",
    "image": "images/person_074.jpg"
  },
  {
    "id": 76,
    "name": "آرتين نجاتی",
    "image": "images/person_075.jpg"
  },
  {
    "id": 77,
    "name": "María Eugenia Navarrete",
    "image": "images/person_076.jpg"
  },
  {
    "id": 78,
    "name": "Latife Ozansoy",
    "image": "images/person_077.jpg"
  },
  {
    "id": 79,
    "name": "Isobel Morris",
    "image": "images/person_078.jpg"
  },
  {
    "id": 80,
    "name": "Rita Løvaas",
    "image": "images/person_079.jpg"
  },
  {
    "id": 81,
    "name": "Sowjanya Kavser",
    "image": "images/person_080.jpg"
  },
  {
    "id": 82,
    "name": "Etienne Lévesque",
    "image": "images/person_081.jpg"
  },
  {
    "id": 83,
    "name": "Stoymir Sergiychuk",
    "image": "images/person_082.jpg"
  },
  {
    "id": 84,
    "name": "Alfredo Almonte",
    "image": "images/person_083.jpg"
  },
  {
    "id": 85,
    "name": "حسین مرادی",
    "image": "images/person_084.jpg"
  },
  {
    "id": 86,
    "name": "Junaid Hernandez",
    "image": "images/person_085.jpg"
  },
  {
    "id": 87,
    "name": "Diego Philippe",
    "image": "images/person_086.jpg"
  },
  {
    "id": 88,
    "name": "Pyke Simonse",
    "image": "images/person_087.jpg"
  },
  {
    "id": 89,
    "name": "Alexandre Grewal",
    "image": "images/person_088.jpg"
  },
  {
    "id": 90,
    "name": "کیانا کوتی",
    "image": "images/person_089.jpg"
  },
  {
    "id": 91,
    "name": "Fernão Pereira",
    "image": "images/person_090.jpg"
  },
  {
    "id": 92,
    "name": "Ted Stone",
    "image": "images/person_091.jpg"
  },
  {
    "id": 93,
    "name": "Domenica Roussel",
    "image": "images/person_092.jpg"
  },
  {
    "id": 94,
    "name": "Théodore Rolland",
    "image": "images/person_093.jpg"
  },
  {
    "id": 95,
    "name": "Anette Reksten",
    "image": "images/person_094.jpg"
  },
  {
    "id": 96,
    "name": "Jordina Pereira",
    "image": "images/person_095.jpg"
  },
  {
    "id": 97,
    "name": "Jeremiah Ferguson",
    "image": "images/person_096.jpg"
  },
  {
    "id": 98,
    "name": "Laksh Bal",
    "image": "images/person_097.jpg"
  },
  {
    "id": 99,
    "name": "Yann Giraud",
    "image": "images/person_098.jpg"
  },
  {
    "id": 100,
    "name": "Wissam Jasper",
    "image": "images/person_099.jpg"
  }
];
