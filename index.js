function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')

  emailjs
  .sendForm(
    'service_m3ov6uu',
    'template_t4hawb4',
    event.target,
    'user_TcEG8aQQEXHOrAoye'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible")
  success.classList += " modal__overlay--visible";
  }).catch (() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailabe"
    );
  })
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
    }
  isModalOpen = true;
  document.body.classList += " modal--open"
}

