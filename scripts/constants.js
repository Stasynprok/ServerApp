const ActionCallOnSend = {
    ECHO: 'ECHO',
    GETBTN: 'GETBTN',
    GETSERVO: 'GETSERVO',
};

const ActionCallOnGet = {
    ECHO: 'ECHO',
    SENDBTN: 'SENDBTN',
    SENDSERVO: 'SENDSERVO',
};

const ActionCallOnConnection = {
    ECHO: 'ECHO',
    CONNECT: 'CONNECT',
};

/**
 * Класс для формирования JSON
 */
class ActionClass {
    /**
     * Конструктор класса
     * @param {*} action - действие
     * @param {*} id - id объекта
     * @param {*} value - данные
     */
    constructor(action, id, value) {
        this.action = action;
        this.id = id;
        this.value = value;
    }
}

module.exports = {
    ActionCallOnConnection,
    ActionCallOnGet,
    ActionCallOnSend,
    ActionClass};
