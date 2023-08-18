const classJson = require('./constants');
/**
 * Действие по запросу ECHO
 * @param {*} arduino - arduino клиент
 * @param {*} data - данные для отправки
 */
function echoActionUnity(arduino, data) {
    const jsonFormat =
    JSON.stringify(new classJson.ActionClass(classJson.ActionCall.ECHO, data));
    arduino.send(jsonFormat);
}

/**
 * Действие по запросу ECHO
 * @param {*} unity - unity клиент
 * @param {*} data - данные для отправки
 */
function echoActionArduino(unity, data) {
    unity.send(data);
}

module.exports = {echoActionUnity, echoActionArduino};
