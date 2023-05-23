const calculationBtn = document.querySelector('.calculation-modal-btn');
const calculationBtnPrev = document.querySelector('.calculation-modal__btn');
const calculationSteps = document.querySelectorAll('.calculation-modal-step');
const calculationStepsBlock = document.querySelector(
    '.calculation-modal-steps'
);
const calculationProgress2 = document.querySelector(
    '.calculation-modal__progress-2'
);
const calculationForm = document.querySelector('.calculation-modal-form');
const calculationText = document.querySelector(
    '.calculation-modal__small-text'
);
const calculationProgressBlock = document.querySelector(
    '.calculation-modal-progress-block'
);
const calculationTime = document.querySelector('.calculation-modal-time div');
const calculationThanks = document.querySelector('.calculation-modal-thanks');
const calculationContent = document.querySelector('.calculation-modal-content');
let count = 0;

const formElement = document.querySelector('.calculation-form');
formElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let response = await fetch('send_msg.php', {
            method: 'POST',
            body: new FormData(formElement),
        });
        calculationForm.style.display = 'none';
        calculationThanks.style.display = 'block';
        calculationContent.style.transition = 'none';
        calculationContent.style.width = '400px';
    } catch (err) {
        console.log(err);
    }
});

const showStepBlock = (flag) => {
    if (flag) {
        if (count == 4) {
            calculationStepsBlock.style.display = 'none';
            calculationProgress2.style.display = 'block';
            setTimeout(() => {
                calculationProgress2.style.display = 'none';
                calculationForm.style.display = 'grid';
            }, 4200);
        } else {
            calculationSteps[count].style.display = 'none';
            calculationSteps[count + 1].style.display = 'block';
        }
    } else {
        calculationSteps[count].style.display = 'none';
        calculationSteps[count - 1].style.display = 'block';
    }
};

calculationBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (count < 5) {
        showStepBlock(true);
        count = count + 1;
        calculationText.innerText = `Шаг ${count + 1} из 5`;
        calculationProgressBlock.style.width = (count + 1) * 20 + '%';
    }
});

calculationBtnPrev.addEventListener('click', function (e) {
    e.preventDefault();
    if (count > 0) {
        showStepBlock(false);
        calculationText.innerText = `Шаг ${count} из 5`;
        calculationProgressBlock.style.width = count * 20 + '%';
        count = count - 1;
    }
});

const costCalculation = document.querySelector('.cost-calculation');
const calculationModal = document.querySelector('.calculation-modal');
const calculationModalClose = document.querySelector(
    '.calculation-modal__close'
);

costCalculation.addEventListener('click', function () {
    calculationModal.classList.toggle('open');
    document.body.classList.toggle('lock');
});
calculationModalClose.addEventListener('click', function () {
    calculationModal.classList.toggle('open');
    document.body.classList.toggle('lock');
});
