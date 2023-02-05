import Popover from './Popover';

const popoverFactory = new Popover();
const buttons = document.querySelectorAll('.btn');
let actialPopover = [];

[...buttons].forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // debugger
    if (actialPopover.includes(+e.target.dataset.id)) {
      popoverFactory.removePopover(+e.target.dataset.id);
      actialPopover = actialPopover.filter((item) => item !== +e.target.dataset.id);
    } else {
      actialPopover.push(popoverFactory.showPopover(e.target));
    }
  });
});
