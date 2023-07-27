
const cardData = [
  {
    author: "Beltran Adrianda Xaquille",
    quote: "Digital Marketing Expertise termuda di Indonesia dengan kemampuan beriklan terbaik dan pengeluaran terbesar se Indonesia",
    image: "../BAX/Beltran.jpg",
    rating: 4,
  },
  {
    author: "Belva Adrianda Xaveire",
    quote: "Gadis cantik adik dari Beltran yang juga bergelut dibidang organic digital selling dengan bermodalkan bot automasi canggih karya ayahnya",
    image: "../BAX/Belva.jpg",
    rating: 4,
  },
  {
    author: "Bella Adrianda Xafhei",
    quote: "Jagoan feminin tukang palak kakak kakaknya sekaligus bodyguard keluarga",
    image: "../BAX/Bella.jpg",
    rating: 4,
  },
  {
    author: "Aderino Arya Nanda",
    quote: "Full-Stack Kehidupan. The Real PALUGADA of life",
    image: "../image/rino.jpg",
    rating: 5,
  },
  {
    author: "Amandha",
    quote: "Wanita hebat yang mendidik trio BAX dan menjaga mereka untuk tetap santun, bertata krama, dan pastinya beretika",
    image: "../BAX/mbakndok.jpg",
    rating: 5,
  },
];

function showAll() {
  let testimonialHTML = "";

  cardData.forEach((item) => {
    testimonialHTML += `<div class="div-testi">
    <img src="${item.image}" alt="" class="gambarhtmljs" />
      <p class="quote">${item.quote}</p>
      <p class="author">${item.rating} <i class="fa-solid fa-star"></i> from ${item.author}</p>
    </div>`;
  });

  document.getElementById("container-testimonials").innerHTML = testimonialHTML;
}

// eksekusi awal / default
showAll();

function stars(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = cardData.filter((item) => {
    return item.rating === rating;
  });

  //   console.log(testimonialFiltered);

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Datanya ini 404 not-found </h1>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML += `<div class="div-testi">
        <img src="${item.image}" alt="" class="gambarhtmljs" />
          <p class="quote">${item.quote}</p>
          <p class="author">${item.rating} <i class="fa-solid fa-star"></i> from ${item.author}</p>
        </div>`;
    });
  }

  document.getElementById("container-testimonials").innerHTML = testimonialHTML;
}