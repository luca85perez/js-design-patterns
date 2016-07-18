/**
 * Creates a tab component
 * @class tabs
 */
const tabs = (function tabs() {
  /**
   * Stores the current visible tab container
   * @type {HTMLElement}
   * @memberof tabs
   */
  let visibleContainer;

  /**
   * Stores the current active button
   * @type {HTMLElement}
   * @memberof tabs
   */
  let activeBtn;

  /**
   * Add active state to button and show the linked tab
   * @param  {object} e - event object
   * @memberof tabs
   */
  function handleBtnClick(e) {
    e.preventDefault();

    if (e.target.classList.contains('is-active')) {
      return;
    }

    if (activeBtn) {
      activeBtn.classList.remove('is-active');
    }

    if (visibleContainer) {
      visibleContainer.classList.remove('is-visible');
    }

    const id = e.target.getAttribute('href');

    visibleContainer = document.querySelector(id);
    visibleContainer.classList.add('is-visible');
    activeBtn = e.target;
    activeBtn.classList.add('is-active');
  }

  /**
   * Add events to tab buttons
   * @param  {HTMLElement} buttons
   * @memberof tabs
   */
  function attachEvents(buttons) {
    buttons.forEach((btn) => {
      btn.addEventListener('click', handleBtnClick);
    });
  }

  /**
   * Init tabs component
   * @public
   * @param  {HTMLElement} buttons
   * @memberof tabs
   */
  function init(buttons) {
    attachEvents(buttons);
  }

  return {
    init,
  };
}());

/*
<ul>
  <li>
    <a class="js-tabs-btn" href="#tab-1">Tab 1</a>
  </li>
  <li>
    <a class="js-tabs-btn" href="#tab-2">Tab 2</a>
  </li>
  <li>
    <a class="js-tabs-btn" href="#tab-3">Tab 3</a>
  </li>
</ul>

<div id="tab-1">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore esse non, aspernatur exercitationem odio optio quae officiis corporis atque, iste hic ut, reprehenderit explicabo, vero minus enim blanditiis molestias fuga!
</div>

<div id="tab-2">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore esse non, aspernatur exercitationem odio optio quae officiis corporis atque, iste hic ut, reprehenderit explicabo, vero minus enim blanditiis molestias fuga!
</div>

<div id="tab-3">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore esse non, aspernatur exercitationem odio optio quae officiis corporis atque, iste hic ut, reprehenderit explicabo, vero minus enim blanditiis molestias fuga!
</div>
*/

tabs.init(document.querySelectorAll('.js-tabs-btn'));
