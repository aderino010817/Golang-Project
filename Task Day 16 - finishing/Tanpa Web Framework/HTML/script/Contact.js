function iniDatanya() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("nomor").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message-pesan").value;

    let arrayData = [name, email, phone, subject, message];

    console.log(arrayData);
    if (name == "") {
        return alert('Namanya belum diisi!');
    } else if (email == "") {
        return alert('Email belum diisi!');
    } else if (phone == "") {
        return alert('Nomor telepon belum diisi!');
    } else if (subject == "") {
        return alert('Subject belum dipilih!');
    } else if (message == "") {
        return alert('Pesan belum diisi!');
    }

    const emailReceiver = "aderino.dumbways@baxdigital.my.id";
    let mailtoLink = `mailto:${emailReceiver}?subject=${subject}&body=Nama: ${name}%0AEmail: ${email}%0ANomor Telepon: ${phone}%0APesan: ${message}`;

    let a = document.createElement('a');
    a.href = mailtoLink;

    // Buka email composer
    a.click();
}
