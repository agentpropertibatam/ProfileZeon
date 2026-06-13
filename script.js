console.log("SCRIPT BERJALAN")

document.getElementById("btn-wa").addEventListener("click", function () {

  let nama = document.getElementById("nama").value;
  let wa = document.getElementById("wa").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || wa === "" || pesan === "") {
    alert("Harap isi semua data");
    return;
  }

  let nomorTujuan = "6281266970069";

  let text =
    `Halo, saya ${nama}

Nomor WA: ${wa}

Pesan:
${pesan}`;

  let url =
    "https://wa.me/" + nomorTujuan +
    "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");

});

window.addEventListener('scroll', function () {

  const header = document.querySelector('.header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  reveals.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add('active');
    }

  });

});

document.addEventListener('DOMContentLoaded', () => {

  const counters = document.querySelectorAll('.counter');
  console.log(counters);

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const counter = entry.target;

        const target =
          Number(counter.dataset.target);

        const suffix =
          counter.dataset.suffix || '';

        let current = 0;

        const update = () => {

          current += target / 80;

          if (current < target) {

            counter.innerText =
              Math.floor(current) + suffix;

            requestAnimationFrame(update);

          } else {

            counter.innerText =
              target + suffix;

          }

        };

        update();

        observer.unobserve(counter);

      }

    });

  });

  counters.forEach(counter => {
    observer.observe(counter);

  });

});



const slides =
  document.querySelectorAll('.testimonial-slide');

const dots =
  document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {

  slides.forEach(slide =>
    slide.classList.remove('active')
  );

  dots.forEach(dot =>
    dot.classList.remove('active')
  );

  slides[index].classList.add('active');

  dots[index].classList.add('active');
}

setInterval(() => {

  currentSlide++;

  if (currentSlide >= slides.length) {

    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 5000);

dots.forEach((dot, index) => {

  dot.addEventListener('click', () => {

    currentSlide = index;

    showSlide(index);

  });

});