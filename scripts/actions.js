const classJson = require('./constants');
/**
 * Действие по запросу ECHO
 * @param {*} arduino - arduino клиент
 * @param {*} id - id объекта
 * @param {*} value - данные для отправки
 */
function echoActionUnity(arduino, id, value) {
    const jsonFormat =
    JSON.stringify(
        new classJson.ActionClass(classJson.ActionCallOnSend.ECHO, id, value));
    arduino.send(jsonFormat);
}

/**
 * Действие при получении от ардуины SENDBTN
 * @param {*} arduino - arduino клиент
 * @param {*} id - id объекта
 * @param {*} value - данные для отправки
 */
function getBTNActionUnity(arduino, id, value) {
    const jsonFormat =
    JSON.stringify(
        new classJson.ActionClass(
            classJson.ActionCallOnSend.GETBTN, id, value));
    arduino.send(jsonFormat);
}

/**
 * Действие при получении от ардуины SENDSERVO
 * @param {*} arduino - arduino клиент
 * @param {*} id - id объекта
 * @param {*} value - данные для отправки
 */
function getSERVOActionUnity(arduino, id, value) {
    const jsonFormat =
    JSON.stringify(
        new classJson.ActionClass(
            classJson.ActionCallOnSend.GETSERVO, id, value));
    arduino.send(jsonFormat);
}

/**
 * Действие при получении от ардуины SENDSERVO
 * @param {*} unity - arduino клиент
 * @param {*} id - id объекта
 * @param {*} value - данные для отправки
 */
function sendConnectionActionUnity(unity, id, value) {
    const jsonFormat =
    JSON.stringify(
        new classJson.ActionClass(
            classJson.ActionCallOnConnection.CONNECT, id, value));
    unity.send(jsonFormat);
}

// ----------------------------------------

/**
 * Действие по запросу ECHO
 * @param {*} unity - unity клиент
 * @param {*} data - данные для отправки
 */
function echoActionArduino(unity, data) {
    unity.send(data);
}

/**
 * Действие при получении от unity SENDBTN
 * @param {*} unity - unity клиент
 * @param {*} id - id объекта
 * @param {*} value - данные для отправки
 */
function getBTNActionArduino(unity, id, value) {
    const jsonFormat =
    JSON.stringify(
        new classJson.ActionClass(
            classJson.ActionCallOnSend.GETBTN, id, value));
    unity.send(jsonFormat);
}

/**
 * Действие при получении от unity SENDSERVO
 * @param {*} unity - unity клиент
 * @param {*} id - id объекта
 * @param {*} value - данные для отправки
 */
function getSERVOActionArduino(unity, id, value) {
    const jsonFormat =
    JSON.stringify(
        new classJson.ActionClass(
            classJson.ActionCallOnSend.GETSERVO, id, value));
    unity.send(jsonFormat);
}

module.exports = {
    echoActionUnity,
    echoActionArduino,
    getBTNActionUnity,
    getSERVOActionUnity,
    getBTNActionArduino,
    getSERVOActionArduino,
    sendConnectionActionUnity,
};
