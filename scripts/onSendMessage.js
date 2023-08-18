const actions = require('./actions');
const act = require('./constants');
/**
 * Парсер обращений к серверу от unity клиента
 * @param {string} message - json в виде строки от клиента
 * @param {string} arduino - ардуино клиент
 * @param {string} unity - unity клиент
 */
function onSendMessageUnity(message, arduino, unity) {
    try {
        const jsonMessage = JSON.parse(message);
        // Обработка запрашиваемого действия от клиента
        // eslint-disable-next-line max-len
        console.log(`Unity message: ${jsonMessage.action}: ${jsonMessage.data}`);
        switch (jsonMessage.action) {
        case act.ActionCall.ECHO:
            actions.echoActionUnity(arduino, jsonMessage.data);
            break;
        default:
            console.log('Unknown command from unity!!!');
            unity.send('Unknown command!!!');
        }
    } catch (error) {
        console.log('Error', error);
    }
}

/**
 * Парсер обращений к серверу от arduino клиента
 * @param {string} message - json в виде строки от клиента
 * @param {string} arduino - ардуино клиент
 * @param {string} unity - unity клиент
 */
function onSendMessageArduino(message, arduino, unity) {
    try {
        const jsonMessage = JSON.parse(message);
        // Обработка запрашиваемого действия от клиента
        // eslint-disable-next-line max-len
        console.log(`Arduino message: ${jsonMessage.action}: ${jsonMessage.data}`);
        switch (jsonMessage.action) {
        case act.ActionCall.ECHO:
            actions.echoActionArduino(unity, jsonMessage.data);
            break;
        default:
            console.log('Unknown command from arduino!!!');
            arduino.send('Unknown command!!!');
        }
    } catch (error) {
        console.log('Error', error);
    }
}
module.exports = {onSendMessageUnity, onSendMessageArduino};
