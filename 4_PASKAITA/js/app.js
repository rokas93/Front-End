
let selectVehicle = document.querySelector('#rent');
let licence = document.querySelector('.form__licence-question');

selectVehicle.addEventListener('change', function () {
  if (selectVehicle.value === 'car')
  {
    licence.style.display = 'flex';
    refuseText.style.display = 'none';
  }

  if (selectVehicle.value === 'bicycle') {
    licence.style.display = 'flex';
    refuseText.style.display = 'none';
  }

  if (selectVehicle.value === 'scooter') {
    licence.style.display = 'flex';
    refuseText.style.display = 'none';
  }
});

// Radio checkpoints

let yesLicence = document.querySelector('#licence-yes');
let noLicence = document.querySelector('#licence-no');
let category = document.querySelector('.form__licence-category');
let another = document.querySelector('.form__no-licence');
let answerYes = document.querySelector('#another-yes');
let answerNo = document.querySelector('#another-no');
let refuseText = document.querySelector('.form__refuse-text');
let rentDate = document.querySelector('.form__rent-date');
let licenceAnswer = document.querySelectorAll('.form__radio-checkbox');

licenceAnswer.forEach(function (element) {
  element.addEventListener('click', function () {
    if (this.value === 'true' & this.name === 'licence') {
      category.style.display = 'flex';
      another.style.display = 'none';
      rentDate.style.display = 'none';
    }

    if (this.value === 'false' & this.name === 'licence') {
      licence.style.display = 'flex';
      another.style.display = 'flex';
      refuseText.style.display = 'none';
      category.style.display = 'none';
      rentDate.style.display = 'none';
      rentPlace.style.display = 'none';
      answerYes.checked = false;
      answerNo.checked = false;
      selectEndDate.value = '';
    }

    if (this.value === 'false' & this.name === 'another-no') {
      refuseText.style.display = 'flex';
      licence.style.display = 'none';
      category.style.display = 'none';
      another.style.display = 'none';
      rentDate.style.display = 'none';
      rentPlace.style.display = 'none';
      yesLicence.checked = false;
      noLicence.checked = false;
      answerYes.checked = false;
      answerNo.checked = false;
      selectVehicle.value = '';
      selectEndDate.value = '';
    }

    if (this.value === 'true' & this.name === 'another-yes') {
      rentDate.style.display = 'flex';
    }

  });
});

// Licences category

let checkboxes = document.querySelectorAll('.form__category');

function selectedCheckboxesArray(allCheckboxes) {
  let selectedCheckboxes = [];
  allCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked == true) {
      selectedCheckboxes.push(checkbox.value);
    }
  });
  return selectedCheckboxes;
}

checkboxes.forEach(function (el) {
  el.addEventListener('click', function () {

    let selBoxes = selectedCheckboxesArray(checkboxes);
    
    if (selBoxes.length > 0) {
      rentDate.style.display = 'flex';
    }

    if (selBoxes.length < 1) {
      rentDate.style.display = 'none';
    }
  });
});

// Select start & end date

let todayDate = new Date().toISOString().slice(0, 10);
let startDay = document.querySelector('#start-date').value = todayDate;
let minStartDay = document.querySelector('#start-date').min = todayDate;
let minEndtDay = document.querySelector('#end-date').min = todayDate;
let selectEndDate = document.querySelector('#end-date');
let rentPlace = document.querySelector('.form__rent-place');

selectEndDate.addEventListener('change', function () {
  if(selectEndDate.value !== '') {
    rentPlace.style.display = 'flex';
  }

  if(selectEndDate.value === '') {
    rentPlace.style.display = 'none';
  }
});

// Select rent place

let selectPlace = document.querySelector('#place');
let submitButton = document.querySelector('.form__button');
let acceptText = document.querySelector('.form__accepted');

selectPlace.addEventListener('click', function () {
  if (selectPlace.value === 'vilnius') {
    submitButton.removeAttribute('disabled');
    submitButton.style.opacity = '100%';
  }

  if (selectPlace.value === 'kaunas') {
    submitButton.removeAttribute('disabled');
    submitButton.style.opacity = '100%';
  }

  if (selectPlace.value === 'klaipeda') {
    submitButton.removeAttribute('disabled');
    submitButton.style.opacity = '100%';
  }
});
