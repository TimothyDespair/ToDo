// @flow
import type {
  vNode,
} from './vNode.js'


/**
 * Modifies generated DOM (DOMNode) in place by diffing current virtual
 * DOM state (newVNode) with previous virtual DOM state (oldNode).
 * @param {Element} ParentDOMNode
 *                            DOM element previously generated from VDOM
 * @param {vNode}   newVNode  Previous virtual DOM state node
 * @param {vNode}   oldVNode  Current virtual DOM state node
 * @param {index}   [index=0] Index of current DOMNode on DOMParentNode
 */
function updateDOMNode(
  DOMParentNode: Element,
  newVNode: vNode,
  oldVNode: vNode,
  index?:   number = 0,
) {
  const thisDOMNode = DOMParentNode.childNodes[index]
  // Cases:
  const addedVNode = !oldVNode;
  const removedVNode = !newVNode;
  const alteredVNode =
    typeof oldVNode !== typeof newVNode &&
    typeof oldVNode === 'string' ?
      oldVNode !== newVNode :
      node1.type !== node2.type

  if (newVNode)
    DOMParentNode.appendChild(vNodeToDOMNode(newVNode))
  else if (newVNodeMissing)
    DOMParentNode.removeChild(thisDOMNode)
  else if (alteredVNode)
    DOMParentNode.replaceChild(
      vNodeToDOMNode(newVNode),
      thisDOMNode,
    )
  else if (typeof newVNode !== 'string') {
    clipZip(oldVNode.children, newVNode.children)
      .map(([oldVNode, newVNode], index) => {
        updateDOMNode(
          thisDOMNode,
          newVNode,
          oldVNode,
          index,
        )
      })
  }
}
