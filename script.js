// Formatear la fecha para Google Calendar
const eventDate = new Date(2025, 6, 5, 15, 30); // Año, mes (0-indexed), día, hora, minutos
const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0];
const endDate = new Date(eventDate);
endDate.setHours(endDate.getHours() + 10); // Evento de 9 horas
const endDateString = endDate.toISOString().replace(/[-:]/g, '').split('.')[0];

// Configurar los parámetros de Google Calendar
const calendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=Boda%20Eli%26Cris` +
    `&dates=${startDate}/${endDateString}` +
    `&details=SAVE%20THE%20DATE%20para%20festejar%20juntos.%20EliyCris.%20Auspicia%20ig%20@tienda.elitian%20jaja` +
    `&location=` +
    `&sf=true&output=xml`;

// Asignar la URL al botón
document.getElementById('googleCalendarButton').href = calendarURL;

const weddingDate = new Date('2025-07-05T15:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (difference < 0) {
        document.getElementById('countdown').innerHTML = "¡Es hoy!";
    }
}

function showImage() {
    const overlay = document.getElementById('imageOverlay');
    overlay.classList.add('active');
}

function hideImage() {
    const overlay = document.getElementById('imageOverlay');
    overlay.classList.remove('active');
}

setInterval(updateCountdown, 1000);


/**************/
/***CARRUSEL***/
/**************/

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelector('.carousel-slides');
//     const totalSlides = slides.children.length;
//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
// }