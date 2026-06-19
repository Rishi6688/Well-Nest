document.addEventListener('DOMContentLoaded', () => {
  // Shared Language Pill Toggling
  const langPills = document.querySelectorAll('.lang-pill');
  langPills.forEach(pill => {
    pill.addEventListener('click', () => {
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // State Management
  let currentStep = 0;
  const totalSteps = 5;
  let isPlaying = false;

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const stepCounterText = document.getElementById('stepCounterText');
  
  const gpsToggleBtn = document.getElementById('gpsToggleBtn');
  const gpsPlayIcon = document.getElementById('gpsPlayIcon');
  const gpsTitleText = document.getElementById('gpsTitleText');
  const gpsSubText = document.getElementById('gpsSubText');
  
  const stepRows = document.querySelectorAll('.step-row');

  function updateStepsUI() {
    // Top counter
    stepCounterText.textContent = `Steps ${currentStep}/${totalSteps}`;

    // Manage Buttons
    if (currentStep <= 1) {
      btnPrev.disabled = true;
    } else {
      btnPrev.disabled = false;
    }

    if (currentStep === totalSteps) {
      btnNext.textContent = "Done!";
      btnNext.style.backgroundColor = "var(--am)"; // Distinct finish color
    } else {
      btnNext.textContent = "Next step →";
      btnNext.style.backgroundColor = "var(--g)";
    }

    // Step Highlighting
    stepRows.forEach((row, index) => {
      if (index + 1 === currentStep) {
        row.classList.add('active');
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        row.classList.remove('active');
      }
    });

    // Update GPS bar visual text
    if (currentStep > 0) {
      isPlaying = true;
      gpsPlayIcon.textContent = '⏸';
      gpsTitleText.textContent = `Playing Step ${currentStep}`;
      gpsSubText.textContent = 'Tap to pause navigation';
    }
  }

  // Next Button Logic
  btnNext.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStepsUI();
    } else {
      // Done - Redirect or Confetti
      alert("Recipe complete! Well Done.");
    }
  });

  // Prev Button Logic
  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepsUI();
    }
  });

  // GPS Play Block Logic
  gpsToggleBtn.addEventListener('click', () => {
    if (currentStep === 0) {
      // Start from step 1
      currentStep = 1;
      updateStepsUI();
    } else {
      // Toggle Play/Pause state
      isPlaying = !isPlaying;
      if (isPlaying) {
        gpsPlayIcon.textContent = '⏸';
        gpsTitleText.textContent = `Playing Step ${currentStep}`;
        gpsSubText.textContent = 'Tap to pause navigation';
      } else {
        gpsPlayIcon.textContent = '▶';
        gpsTitleText.textContent = 'Navigation Paused';
        gpsSubText.textContent = 'Tap to resume cooking guide';
      }
    }
  });
});
