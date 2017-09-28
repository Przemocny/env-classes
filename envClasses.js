const envClasses = () => {
    const body = document.querySelectorAll("body")[0];
    const actualClasses = Array.prototype.slice.call(body.classList);
    const notDisplayClasses = actualClasses.filter((e) => e.indexOf('env-') === -1);
    let conditionClasses = [];
    const conditionsWidths = [
        window.innerWidth < 576
            ? 'env-xxs'
            : '',
            window.innerWidth >= 576 &&  window.innerWidth < 768
            ? 'env-xs'
            : '',
            window.innerWidth >= 768 &&  window.innerWidth < 992
            ? 'env-sm'
            : '',
            window.innerWidth >= 992 &&  window.innerWidth < 1200
            ? 'env-md'
            : '',
            window.innerWidth >= 1200
            ? 'env-lg'
            : '',
    ].filter((e) => e.length);
    const conditionsMethodsNames = [
        'chrome',
        'ie',
        'edge',
        'firefox',
        'opera',
        'safari',
        'ios',
        'iphone',
        'ipad',
        'android',
        'androidPhone',
        'androidTablet',
        'windowsPhone',
        'windowsTablet',
        'mobile',
        'tablet',
        'desktop',
        'windows',
        'mac',
        'linux'
    ];
    conditionsMethodsNames.map((condition) => {
        if (is[condition]()) {
            conditionClasses.push("env-" + condition);
        }
    });
    const newClasses = [].concat(notDisplayClasses,conditionsWidths, conditionClasses).join(' ');
    body.classList = newClasses;
}
window
    .addEventListener("load", function () {
        envClasses();
    }, false);
window.addEventListener('resize', function () {
    envClasses();
})