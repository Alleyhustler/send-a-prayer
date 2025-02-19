// script.js
const prayers = [];

// Updated Comet Creation in JavaScript
document.getElementById('sendPrayer').addEventListener('click', function () {
    const prayerText = document.getElementById('prayerInput').value;
    if (prayerText.trim() === "") {
      alert("Please write a prayer before sending.");
      return;
    }
  
    // Add prayer to the list
    prayers.push(prayerText);
  
    // Clear the input
    document.getElementById('prayerInput').value = '';
  
    // Create comet animation
    const comet = document.createElement('div');
    comet.className = 'comet';
    document.getElementById('cometContainer').appendChild(comet);
  
    // Remove comet after animation
    setTimeout(() => {
      comet.remove();
    }, 1500); // Matches the animation duration
  
    // Animate the button
    this.textContent = '🚀 Prayer Sent!';
    setTimeout(() => {
      this.textContent = '🌟 Send Prayer';
    }, 2000);
  });
// Open the popup
document.getElementById('viewPrayers').addEventListener('click', function () {
  const popup = document.getElementById('prayersPopup');
  const prayersList = document.getElementById('prayersList');
  prayersList.innerHTML = prayers.map(prayer => `<li>${prayer}</li>`).join('');
  popup.style.display = 'flex';
});

// Close the popup
document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('prayersPopup').style.display = 'none';
});