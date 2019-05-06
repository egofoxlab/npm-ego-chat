/*
 * Developed by EGOFOXLAB.
 * Site http://egofoxlab.com/
 * Copyright (c) 2019.
 */


declare namespace EgoChat {

    export class Chat {
        /**
         * Socket server URL
         *
         * * @type {null|string}
         */
        serverUrl: string;

        /**
         * Message format
         *
         * @type {string}
         */
        format: string;

        /**
         * WebSocket Connection
         *
         * @type {null|WebSocket}
         */
        connection: WebSocket|null;

        /**
         * `onClose` listeners
         *
         * @type {Array}
         */
        onClose: Function[];

        /**
         * `onError` listeners
         *
         * @type {Array}
         */
        onError: Function[];

        /**
         * `onMessage` listeners
         *
         * @type {Array}
         */
        onMessage: Function[];

        /**
         * `onOpen` listeners
         *
         * @type {Array}
         */
        onOpen: Function[];

        /**
         * `onBeforeSend` listeners
         *
         * @type {Array}
         */
        onBeforeSend: Function[];

        /**
         * `onAfterSend` listeners
         *
         * @type {Array}
         */
        onAfterSend: Function[];

        /**
         *
         * @param {object} options
         * @param {string} options.serverUrl - Server URL of chat
         * @param {string} options.format - Message format
         * @param {Function|Function[]} [options.onClose] - `onClose` listener/s
         * @param {Function|Function[]} [options.onError] - `onError` listener/s
         * @param {Function|Function[]} [options.onMessage] - `onMessage` listener/s
         * @param {Function|Function[]} [options.onOpen] - `onOpen` listener/s
         * @returns {EgoChat}
         * @constructor
         */
        constructor(options);

        /**
         * Set `Server URL`
         *
         * @param {string} serverUrl
         */
        setServerUrl(serverUrl: string): void;

        /**
         * Set `Message Format`
         *
         * @param {string} format
         */
        setFormat(format: string): void;

        //region `onClose` listener
        /**
         * Set `onClose` listener
         *
         * @param {Function} onClose
         */
        setOnClose(onClose: Function): void;

        /**
         * Remove `onClose` listener by function
         *
         * @param {Function} onClose
         */
        removeOnClose(onClose: Function): void;

        /**
         * Remove all `onClose` listeners
         */
        removeAllOnClose(): void;
        //endregion

        //region `onError` listener
        /**
         * Set `onError` listener
         *
         * @param {Function} onError
         */
        setOnError(onError: Function): void;

        /**
         * Remove `onError` listener by function
         *
         * @param {Function} onError
         */
        removeOnError(onError: Function): void;

        /**
         * Remove all `onError` listeners
         */
        removeAllOnError(): void;
        //endregion

        //region `onMessage` listener
        /**
         * Set `onMessage` listener
         *
         * @param {Function} onMessage
         */
        setOnMessage(onMessage: Function): void;

        /**
         * Remove `onMessage` listener by function
         *
         * @param {Function} onMessage
         */
        removeOnMessage(onMessage: Function): void;

        /**
         * Remove all `onMessage` listeners
         */
        removeAllOnMessage(): void;
        //endregion

        //region `onOpen` listener
        /**
         * Set `onOpen` listener
         *
         * @param {Function} onOpen
         */
        setOnOpen(onOpen: Function): void;

        /**
         * Remove `onOpen` listener by function
         *
         * @param {Function} onOpen
         */
        removeOnOpen(onOpen: Function): void;

        /**
         * Remove all `onOpen` listeners
         */
        removeAllOnOpen(): void;
        //endregion

        //region `onBeforeSend` listener
        /**
         * Set `onBeforeSend` listener
         *
         * @param {Function} onBeforeSend
         */
        setOnBeforeSend(onBeforeSend: Function): void;

        /**
         * Remove `onBeforeSend` listener by function
         *
         * @param {Function} onBeforeSend
         */
        removeOnBeforeSend(onBeforeSend: Function): void;

        /**
         * Remove all `onBeforeSend` listeners
         */
        removeAllOnBeforeSend(): void;
        //endregion

        //region `onAfterSend` listener
        /**
         * Set `onAfterSend` listener
         *
         * @param {Function} onAfterSend
         */
        setOnAfterSend(onAfterSend: Function): void;

        /**
         * Remove `onAfterSend` listener by function
         *
         * @param {Function} onAfterSend
         */
        removeOnAfterSend(onAfterSend: Function): void;

        /**
         * Remove all `onAfterSend` listeners
         */
        removeAllOnAfterSend(): void;
        //endregion

        /**
         * Init chat
         */
        init(): void;

        /**
         * Send message
         *
         * @param {String} message
         */
        send(message: string): void;

        /**
         * Close connection
         *
         * @param {number} [code] - A numeric value indicating the status code explaining why the connection is being
         * closed. If this parameter is not specified, a default value of 1005 is assumed.
         * @param {string} [reason] - A human-readable string explaining why the connection is closing.
         * This string must be no longer than 123 bytes of UTF-8 text (not characters).
         */
        close(code?: number, reason?: string): void;
    }

}

export = EgoChat;
