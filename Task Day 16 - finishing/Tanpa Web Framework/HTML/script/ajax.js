const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/c54f8d0d0eb2db8893d0", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject("Error loading data.");
      }
    };
    xhr.onerror = () => {
      reject("Network error, silahkan pindah negara.");
    };
    xhr.send();
  });
  
  async function showAll() {
    const cardData = await promise;
  
    let testimonialHTML = "";
    cardData.forEach((item) => {
      testimonialHTML += `<div class="div-testi">
                              <img src="${item.image}" class="gambarhtmljs" />
                                  <p class="quote">${item.quote}</p>
                                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i> from ${item.author}</p>
                              </div>
                            `;
    });
  
    document.getElementById("container-testimonials").innerHTML = testimonialHTML;
  }
  
  // eksekusi awal / default
  showAll();
  
  async function stars(rating) {
    const cardData = await promise;
  
    const testimonialFiltered = cardData.filter((item) => {
      return item.rating === rating;
    });
  
  
    let testimonialHTML = "";
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML = "<h1>Datanya Ketelisut, dicari sek nggihhhh. silahkan di reload</h1>";
    } else {
      testimonialFiltered.forEach((item) => {
        testimonialHTML += `<div class="div-testi">
                                <img src="${item.image}" class="gambarhtmljs" />
                                    <p class="quote">${item.quote}</p>
                                    <p class="author">${item.rating} <i class="fa-solid fa-star"></i> from ${item.author}</p>
                                </div>
                            `;
      });
    }
  
    document.getElementById("container-testimonials").innerHTML = testimonialHTML;
  }