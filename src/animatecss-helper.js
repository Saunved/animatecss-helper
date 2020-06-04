function animateCSS(element, animations, callback) {
    /* jshint -W104, -W119 */
    const node = document.querySelector(element);
    const cssClasses = animations.split(' ');
    node.classList.add('animated', 'animate__animated'); // add classes that support both animate.css v3 and v4
    cssClasses.forEach(cssClass => {
        node.classList.add(cssClass);
    });

    function handleAnimationEnd() {
        node.classList.remove('animated', 'animate__animated');
        cssClasses.forEach(cssClass => {
            node.classList.remove(cssClass);
        });
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
};

try {
    module.exports = exports = animateCSS;
 } catch (e) {}