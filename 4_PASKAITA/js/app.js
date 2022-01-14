
let selectVehicle = document.querySelector('#rent');
let type = document.querySelector('.form__rent-type');
let licence = document.querySelector('.form__licence-question');

selectVehicle.addEventListener('click', function () {
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

  if (selectVehicle.value === 'select') {
    licence.style.display = 'none';
    category.style.display = 'none';
    another.style.display = 'none';
    refuseText.style.display = 'none';
    rentDate.style.display = 'none';
    yesLicence.checked = false;
    noLicence.checked = false;
    answerYes.checked = false;
    answerNo.checked = false;
  }
});

let yesLicence = document.querySelector('#yes');
let noLicence = document.querySelector('#no');
let category = document.querySelector('.form__licence-category');
let another = document.querySelector('.form__no-licence');

yesLicence.addEventListener('click', function () {
  category.style.display = 'flex';
  another.style.display = 'none';
});

noLicence.addEventListener('click', function () {
  another.style.display = 'flex';
  category.style.display = 'none';
  answerYes.checked = false;
  answerNo.checked = false;
});

let answerYes = document.querySelector('#answerYes');
let answerNo = document.querySelector('#answerNo');
let refuseText = document.querySelector('.form__refuse-text');

answerNo.addEventListener('click', function () {
  refuseText.style.display = 'flex';
  licence.style.display = 'none';
  category.style.display = 'none';
  another.style.display = 'none';
  yesLicence.checked = false;
  noLicence.checked = false;
  answerYes.checked = false;
  answerNo.checked = false;
  selectVehicle.value = 0;
});

let catList = document.querySelectorAll('#category');
let rentDate = document.querySelector('.form__rent-date');




for (let i = 0; i < catList.length; i++) {
  catList[i].addEventListener('click', function () {
  if (catList[i].checked == true) {
    rentDate.style.display = 'flex';
  }

  else {
    rentDate.style.display = 'none';
  }
});
}
