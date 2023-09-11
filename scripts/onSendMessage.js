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
        if (message != '') {
            const jsonMessage = JSON.parse(message);
            // Обработка запрашиваемого действия от клиента
            // eslint-disable-next-line max-len
            console.log(`Unity message: ${jsonMessage.action}: ${jsonMessage.value}`);

            switch (jsonMessage.action) {
            // ECHO запрос
            case act.ActionCallOnGet.ECHO:
                if (arduino != null) {
                    actions.echoActionUnity(arduino, 0, jsonMessage.value);
                }
                break;

            // SENDBTN запрос
            case act.ActionCallOnGet.SENDBTN:
                if (arduino != null) {
                    actions.getBTNActionUnity(
                        arduino,
                        jsonMessage.id,
                        jsonMessage.value);
                }
                break;

            // SENDSERVO запрос
            case act.ActionCallOnGet.SENDSERVO:
                if (arduino != null) {
                    actions.getSERVOActionUnity(
                        arduino,
                        jsonMessage.id,
                        jsonMessage.value);
                }
                break;

            // Если пришла хуета
            default:
                console.log('Unknown command from unity!!!');
                unity.send('Unknown command!!!');
                break;
            }
        } else {
            console.log('Unity message: empty');
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
        if (message != '') {
            const jsonMessage = JSON.parse(message);
            // Обработка запрашиваемого действия от клиента
            // eslint-disable-next-line max-len
            console.log(`Arduino message: ${jsonMessage.action}: ${jsonMessage.value}`);

            switch (jsonMessage.action) {
            case act.ActionCallOnGet.ECHO:
                if (unity != null) {
                    actions.echoActionArduino(unity, jsonMessage.value);
                    break;
                }

            // SENDBTN запрос
            case act.ActionCallOnGet.SENDBTN:
                if (unity != null) {
                    actions.getBTNActionArduino(
                        unity,
                        jsonMessage.id,
                        jsonMessage.value);
                }
                break;

            // SENDSERVO запрос
            case act.ActionCallOnGet.SENDSERVO:
                if (unity != null) {
                    actions.getSERVOActionArduino(
                        unity,
                        jsonMessage.id,
                        jsonMessage.value);
                }
                break;

            // Если пришла хуета
            default:
                console.log('Unknown command from arduino!!!');
                arduino.send('Unknown command!!!');
                break;
            }
        } else {
            console.log('Arduino message: empty');
        }
    } catch (error) {
        console.log('Error', error);
    }
}
module.exports = {onSendMessageUnity, onSendMessageArduino};
