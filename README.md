# EGO Chat

JavaScript library chat that use WebSocket.

## Example of usage

```javascript
const egoChat = new Chat({
    serverUrl: 'ws://localhost:7000',
    onOpen: [onOpen],
    onMessage: [onMessage]
});

/**
 * Listener of open connection
 *
 * @param {MessageEvent} message
 */
function onOpen(message) {
    //  Call on open connection
}

/**
 * Listener on coming message
 *
 * @param {MessageEvent} message
 */
function onMessage(message) {
    //  Do something with new incoming message
}

/**
 * Send message to chat by click on button
 *
 * @param e
 */
function eventSend(e) {
    //	Send JSON message
    egoChat.send(JSON.stringify({
        userInfo: {
            id: this.userInfo.id,
            name: this.userInfo.name,
            avatar: this.userInfo.avatar
        },
        data: {
            chatId: 1,
            text: input
        }
    }));
}
```

It's simple usage of chat.

## Documentation

> serverUrl: string|null;

Socket server URL.


> format: string;

Message format.


> connection: WebSocket|null;

WebSocket Connection.

> onClose: Function[];

`onClose` listeners


> onError: Function[];

`onError` listeners


> onMessage: Function[];

`onMessage` listeners


> onOpen: Function[];

`onOpen` listeners


> onBeforeSend: Function[];

`onBeforeSend` listeners


> onAfterSend: Function[];

`onAfterSend` listeners


> constructor(options);

`options.serverUrl:string` - Server URL of chat

`options.format:string` - Message format

`options.onClose:Function|Function[]` - `onClose` listeners

`options.onError:Function|Function[]` - `onError` listeners

`options.onMessage:Function|Function[]` - `onMessage` listeners

`options.onOpen:Function|Function[]`- `onOpen` listeners

Return `EgoChat`


> setServerUrl(serverUrl: string): void;

Set `Server URL`


> setFormat(format: string): void;

Set `Message Format`


> setOnClose(onClose: Function): void;

Set `onClose` listener


> removeOnClose(onClose: Function): void;

Remove `onClose` listener by function

> removeAllOnClose(): void;

Remove all `onClose` listeners


> setOnError(onError: Function): void;

Set `onError` listener


> removeOnError(onError: Function): void;

Remove `onError` listener by function

> removeAllOnError(): void;

Remove all `onError` listeners

> setOnMessage(onMessage: Function): void;

Set `onMessage` listener


> removeOnMessage(onMessage: Function): void;

Remove `onMessage` listener by function


> removeAllOnMessage(): void;

Remove all `onMessage` listeners


> setOnOpen(onOpen: Function): void;

Set `onOpen` listener


> removeOnOpen(onOpen: Function): void;

Remove `onOpen` listener by function


> removeAllOnOpen(): void;

Remove all `onOpen` listeners


> setOnBeforeSend(onBeforeSend: Function): void;

Set `onBeforeSend` listener


> removeOnBeforeSend(onBeforeSend: Function): void;

Remove `onBeforeSend` listener by function


> removeAllOnBeforeSend(): void;

Remove all `onBeforeSend` listeners


> setOnAfterSend(onAfterSend: Function): void;

Set `onAfterSend` listener


> removeOnAfterSend(onAfterSend: Function): void;

Remove `onAfterSend` listener by function


> removeAllOnAfterSend(): void;

Remove all `onAfterSend` listeners


> init(): void;

Init chat


> send(message: string): void;

Send message


> close(code?: number, reason?: string): void;

Close connection

`code:number` - A numeric value indicating the status code explaining why the connection is being
    closed. If this parameter is not specified, a default value of 1005 is assumed.

`reason:string` - A human-readable string explaining why the connection is closing.
    This string must be no longer than 123 bytes of UTF-8 text (not characters).
