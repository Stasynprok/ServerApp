const onSend = require('./scripts/onSendMessage');
const actions = require('./scripts/actions');
const ws = require('ws');
const url = require('url');

const clients = [];
let unity;
let arduino;

const wss = new ws.Server({host: '192.168.1.5', port: 8080},
    () => console.log('Server started on 8080'));

wss.on('connection', (ws, request) => onConnect(ws, request));

/**
 * Инициализирует пользователя при подключении к серверу
 * @param {any} ws - клиент websocket для отправки и принятия сообщений
 * @param {any} request - параметры клиента (куки)
 */
function onConnect(ws, request) {
    const data = url.parse(request.url, true).query;

    try {
        if (data.user == 'unity') {
            if (unity == null) {
                unity = ws;
                unity.on('message',
                    (message) =>
                        onSend.onSendMessageUnity( message, arduino, unity));
                unity.on('close', onDisconnectUnity);
                actions.sendConnectionActionUnity(unity, 0, 1);
                console.log('Unity client connect');
            } else {
                console.log('Unity client push to queue');
                clients.push(ws);
                actions.sendConnectionActionUnity(ws, 1, 1);
            }
        }

        if (data.user == 'arduino') {
            if (arduino == null) {
                arduino = ws;
                arduino.on('message',
                    (message) =>
                        onSend.onSendMessageArduino(message, arduino, unity));
                arduino.on('close', onDisconnectArduino);
                console.log('Arduino client connect');
                actions.sendConnectionActionArduino(arduino, 0, 1);
            }
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

/**
 * Логика на отключение активного клиента unity от сервера
 */
function onDisconnectUnity() {
    if (clients.length > 0) {
        unity = clients.shift();
        // Отправка подтверждения подключения
        actions.sendConnectionActionUnity(unity, 0, true);
    } else {
        unity = null;
    }
}

/**
 * Логика на отключение ардуины от сервера
 */
function onDisconnectArduino() {
    arduino = null;
    console.log(arduino);
}
