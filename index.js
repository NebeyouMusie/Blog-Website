const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const copyRightMessage = document.querySelector('.copy-right-message');

copyRightMessage.innerHTML += " " + currentYear;