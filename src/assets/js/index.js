$('document').ready(function() {
    /**
     * Класс для триггера Tooltipster
     */
    var tooltipsterClass = '.svz-tooltip';
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
        delay: 0,
        interactive: true
    };

    /**
     * Активация Tooltipster
     */
    $(tooltipsterClass).tooltipster(tooltipsterOptions);
});