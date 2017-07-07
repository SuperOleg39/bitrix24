$('document').ready(function() {
    /**
     * Классы для триггера Tooltipster
     */
    var tooltipsterClass = 'svz-tooltip';
    var tooltipsterClassActive = 'svz-switch-icon--active';
    /**
     * Элемент для триггера Tooltipster
     */
    var tooltipster = $('.' + tooltipsterClass);
    /**
     * Настройки Tooltipster
     */
    var tooltipsterOptions = {
        trigger: 'custom',
        triggerOpen: {
            click: true,
            tap: true
        },
        triggerClose: {
            click: true,
            tap: true
        },
        side: 'bottom',
        animationDuration: 0,
        delay: 0,
        interactive: true,
        functionBefore: function(instance) {
            $(instance.elementOrigin()).addClass(tooltipsterClassActive);
        },
        functionAfter: function(instance) {
            $(instance.elementOrigin()).removeClass(tooltipsterClassActive);
        }
    };

    /**
     * Активация Tooltipster
     */
    tooltipster.tooltipster(tooltipsterOptions);
});