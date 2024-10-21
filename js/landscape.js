/**
 * checks the device orientation and shows a modal if the device is in landscape mode on a mobile device.
 * adds or removes the 'hidden' and 'show' classes on the modal and toggles the 'no-scroll' class on the body.
 * 
 * @function
 * @returns {void}
 */
function checkOrientation() {
    const modal = document.getElementById('landscape-modal');
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const body = document.body;

    if (isMobile && isLandscape) {
        modal.classList.remove('hidden');
        modal.classList.add('show');
        body.classList.add('no-scroll');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('show');
        body.classList.remove('no-scroll');
    }
}


/**
 * sets up event listeners for screen orientation and window resizing events to trigger checkOrientation.
 * the resize event listens for window size changes, while the orientation change event listens for device orientation changes.
 * 
 * @function
 * @returns {void}
 */
function setupEventListeners() {
    window.addEventListener('resize', checkOrientation);
    if (window.screen.orientation) {
        screen.orientation.addEventListener('change', checkOrientation);
    }
}


/**
 * main function that initializes everything.
 * 
 * @function
 * @returns {Promise<void>}
 */
async function init() {
    await includeHTML();
    checkOrientation();
    setupEventListeners();

    const tasks = await loadTasks();
    getTaskTemplate(tasks);
}