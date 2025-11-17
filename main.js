// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js"
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"

// GANTI DENGAN FIREBASE CONFIG ANDA
const firebaseConfig = {
  apiKey: "AIzaSyAMYR89DaWshLi9Q3DzlOfd6-zERrlk-Dg",
  authDomain: "ic2025-4d32e.firebaseapp.com",
  projectId: "ic2025-4d32e",
  storageBucket: "ic2025-4d32e.firebasestorage.app",
  messagingSenderId: "614606671675",
  appId: "1:614606671675:web:a92cc69855fb3d7568f11e"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const siswaCollection = collection(db, "siswa")

// Fungsi untuk menampilkan daftar siswa
export async function tampilkanDaftarSiswa() {
  // ambil snapshot data dari koleksi siswa
  const snapshot = await getDocs(siswaCollection)

  // ambil elemen tabel data
  const tabel = document.getElementById("tabelData")

  // kosongkan isi tabel
  tabel.innerHTML = ""

  // loop setiap dokumen dalam snapshot
  snapshot.forEach((doc) => {
    // variabel untuk menyimpan data
    const data = doc.data()
    const id = doc.id

    // buat elemen baris baru
    const baris = document.createElement("tr")

    // buat elemen kolom untuk NIS
    const kolomNIS = document.createElement("td")
    kolomNIS.textContent = data.nis

    // buat elemen kolom untuk Nama
    const kolomNama = document.createElement("td")
    kolomNama.textContent = data.nama

    // buat elemen kolom untuk Kelas
    const kolomKelas = document.createElement("td")
    kolomKelas.textContent = data.kelas

    // buat elemen kolom untuk Aksi
    const kolomAksi = document.createElement("td")

    // buat tombol edit
    const tombolEdit = document.createElement("button")
    tombolEdit.textContent = "Edit"
    tombolEdit.href = "edit.html?id=" + id
    tombolEdit.className = "button edit"

    // buat tombol hapus
    const tombolHapus = document.createElement("button")
    tombolHapus.textContent = "Hapus"
    tombolHapus.className = "button delete"

    // tambahkan elemen ke dalam kolom Aksi
    kolomAksi.appendChild(tombolEdit)
    kolomAksi.appendChild(tombolHapus)

    // tambahkan kolom ke dalam baris
    baris.appendChild(kolomNIS)
    baris.appendChild(kolomNama)
    baris.appendChild(kolomKelas)
    baris.appendChild(kolomAksi)

    // tambahkan baris ke dalam tabel
    tabel.appendChild(baris)
  })
}
