const btnWA = document.getElementById("btn-wa");

btnWA.addEventListener("click", () => {

    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const kebutuhan = document.getElementById("kebutuhan").value;
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !wa || !kebutuhan || !pesan) {

        alert("Mohon lengkapi seluruh data terlebih dahulu.");

        return;
    }

    const nomorTujuan = "6281266970069";

    const tanggal = new Date().toLocaleString("id-ID");

    const text =
`Halo Zeon, Perkenalkan saya ${nama}. Saya tertarik untuk ${kebutuhan}. ${pesan}. Mohon hubungi saya di ${wa}.`;

    const whatsappURL =
        `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

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

const luxToggle = document.getElementById('luxToggle');
const luxMenu = document.getElementById('luxMenu');

if (luxToggle && luxMenu) {

  luxToggle.addEventListener('click', () => {

    luxMenu.classList.toggle('active');

    luxToggle.classList.toggle('active');

  });

}

setTimeout(() => {

  luxMenu.classList.add('active');
  luxToggle.classList.add('active');

}, 800);

setTimeout(() => {

  luxMenu.classList.remove('active');
  luxToggle.classList.remove('active');

}, 3800);

const listingGrid = document.querySelector('.listings-grid');
const listingDots = document.querySelectorAll('.listing-dot');
const cards = document.querySelectorAll('.listing-card');


if (listingGrid) {

  let firstClone = null;

  if (window.innerWidth <= 768) {

    firstClone = cards[0].cloneNode(true);

    firstClone.classList.add('listing-clone');

    listingGrid.appendChild(firstClone);

  }

  let listingIndex = 0;
  let autoSlide;

  function getCardWidth() {
    return cards[0].offsetWidth + 16;
  }

  function updateDots(index) {

    listingDots.forEach(dot =>
      dot.classList.remove('active')
    );

    listingDots[index % cards.length]
      .classList.add('active');
  }

  function slideNext() {

    if (window.innerWidth > 768) return;

    listingIndex++;

    listingGrid.scrollTo({
      left: listingIndex * getCardWidth(),
      behavior: 'smooth'
    });

    updateDots(listingIndex);
  }

  function startAuto() {

    autoSlide = setInterval(
      slideNext,
      3500
    );

  }

  function stopAuto() {

    clearInterval(autoSlide);

  }

  listingGrid.addEventListener(
    'scroll',
    () => {

      if (
        listingIndex === cards.length
      ) {

        setTimeout(() => {

          listingGrid.style.scrollBehavior = 'auto';

          listingGrid.scrollLeft = 0;

          listingIndex = 0;

          updateDots(0);

          setTimeout(() => {

            listingGrid.style.scrollBehavior =
              'smooth';

          }, 50);

        }, 500);

      }

    }
  );

  listingDots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      listingIndex = index;

      listingGrid.scrollTo({
        left: listingIndex * getCardWidth(),
        behavior: 'smooth'
      });

      updateDots(index);

    });

  });

  listingGrid.addEventListener(
    'touchstart',
    stopAuto
  );

  listingGrid.addEventListener(
    'touchend',
    startAuto
  );

  if (window.innerWidth <= 768) {
    startAuto();
  }

}

window.addEventListener('resize', () => {

  const clone =
    document.querySelector('.listing-clone');

  if (
    window.innerWidth <= 768 &&
    !clone
  ) {

    const newClone =
      cards[0].cloneNode(true);

    newClone.classList.add(
      'listing-clone'
    );

    listingGrid.appendChild(newClone);

    startAuto();

  }

  if (
    window.innerWidth > 768 &&
    clone
  ) {

    clone.remove();

    stopAuto();

  }

});


/* AUTO HIDE ON SCROLL */

let lastScroll = 0;

const socialWrap = document.querySelector('.lux-social-wrap');

window.addEventListener('scroll', () => {

  if (window.scrollY < 150) {

    luxMenu.classList.add('active');
    luxToggle.classList.add('active');

  } else {

    luxMenu.classList.remove('active');
    luxToggle.classList.remove('active');

  }

});

window.addEventListener('scroll', () => {

  luxMenu.classList.remove('active');
  luxToggle.classList.remove('active');

});



const servicesGrid =
document.querySelector('.services-grid');

const serviceCards =
document.querySelectorAll('.service-card');

const serviceDots =
document.querySelectorAll('.service-dot');

if (
  servicesGrid &&
  serviceCards.length &&
  serviceDots.length
) {

  let serviceIndex = 0;
  let serviceAuto;

  function getServiceWidth() {

    return serviceCards[0].offsetWidth + 16;

  }

  function updateServiceDots(index) {

    serviceDots.forEach(dot =>
      dot.classList.remove('active')
    );

    serviceDots[
      index % serviceCards.length
    ].classList.add('active');

  }

  function slideService() {

    if (window.innerWidth > 768) return;

    serviceIndex++;

    if (
      serviceIndex >=
      serviceCards.length
    ) {

      serviceIndex = 0;

    }

    servicesGrid.scrollTo({

      left:
        serviceIndex *
        getServiceWidth(),

      behavior: 'smooth'

    });

    updateServiceDots(serviceIndex);

  }

  serviceAuto =
    setInterval(
      slideService,
      3000
    );

  servicesGrid.addEventListener(
    'scroll',
    () => {

      const current =
        Math.round(
          servicesGrid.scrollLeft /
          getServiceWidth()
        );

      serviceIndex = current;

      updateServiceDots(current);

    }
  );

  serviceDots.forEach(
    (dot, index) => {

      dot.addEventListener(
        'click',
        () => {

          serviceIndex = index;

          servicesGrid.scrollTo({

            left:
              index *
              getServiceWidth(),

            behavior: 'smooth'

          });

          updateServiceDots(index);

        }
      );

    }
  );

  servicesGrid.addEventListener(
    'touchstart',
    () => clearInterval(serviceAuto)
  );

  servicesGrid.addEventListener(
    'touchend',
    () => {

      serviceAuto =
        setInterval(
          slideService,
          5000
        );

    }
  );

}

if(window.innerWidth <= 768){

  const skillsGrid =
    document.querySelector('.skills-grid');

  skillsGrid.innerHTML += skillsGrid.innerHTML;

}

// const servicesGrid =
// document.querySelector('.services-grid');

// const serviceCards =
// document.querySelectorAll('.service-card');

// const serviceDots =
// document.querySelectorAll('.service-dot');

// function updateServiceDots() {

//   const cardWidth =
//     serviceCards[0].offsetWidth + 16;

//   const index =
//     Math.round(
//       servicesGrid.scrollLeft / cardWidth
//     );

//   serviceDots.forEach(dot =>
//     dot.classList.remove('active')
//   );

//   if(serviceDots[index]){
//     serviceDots[index]
//       .classList.add('active');
//   }

// }

// servicesGrid.addEventListener(
//   'scroll',
//   updateServiceDots
// );

// updateServiceDots();

// serviceDots.forEach((dot,index)=>{

//   dot.addEventListener('click',()=>{

//     const cardWidth =
//       serviceCards[0].offsetWidth + 16;

//     servicesGrid.scrollTo({
//       left:index * cardWidth,
//       behavior:'smooth'
//     });

//   });

// });
