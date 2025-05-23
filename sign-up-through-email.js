document.addEventListener('DOMContentLoaded', () => {
  const emailBtn     = document.querySelector('.our-instruction-button');
  const buttonsWrap  = document.querySelector('.buttons-wrap');
  const firstStep    = document.querySelector('.form-step[data-step="1"]');
  const container    = document.querySelector('.instructions-wrap');
  const firstProgress = document.querySelector('.progress-line-indicator'); // first indicator

  emailBtn.addEventListener('click', () => {
    if (!buttonsWrap || !firstStep || !container) return;

    // lock and animate container height
    const currentHeight = container.offsetHeight;
    container.style.height = `${currentHeight}px`;
    container.style.transition = 'height 300ms ease';
    void container.offsetHeight;
    container.style.height = '230px';

    // hide initial buttons
    buttonsWrap.style.opacity = '0';

    setTimeout(() => {
      buttonsWrap.style.display = 'none';

      // reveal form step 1
      firstStep.style.display = 'flex';
      firstStep.style.opacity = '0';
      firstStep.style.transition = 'opacity 200ms ease';
      requestAnimationFrame(() => firstStep.style.opacity = '1');

      // update progress indicator
      if (firstProgress) firstProgress.style.width = '20%';
    }, 200);
  });

  const nameInput = document.getElementById('fullName');
  const nameError = document.querySelector('.name-field-empty');

  function validateNameField() {
    if (!nameInput.value.trim()) {
      nameError.classList.add('show');
      nameError.style.display = 'block';
    } else {
      nameError.classList.remove('show');
      nameError.style.display = 'none';
    }
  }

  const submitBtn = document.querySelector('.submit-button');
  if (submitBtn) {
    submitBtn.addEventListener('click', e => {
      e.preventDefault();
      validateNameField();
    });
  }
});
