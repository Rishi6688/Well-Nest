document.addEventListener('DOMContentLoaded', () => {
  // Symptom Chip Selection (Screen 1)
  const symptomChips = document.querySelectorAll('.symptom-chip');
  let selectedSymptoms = [];

  symptomChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      const label = chip.querySelector('.symptom-label').textContent.trim();
      if (chip.classList.contains('active')) {
        selectedSymptoms.push(label);
      } else {
        selectedSymptoms = selectedSymptoms.filter(l => l !== label);
      }
    });
  });

  // Green Button (Screen 1)
  const planBtn = document.getElementById('genPlanBtn');
  if (planBtn) {
    planBtn.addEventListener('click', () => {
      const target = selectedSymptoms.length > 0 ? selectedSymptoms[0] : 'General Wellness';
      window.location.href = `results.html?symptom=${encodeURIComponent(target)}`;
    });
  }

  // Quick Tags (Screen 1)
  const quickTags = document.querySelectorAll('.quick-tag');
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      window.location.href = `results.html?symptom=${encodeURIComponent(tag.textContent.trim())}`;
    });
  });

  // Bottom Nav Setup
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    // Dynamic highlighting based on URL would go here, but html active class is set statically
  });

  // Result Page Parsing (Screen 2)
  const urlParams = new URLSearchParams(window.location.search);
  const symptomData = urlParams.get('symptom');
  if (symptomData) {
    const summaryTitle = document.getElementById('resultSummaryTitle');
    if (summaryTitle) summaryTitle.textContent = symptomData;
  }

  // Tab Switcher Logic (Screen 2)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const container = document.getElementById(targetId);
      if (container) {
        // Reset animation by triggering reflow
        container.style.animation = 'none';
        container.offsetHeight;
        container.style.animation = null;
        container.classList.add('active');
      }
    });
  });

  // Toggle Voice Bar Wave (Screen 2)
  const voiceToggleBtn = document.getElementById('voiceToggleBtn');
  const voiceWave = document.getElementById('voiceWave');
  if (voiceToggleBtn && voiceWave) {
    voiceToggleBtn.addEventListener('click', () => {
      voiceWave.classList.toggle('playing');
      const voiceTitle = voiceToggleBtn.querySelector('.voice-title');
      const voiceSub = voiceToggleBtn.querySelector('.voice-sub');

      // Auto highlight step 1
      const step1 = document.getElementById('cookStep1');
      if (step1 && voiceWave.classList.contains('playing')) {
        document.querySelectorAll('.cook-step').forEach(s => s.classList.remove('active'));
        step1.classList.add('active');
      }

      if (voiceWave.classList.contains('playing')) {
        voiceTitle.textContent = "Voice Guide Playing";
        voiceSub.textContent = "Listening to Step 1...";
      } else {
        voiceTitle.textContent = "Voice Guide Paused";
        voiceSub.textContent = "Tap to resume cooking guide";
      }
    });
  }
});

// Update Cook Steps (Screen 2 - non GPS)
window.updateStep = function (stepNum, element) {
  const steps = document.querySelectorAll('.cook-step');
  steps.forEach(s => s.classList.remove('active'));
  if (element) {
    // Reset animation
    element.style.animation = 'none';
    element.offsetHeight; // force reflow
    element.style.animation = null;
    element.classList.add('active');
  }
  const progressFill = document.getElementById('cookProgress');
  if (progressFill) {
    progressFill.style.width = ((stepNum / 5) * 100) + '%';
  }
};
