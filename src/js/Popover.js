/* eslint-disable no-param-reassign */

export default class Popover {
  constructor() {
    this.popover = [];
  }

  showPopover(element) {
    const id = Math.round(performance.now());

    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');

    const popTitle = document.createElement('h3');
    popTitle.classList.add('popover-title');
    popTitle.textContent = element.dataset.title;
    popoverElement.appendChild(popTitle);

    const popContent = document.createElement('div');
    popContent.classList.add('popover-content');
    popContent.textContent = element.dataset.content;
    popoverElement.appendChild(popContent);

    const { top, right } = element.getBoundingClientRect();

    popoverElement.style.top = `${top - popoverElement.offsetHeight - 5}px`;
    popoverElement.style.left = `${right - element.offsetWidth}px`;
    popoverElement.style.width = `${element.offsetWidth}px`;

    document.body.appendChild(popoverElement);

    this.popover.push({
      id,
      element: popoverElement,
    });

    element.dataset.id = id;
    return id;
  }

  removePopover(id) {
    const popoverActive = this.popover.find((popover) => popover.id === id);

    popoverActive.element.remove();

    this.popover = this.popover.filter((popover) => popover.id !== id);
  }
}
