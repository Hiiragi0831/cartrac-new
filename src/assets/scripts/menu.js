const mobileMenu = document.querySelector('.header__mobile');
const bgOverflow = document.querySelector('.bg-overflow');

const menuOpen = () => {
  bgOverflow.classList.remove('d-none');
  mobileMenu.classList.add('is-active');
  bgOverflow.classList.add('is-active');
  document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
}

const menuClose = () => {
  mobileMenu.classList.remove('is-active');
  bgOverflow.classList.remove('is-active');

  setTimeout(()=> {
    bgOverflow.classList.add('d-none');
    document.getElementsByTagName('html')[0].classList.remove('overflow-hidden');
  }, 150);
}

const init = () => {
  document.querySelector('.header__burger').addEventListener('click', () => {
    menuOpen();
  })

  mobileMenu.querySelector('.header__mobile-close').addEventListener('click', () => {
    menuClose();
  })

  bgOverflow.addEventListener('click', () => {
    menuClose();
  })
}

export default {
  init,
}
