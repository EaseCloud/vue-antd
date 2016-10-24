import * as _lang from './lang';
export const camelcaseToHyphen = _lang.camelcaseToHyphen;
export const camelize = _lang.camelize;
export const strToObj = _lang.strToObj;
export const throttle = _lang.throttle;

import * as _env from './env';
export const inBrowser = _env.inBrowser;
export const isIE9 = _env.isIE9;

import * as _dom from './dom';
export const scrollIntoView = _dom.scrollIntoView;
export const addClass = _dom.addClass;
export const removeClass = _dom.removeClass;
export const addStyle = _dom.addStyle;
export const insertBefore = _dom.insertBefore;
export const insertAfter = _dom.insertAfter;
export const contains = _dom.contains;
export const getTrustSlotNode = _dom.getTrustSlotNode;

import * as _props from './props';
export const any = _props.any;
export const defaultProps = _props.defaultProps;
export const oneOfType = _props.oneOfType;
export const oneOf = _props.oneOf;

import * as _events from './event';
export const addEventListener = _events.addEventListener;
export const addEndEventListener = _events.addEndEventListener;
export const removeEndEventListener = _events.removeEndEventListener;

import * as _guid from './guid';
export const guid = _guid.guid;

import _cx from 'classnames';
export const cx = _cx;

import _KeyCode from './KeyCode';
export const KeyCode = _KeyCode;

import _slotMixin from './slotMixin';
export const slotMixin = _slotMixin;

export function getPlainObject(vueObject) {
  return JSON.parse(JSON.stringify(vueObject));
}

