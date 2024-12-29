// Carousel Functionality
let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector('.carousel-container');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  currentIndex = (index + totalSlides) % totalSlides;
  container.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}


// Popup Form
function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
function sendToWhatsApp() {
  // Get form field values
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  // Validate input fields
  if (!name || !mobile || !email) {
    alert('Please fill in all required fields!');
    return;
  }

  // Format the WhatsApp message
  const message = ` 👤 *Name:* ${name}\n📞 *Mobile:* ${mobile}\n✉️ *Email:* ${email}\n📝 *Comments:* ${comments}`;

  // Your WhatsApp number (with country code, no '+' sign)
  const phoneNumber = '+919625253930'; // Replace with your WhatsApp number

  // Open WhatsApp chat in a new window
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank').focus();
}
