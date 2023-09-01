const menuHamburguer = document.querySelector('.hamburguer') as HTMLElement;
const links = document.querySelector('.links-nav') as HTMLElement;

  menuHamburguer.addEventListener('click', () => {
  links.classList.toggle('expanded')
})
