import { isIE9 } from './env';
import { camelize } from './lang';
import _scrollIntoView from 'dom-scroll-into-view';

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && el.hasOwnProperty('className')) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

export function addClass(el, cls) {
  if (el.classList) {
    const clsArr = cls.split(' ');
    clsArr.map(cl => el.classList.add(cl));
  } else {
    const cur = ` ${el.getAttribute('class') || ''} `;
    if (cur.indexOf(` ${cls} `) < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

export function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    let cur = ` ${el.getAttribute('class') || ''} `;
    const tar = ` ${cls} `;
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

export function addStyle(el, clsObj) {
  Object.keys(clsObj).forEach(name => {
    el.style[camelize(name)] = clsObj[name];
  });
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

export function insertBefore(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

export function insertAfter(el, target) {
  if (target.nextSibling) {
    insertBefore(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

export function contains(root, node) {
  let nd = node;
  while (nd) {
    if (nd === root) {
      return true;
    }
    nd = nd.parentNode;
  }
  return false;
}

export function getTrustSlotNode(node) {
  const childNode = node.nextSibling;
  if (childNode.nodeType !== 1) {
    return getTrustSlotNode(childNode);
  }
  return childNode;
}

export const scrollIntoView = _scrollIntoView;
