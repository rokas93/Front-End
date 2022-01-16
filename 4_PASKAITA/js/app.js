
let selectVehicle = document.querySelector('#rent');
let type = document.querySelector('.form__rent-type');
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

let yesLicence = document.querySelector('#licence-yes');
let noLicence = document.querySelector('#licence-no');
let category = document.querySelector('.form__licence-category');
let another = document.querySelector('.form__no-licence');

let answerYes = document.querySelector('#another-yes');
let answerNo = document.querySelector('#another-no');
let refuseText = document.querySelector('.form__refuse-text');

let catList = document.querySelectorAll('#category');
let rentDate = document.querySelector('.form__rent-date');


let licenceAnswer = document.querySelectorAll('.form__radio-checkbox');

licenceAnswer.forEach(function (element) {
  element.addEventListener('click', function () {
    if (this.value === 'true' & this.name === 'licence') {
      category.style.display = 'flex';
      another.style.display = 'none';
    }

    if (this.value === 'false' & this.name === 'licence') {
      category.style.display = 'none';
      another.style.display = 'flex';
      answerYes.checked = false;
      answerNo.checked = false;
    }

    if (this.value === 'false' & this.name === 'another-no') {
      refuseText.style.display = 'flex';
      licence.style.display = 'none';
      category.style.display = 'none';
      another.style.display = 'none';
      yesLicence.checked = false;
      noLicence.checked = false;
      answerYes.checked = false;
      answerNo.checked = false;
      selectVehicle.value = '';
    }
  });
});

let checkboxes = document.querySelector('.form__category');

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
    console.log(selectedCheckboxesArray(checkboxes));
  });
});
