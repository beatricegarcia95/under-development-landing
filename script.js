// Countdown Timer Configuration
const CONFIG = {
    endDate: '2024-08-29T00:00:00Z', // Set to August 29, 2024, UTC
    storageKey: 'countdownEndDate' // Local storage key
};

// Function to get the end date
function getEndDate() {
    return new Date(CONFIG.endDate).getTime();
}

const countDownDate = getEndDate();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
        document.querySelector(".countdown").innerHTML = "LAUNCHED";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
}

// Update the countdown immediately on page load
updateCountdown();

// Then update every 1 second
const countdownTimer = setInterval(updateCountdown, 1000);

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    showNotification(`Thank you! ${email} has been added to our mailing list.`);
    this.reset();
});

// Notification function
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.bottom = '20px';
    setTimeout(() => {
        notification.style.bottom = '-50px';
    }, 3000);
}

// Parallax effect on mouse move
document.addEventListener('mousemove', function(e) {
    const content = document.querySelector('.content');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    content.style.transform = `translateX(${x}px) translateY(${y}px)`;
});