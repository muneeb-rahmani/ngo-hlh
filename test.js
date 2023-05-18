function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Function to remove unwanted options
function removeUnwantedOptions() {
  const selectElement = document.querySelector('.goog-te-combo');
  if (selectElement) {
    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
      const value = option.getAttribute('value');
      if (value !== 'en' && value !== 'ur') {
        option.remove();
      }
    });
  }
}


// Check for select element availability every 100 milliseconds
const intervalId = setInterval(() => {
  removeUnwantedOptions();
}, 100);

// Stop checking when the select element is found
document.addEventListener('DOMContentLoaded', () => {
  clearInterval(intervalId);
});


