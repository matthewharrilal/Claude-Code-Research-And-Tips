// Journey Progress Tracking
// Stores progress in localStorage and updates UI accordingly

(function() {
  'use strict';

  const STORAGE_KEY = 'claude-code-journey-progress';

  // Default progress structure
  const DEFAULT_PROGRESS = {
    currentPhase: 1,
    currentStep: 1,
    completedSteps: [],
    startedAt: null,
    lastVisitedAt: null,
    totalTimeSpent: 0 // in minutes
  };

  // Phase configuration
  const PHASES = [
    { id: 1, name: 'Orientation', steps: 4, time: 120 },
    { id: 2, name: 'Core Principles', steps: 4, time: 180 },
    { id: 3, name: 'Quick Wins', steps: 5, time: 120 },
    { id: 4, name: 'Ralph Pattern', steps: 4, time: 240 },
    { id: 5, name: 'Practitioners', steps: 4, time: 180 },
    { id: 6, name: 'Multi-Agent', steps: 4, time: 240 },
    { id: 7, name: 'Advanced', steps: 3, time: 180 }
  ];

  const TOTAL_TIME = PHASES.reduce((sum, p) => sum + p.time, 0);
  const TOTAL_STEPS = PHASES.reduce((sum, p) => sum + p.steps, 0);

  // Load progress from localStorage
  function loadProgress() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_PROGRESS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Could not load progress:', e);
    }
    return { ...DEFAULT_PROGRESS };
  }

  // Save progress to localStorage
  function saveProgress(progress) {
    try {
      progress.lastVisitedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  // Mark a step as completed
  function completeStep(phaseId, stepId) {
    const progress = loadProgress();
    const stepKey = `${phaseId}-${stepId}`;

    if (!progress.completedSteps.includes(stepKey)) {
      progress.completedSteps.push(stepKey);

      // Update current position if this was the current step
      if (phaseId === progress.currentPhase && stepId === progress.currentStep) {
        const phase = PHASES.find(p => p.id === phaseId);
        if (stepId < phase.steps) {
          progress.currentStep = stepId + 1;
        } else if (phaseId < PHASES.length) {
          progress.currentPhase = phaseId + 1;
          progress.currentStep = 1;
        }
      }

      saveProgress(progress);
      updateUI(progress);
    }
  }

  // Check if a step is completed
  function isStepCompleted(phaseId, stepId) {
    const progress = loadProgress();
    return progress.completedSteps.includes(`${phaseId}-${stepId}`);
  }

  // Calculate remaining time
  function calculateRemainingTime(progress) {
    let remaining = 0;
    let stepsSeen = 0;

    for (const phase of PHASES) {
      const stepsInPhase = phase.steps;
      const timePerStep = phase.time / stepsInPhase;

      for (let step = 1; step <= stepsInPhase; step++) {
        if (!progress.completedSteps.includes(`${phase.id}-${step}`)) {
          remaining += timePerStep;
        }
        stepsSeen++;
      }
    }

    return Math.round(remaining);
  }

  // Calculate completion percentage
  function calculateProgress(progress) {
    return Math.round((progress.completedSteps.length / TOTAL_STEPS) * 100);
  }

  // Format time display
  function formatTime(minutes) {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (mins === 0) {
      return `${hours} hr`;
    }
    return `${hours} hr ${mins} min`;
  }

  // Update all UI elements
  function updateUI(progress) {
    // Update sticky header
    updateProgressHeader(progress);

    // Update phase accordions
    updatePhaseAccordions(progress);

    // Update step items
    updateStepItems(progress);

    // Update progress markers
    updateProgressMarkers(progress);

    // Update footer
    updateFooter(progress);
  }

  function updateProgressHeader(progress) {
    const header = document.getElementById('journey-progress-header');
    if (!header) return;

    const phaseInfo = header.querySelector('.progress-phase');
    const timeInfo = header.querySelector('.progress-time');
    const progressBar = header.querySelector('.progress-bar');

    const phase = PHASES.find(p => p.id === progress.currentPhase) || PHASES[0];
    const remaining = calculateRemainingTime(progress);
    const percent = calculateProgress(progress);

    if (phaseInfo) {
      phaseInfo.textContent = `Phase ${progress.currentPhase} of 7 • Step ${progress.currentStep}/${phase.steps}`;
    }
    if (timeInfo) {
      timeInfo.textContent = `~${formatTime(remaining)} remaining`;
    }
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
  }

  function updatePhaseAccordions(progress) {
    const accordions = document.querySelectorAll('.phase-accordion');

    accordions.forEach(accordion => {
      const phaseId = parseInt(accordion.dataset.phase, 10);
      if (!phaseId) return;

      // Remove all state classes
      accordion.classList.remove('phase-accordion--current', 'phase-accordion--completed', 'phase-accordion--locked');

      // Check if phase is completed
      const phase = PHASES.find(p => p.id === phaseId);
      const phaseSteps = [];
      for (let i = 1; i <= phase.steps; i++) {
        phaseSteps.push(`${phaseId}-${i}`);
      }
      const allCompleted = phaseSteps.every(s => progress.completedSteps.includes(s));

      if (allCompleted) {
        accordion.classList.add('phase-accordion--completed');
        const status = accordion.querySelector('.phase-status');
        if (status) {
          status.textContent = 'Complete';
          status.className = 'phase-status phase-status--completed';
        }
      } else if (phaseId === progress.currentPhase) {
        accordion.classList.add('phase-accordion--current');
        const status = accordion.querySelector('.phase-status');
        if (status) {
          status.textContent = 'Current';
          status.className = 'phase-status phase-status--current';
        }
      } else if (phaseId > progress.currentPhase) {
        const status = accordion.querySelector('.phase-status');
        if (status) {
          status.textContent = 'Upcoming';
          status.className = 'phase-status phase-status--locked';
        }
      }
    });
  }

  function updateStepItems(progress) {
    const steps = document.querySelectorAll('.step-item');

    steps.forEach(step => {
      const phaseId = parseInt(step.dataset.phase, 10);
      const stepId = parseInt(step.dataset.step, 10);
      if (!phaseId || !stepId) return;

      const stepKey = `${phaseId}-${stepId}`;

      // Remove state classes
      step.classList.remove('step-item--completed', 'step-item--current');

      if (progress.completedSteps.includes(stepKey)) {
        step.classList.add('step-item--completed');
      } else if (phaseId === progress.currentPhase && stepId === progress.currentStep) {
        step.classList.add('step-item--current');
      }
    });
  }

  function updateProgressMarkers(progress) {
    const markers = document.querySelectorAll('.progress-marker');

    markers.forEach(marker => {
      const phaseId = parseInt(marker.dataset.phase, 10);
      if (!phaseId) return;

      marker.classList.remove('completed', 'current');

      // Check if all steps in this phase are completed
      const phase = PHASES.find(p => p.id === phaseId);
      const phaseSteps = [];
      for (let i = 1; i <= phase.steps; i++) {
        phaseSteps.push(`${phaseId}-${i}`);
      }
      const allCompleted = phaseSteps.every(s => progress.completedSteps.includes(s));

      if (allCompleted) {
        marker.classList.add('completed');
      } else if (phaseId === progress.currentPhase) {
        marker.classList.add('current');
      }
    });
  }

  function updateFooter(progress) {
    const footer = document.getElementById('next-action-footer');
    if (!footer) return;

    const pageCount = footer.querySelector('.footer-progress');
    const nextBtn = footer.querySelector('.next-action-btn');

    if (pageCount) {
      const completed = progress.completedSteps.length;
      pageCount.innerHTML = `<strong>${completed}/${TOTAL_STEPS}</strong> steps complete`;
    }

    // Update next action button
    if (nextBtn) {
      const phase = PHASES.find(p => p.id === progress.currentPhase);
      const nextStep = document.querySelector(
        `.step-item[data-phase="${progress.currentPhase}"][data-step="${progress.currentStep}"] a`
      );

      if (nextStep) {
        nextBtn.href = nextStep.getAttribute('href');
        const stepTitle = nextStep.querySelector('.step-title');
        if (stepTitle) {
          nextBtn.textContent = `Continue: ${stepTitle.textContent}`;
        }
      }
    }
  }

  // Check for returning user
  function checkReturningUser(progress) {
    if (!progress.startedAt) {
      progress.startedAt = new Date().toISOString();
      saveProgress(progress);
      return;
    }

    const lastVisit = new Date(progress.lastVisitedAt);
    const now = new Date();
    const hoursSinceVisit = (now - lastVisit) / (1000 * 60 * 60);

    // Show welcome back modal if more than 24 hours since last visit
    if (hoursSinceVisit > 24 && progress.completedSteps.length > 0) {
      showWelcomeBackModal(progress);
    }
  }

  function showWelcomeBackModal(progress) {
    const modal = document.getElementById('welcome-back-modal');
    if (!modal) return;

    const progressValue = modal.querySelector('.modal-progress-value');
    const continueBtn = modal.querySelector('.modal-btn-primary');

    if (progressValue) {
      const phase = PHASES.find(p => p.id === progress.currentPhase);
      progressValue.textContent = `Phase ${progress.currentPhase}: ${phase.name}, Step ${progress.currentStep}`;
    }

    if (continueBtn) {
      const nextStep = document.querySelector(
        `.step-item[data-phase="${progress.currentPhase}"][data-step="${progress.currentStep}"] a`
      );
      if (nextStep) {
        continueBtn.href = nextStep.getAttribute('href');
      }
    }

    modal.classList.add('visible');

    // Close button handlers
    const closeBtn = modal.querySelector('.modal-btn-secondary');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('visible'));
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('visible');
      }
    });
  }

  // Add click handlers to step links for tracking
  function setupStepTracking() {
    const steps = document.querySelectorAll('.step-item a');

    steps.forEach(step => {
      step.addEventListener('click', function() {
        const item = this.closest('.step-item');
        const phaseId = parseInt(item.dataset.phase, 10);
        const stepId = parseInt(item.dataset.step, 10);

        if (phaseId && stepId) {
          // Mark as completed when clicked
          completeStep(phaseId, stepId);
        }
      });
    });
  }

  // Reset progress (for testing)
  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }

  // Initialize
  function init() {
    const progress = loadProgress();

    // Add body class for sticky footer padding
    document.body.classList.add('has-sticky-footer');

    // Check for returning user
    checkReturningUser(progress);

    // Update all UI
    updateUI(progress);

    // Setup tracking
    setupStepTracking();

    // Expose API for manual control
    window.JourneyProgress = {
      complete: completeStep,
      isCompleted: isStepCompleted,
      reset: resetProgress,
      getProgress: loadProgress
    };
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
