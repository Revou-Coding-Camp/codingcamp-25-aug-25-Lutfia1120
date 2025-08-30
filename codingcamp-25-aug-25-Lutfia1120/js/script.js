greet();

function greet() {
    // input username
    let username = prompt("Please enter your name:");

    // display username di website
    document.getElementById("username").innerText = username;
}

//validasi form
function validasiform() {
    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let jk = document.querySelector('input[name="jk"]:checked');
    let pesan = document.getElementById("pesan").value;

    if (nama === "") {
        alert("Nama harus diisi!");
        return false;
    }
    if (tgl === "") {
        alert("Tanggal lahir harus diisi!");
        return false;
    }
    if (!jk) {
        alert("Jenis kelamin harus dipilih!");
        return false;
    }
    if (pesan === "") {
        alert("Pesan harus diisi!");
        return false;
    }
    
    // Tampilkan data yang diinput
    document.getElementById("output").innerHTML = `
        <table border="1" class="w-full">
            <tr>
                <td>Nama</td><td>:</td><td>${nama}</td>
            </tr>
            <tr>
                <td>Tanggal Lahir</td><td>:</td><td>${tgl}</td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td><td>:</td><td>${jk.value}</td>
            </tr>
            <tr>
                <td>Pesan</td><td>:</td><td>${pesan}</td>
            </tr>
        </table>
    `;
    return false; // Mencegah form reload
}


