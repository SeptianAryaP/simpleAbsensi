//1 tangkap element absesnsi_form dan root
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// 2 kita buat array untuk menampung data absensi
let absensi_data = [];

// 3 tambahkan ecent listerner submit ke element absensi form
absensi_form.addEventListener('submit', (event) => {
  // 4 mencegah form dari reload page
  event.preventDefault();

  // 5 memasukan value ke fullname agar bisa dipanggil
  let fullname = event.target.fullname.value;

  // 6 validasi fullname agar tidak kosong
  if (fullname == '') {
    alert('silahkan masukan nama lengkap');
    return;
    // return untuk memberhentikan kode dan akan teteap kepush kebawah
  }

  // 7 push data ke dalam absensi data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //8 reset input field (agar setelah di input dan dimasukan ke array tereset )
  event.target.fullname.value = '';

  // 11 panggil function render to html
  renderToHtml();
});

// 9 function untuk render data array ke div root
function renderToHtml() {
  // reset element div root
  root.innerHTML = '';

  // 10 mapping array to html
  // sampai tahap ini harus dipanggil function ini
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
        <div class="card" draggable="true" ondragend="handleDelete(${i})">
        <span>${i + 1}. &nbsp; ${e.nama_lengkap} </span> 
        <span>${e.waktu} ${e.tanggal} </span>
        </div>
        `;
  });
}
// 11 delete function

function handleDelete(index) {
  // 12 delete 1 data dari array
  absensi_data.splice(index, 1);

  //13 render kembali data dlm array ke html
  renderToHtml();
}
