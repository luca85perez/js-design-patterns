/**
 * Creates a new ObserverList
 * @class ObserverList
 */
function ObserverList() {
  this.observerList = [];
}

/**
 * Add an observer to the observerList
 * @param  {object} obj - observer
 * @return {array} observerList
 * @memberof ObserverList
 */
ObserverList.prototype.add = function addHandler(obj) {
  return this.observerList.push(obj);
};

/**
 * Return the length of the observerList array
 * @return {number}
 * @memberof ObserverList
 */
ObserverList.prototype.count = function countHandler() {
  return this.observerList.length;
};

/**
 * Return an object of observerList
 * @param  {number} i - index
 * @return {object|undefined}
 * @memberof ObserverList
 */
ObserverList.prototype.get = function getHandler(i) {
  if (i > -1 && i < this.observerList.length) {
    return this.observerList[i];
  }
  return undefined;
};

/**
 * Return an index number of the observer object
 * @param  {object} obj - observer
 * @param  {number} [startIndex = 0] - index
 * @return {number}
 * @memberof ObserverList
 */
ObserverList.prototype.indexOf = function indexOfHandler(obj, startIndex = 0) {
  let i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};

/**
 * Remove an observer from the observerList at given index
 * @param  {number} i - index
 * @memberof ObserverList
 */
ObserverList.prototype.removeAt = function removeAtHandler(i) {
  this.observerList.splice(i, 1);
};

/**
 * Creates a new Subject
 * @class Subject
 */
function Subject() {
  this.observers = new ObserverList();
}

/**
 * Add an observer to the observers
 * @param  {object} observer
 * @memberof Subject
 */
Subject.prototype.addObserver = function addObserverHandler(observer) {
  this.observers.add(observer);
};

/**
 * Remove an observer from the observers
 * @param  {object} observer
 * @memberof Subject
 */
Subject.prototype.removeObserver = function removeObserverHandler(observer) {
  this.observers.removeAt(this.observers.indexOf(observer));
};

/**
 * Remove an observer from the observers
 * @param  {object|string|number|boolean} ctx - this will be transmitted
 * to the observers
 * @memberof Subject
 */
Subject.prototype.notify = function notifyHandler(ctx) {
  const observersCount = this.observers.count();

  for (let i = 0; i < observersCount; i++) {
    this.observers.get(i).update(ctx);
  }
};

/**
 * Creates a new Observer
 * @class Observer
 */
function Observer() {
  this.update = function updateHandler() {};
}

// <label>
//   <input type="checkbox" id="mainCheckbox">
//   controlCheckbox
// </label>
// <br>
// <button id="addNewObserver">addNewObserver</button>
// <div id="observersContainer"></div>

// Extend an object with an extension
function extend(obj, extension) {
  const objRef = obj;

  for (const key in extension) {
    objRef[key] = extension[key];
  }
}

// References to our DOM elements
const controlCheckbox = document.getElementById('mainCheckbox');
const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');

// Concrete Subject
// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject());

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function onclickHandler() {
  controlCheckbox.notify(controlCheckbox.checked);
};

// Concrete Observer
function addNewObserver() {
  // Create a new checkbox to be added
  const check = document.createElement('input');
  check.type = 'checkbox';

  // Extend the checkbox with the Observer class
  extend(check, new Observer());

  // Override with custom update behaviour
  check.update = function updateHandler(value) {
    this.checked = value;
  };

  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(check);

  // Append the item to the container
  container.appendChild(check);
}

addBtn.onclick = addNewObserver;
