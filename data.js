// Buat sebuah modul dengan ketentuan:

// data.js berisikan data nama-nama hewan dan juga nama-nama buah.
// Export data tersebut menggunakan export biasa
// Import pada index.js kemudian tampilkan data yg sudah diexport menggunakan DOM

let hewan = [
  {
    nama: "singa",
    Kaki: 4,
    Jenis: Karnivora,
  },
  {
    nama: "sapi",
    Kaki: 4,
    Jenis: Herbivora,
  },
];

let buah = [
  {
    nama: "Jeruk nipis",
    warna: "hijau",
    rasa: "asem",
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    rasa: "Manis",
  },
  {
    nama: "Leunca",
    warna: "Hijau",
    rasa: "Pahit",
  },
];

export { hewan, buah };
