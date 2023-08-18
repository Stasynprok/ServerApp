const ActionCall = {
    ECHO: 'ECHO',
};

/**
 * Класс для формирования JSON
 */
class ActionClass {
    /**
     * Конструктор класса
     * @param {*} action - действие
     * @param {*} data - данные
     */
    constructor(action, data) {
        this.action = action;
        this.data = data;
    }
}

module.exports = {ActionCall, ActionClass};
