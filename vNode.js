//@flow
type vNode: {|
  type: string,
  properties: {},
  children: Array<vNode>
|} | string

export type vNode
