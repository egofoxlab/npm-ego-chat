/*
 * Developed by EGOFOXLAB.
 * Site http://egofoxlab.com/
 * Copyright (c) 2019.
 */

declare namespace EgoChat {

    /**
     * Socket server URL
     *
     * * @type {null|string}
     */
    export let serverUrl: string;

    /**
     * Message format
     *
     * @type {string}
     */
    export let format: string;

    /**
     * WebSocket Connection
     *
     * @type {null|WebSocket}
     */
    export let connection: WebSocket|null;

    /**
     * `onClose` listeners
     *
     * @type {Array}
     */
    export let onClose: Function[];

    /**
     * `onError` listeners
     *
     * @type {Array}
     */
    export let onError: Function[];

    /**
     * `onMessage` listeners
     *
     * @type {Array}
     */
    export let onMessage: Function[];

    /**
     * `onOpen` listeners
     *
     * @type {Array}
     */
    export let onOpen: Function[];

    /**
     * `onBeforeSend` listeners
     *
     * @type {Array}
     */
    export let onBeforeSend: Function[];

    /**
     * `onAfterSend` listeners
     *
     * @type {Array}
     */
    export let onAfterSend: Function[];

    /**
     * Set `Server URL`
     *
     * @param {string} serverUrl
     */
    export function setServerUrl(serverUrl: string): void;

    /**
     * Set `Message Format`
     *
     * @param {string} format
     */
    export function setFormat(format: string): void;

    //region `onClose` listener
    /**
     * Set `onClose` listener
     *
     * @param {Function} onClose
     */
    export function setOnClose(onClose: Function): void;

    /**
     * Remove `onClose` listener by function
     *
     * @param {Function} onClose
     */
    export function removeOnClose(onClose: Function): void;

    /**
     * Remove all `onClose` listeners
     */
    export function removeAllOnClose(): void;
    //endregion

    //region `onError` listener
    /**
     * Set `onError` listener
     *
     * @param {Function} onError
     */
    export function setOnError(onError: Function): void;

    /**
     * Remove `onError` listener by function
     *
     * @param {Function} onError
     */
    export function removeOnError(onError: Function): void;

    /**
     * Remove all `onError` listeners
     */
    export function removeAllOnError(): void;
    //endregion

    //region `onMessage` listener
    /**
     * Set `onMessage` listener
     *
     * @param {Function} onMessage
     */
    export function setOnMessage(onMessage: Function): void;

    /**
     * Remove `onMessage` listener by function
     *
     * @param {Function} onMessage
     */
    export function removeOnMessage(onMessage: Function): void;

    /**
     * Remove all `onMessage` listeners
     */
    export function removeAllOnMessage(): void;
    //endregion

    //region `onOpen` listener
    /**
     * Set `onOpen` listener
     *
     * @param {Function} onOpen
     */
    export function setOnOpen(onOpen: Function): void;

    /**
     * Remove `onOpen` listener by function
     *
     * @param {Function} onOpen
     */
    export function removeOnOpen(onOpen: Function): void;

    /**
     * Remove all `onOpen` listeners
     */
    export function removeAllOnOpen(): void;
    //endregion

    //region `onBeforeSend` listener
    /**
     * Set `onBeforeSend` listener
     *
     * @param {Function} onBeforeSend
     */
    export function setOnBeforeSend(onBeforeSend: Function): void;

    /**
     * Remove `onBeforeSend` listener by function
     *
     * @param {Function} onBeforeSend
     */
    export function removeOnBeforeSend(onBeforeSend: Function): void;

    /**
     * Remove all `onBeforeSend` listeners
     */
    export function removeAllOnBeforeSend(): void;
    //endregion

    //region `onAfterSend` listener
    /**
     * Set `onAfterSend` listener
     *
     * @param {Function} onAfterSend
     */
    export function setOnAfterSend(onAfterSend: Function): void;

    /**
     * Remove `onAfterSend` listener by function
     *
     * @param {Function} onAfterSend
     */
    export function removeOnAfterSend(onAfterSend: Function): void;

    /**
     * Remove all `onAfterSend` listeners
     */
    export function removeAllOnAfterSend(): void;
    //endregion

    /**
     * Init chat
     */
    export function init(): void;

    /**
     * Send message
     *
     * @param {String} message
     */
    export function send(message: string): void;

    /**
     * Close connection
     *
     * @param {number} [code] - A numeric value indicating the status code explaining why the connection is being
     * closed. If this parameter is not specified, a default value of 1005 is assumed.
     * @param {string} [reason] - A human-readable string explaining why the connection is closing.
     * This string must be no longer than 123 bytes of UTF-8 text (not characters).
     */
    export function close(code?: number, reason?: string): void;

}

export = EgoChat;
