let dataBlog = [];

function addProject(event) {
  event.preventDefault();

  let project = document.getElementById("nama-project").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("deskripsi-tugas").value;
  let reactjs = document.getElementById("react").checked;
  let javascript = document.getElementById("typescript").checked;
  let nextjs = document.getElementById("next").checked;
  let nodejs = document.getElementById("node").checked;
  let image = document.getElementById("upload-img").files;

  if (image && image.length > 0) {
    image = URL.createObjectURL(image[0]);
  }

  console.log(image);

  if (reactjs) {
    reactjs = `<i class="fab fa-react"></i>`;
  } else {
    reactjs = ``;
  }

  if (javascript) {
    javascript = `<i class="fab fa-js"></i>`;
  } else {
    javascript = ``;
  }

  if (nextjs) {
    nextjs = `<i class="fab fa-android"></i>`;
  } else {
    nextjs = ``;
  }

  if (nodejs) {
    nodejs = `<i class="fab fa-node-js"></i>`;
  } else {
    nodejs = ``;
  }

  let awalwaktu = new Date(startDate);
  let akhirwaktu = new Date(endDate);
  let time = '';
  
  let jarakwaktu = akhirwaktu - awalwaktu;
  let detik = Math.floor(jarakwaktu / 1000000);
  let menit = Math.floor(detik / 60);
  let jam = Math.floor(menit / 60);
  let hari = Math.floor(jam / 24);
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(minggu / 4);
  
  if (detik >= 60 && menit < 60) {
    time = `${menit} menit`;
  } else if (menit >= 60 && jam < 24) {
    time = `${jam} jam`;
  } else if (jam >= 24 && hari < 7) {
    time = `${hari} hari`;
  } else if (hari >= 7 && minggu < 4) {
    time = `${minggu} minggu`;
  } else if (minggu >= 4 && bulan < 12) {
    time = `${bulan} bulan`;
  } else if (bulan >= 30 && tahun < 2) {
    time = `${tahun} tahun`;
  }
  
  let blog = {
    project,
    startDate,
    endDate,
    description,
    reactjs,
    javascript,
    nextjs,
    nodejs,
    image,
    awalwaktu,
    akhirwaktu,
    jarakwaktu,
    time
  };

  dataBlog.push(blog);
  renderBlog();

  console.log(dataBlog);

  if (project === "") {
    return alert("Nama project mana?");
  } else if (startDate === "") {
    return alert("Kapan project dimulai?");
  } else if (endDate === "") {
    return alert("Kapan kelarnya kemaren nih?");
  } else if (description === "") {
    return alert("Projectnya tentang apa? Jelaskan!");
  } else if (!image || image.length === 0) {
    return alert("Tolong gambarnya diupload yaaa");
  }

  // Reset form fields
  document.getElementById("nama-project").value = "";
  document.getElementById("start-date").value = "";
  document.getElementById("end-date").value = "";
  document.getElementById("deskripsi-tugas").value = "";
  document.getElementById("react").checked = false;
  document.getElementById("typescript").checked = false;
  document.getElementById("next").checked = false;
  document.getElementById("node").checked = false;
  document.getElementById("upload-img").value = "";
}

function renderBlog() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    let blog = dataBlog[index];
    let imageElement = "";
    if (blog.image) {
      imageElement = `<img src="${blog.image}" alt=""/>`;
    }

    let blogElement = `
      <div class="project">
        <div class="project1">
          ${imageElement}
          <h3>${blog.project}</h3>
          <h5>Durasi: ${dataBlog[index].time}</h5>
          <h5>${blog.description}</h5>
          <div class="icon">
            ${blog.reactjs}
            ${blog.javascript}
            ${blog.nextjs}
            ${blog.nodejs}
          </div>    
          <div class="btn">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    `;

    content.insertAdjacentHTML("beforeend", blogElement);
  }
}
