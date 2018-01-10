//@flow
import type vNode from './vNode.js'

import {
  Map,
  List,
} from 'immutable'

import {
  clipZip,
} from './clipZip.js'

/**
 * Takes a virtual DOM node (or a tree of them) and returns real DOM elements
 * which reflect them.
 * A description of a vDom node can be found in vNode.js
 * @param   {vNode | string} vNode  A virtual dom node.
 * @returns {Element}               A DOM Element
 */
function vNodeToDOMNode(
  vNode:vNode,
): Element {
  if (typeof vNode === 'string')
    return document.createTextNode(vNode)

  const DOMnode = document.createElement(vNode.type)

  vNode.children
    .map(vNodeToDOM)
    .forEach(DOMnode.appendChild.bind(DOMnode))

  return DOMnode
}
