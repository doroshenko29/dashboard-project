import GroupsStore from "../store/GroupsStore"
import groups from './mockData/groups.json'

describe("GroupsStore", () => {
  const store = new GroupsStore()
  beforeEach(() => {
    store.setGroups(groups)
  })
  it("check filling groups", async () => {
    expect(store.groups.length).toBe(16)
  })
  it("check filling groups list", async () => {
    expect(store.groupsList.length).toBe(4)
  })
  it("check filling nodes info", async () => {
    expect(store.nodesInfo['spb-web-01']).not.toBeUndefined()
  })
  it("check working with activation and deactivation node", async () => {
    expect(store.groupsByNode.length).toBe(0)
    store.setActiveNode('spb-web-01')
    expect(store.groupsByNode[0].id).not.toBeUndefined()
    expect(store.groupsByNode[0].node_caption).toBe('spb-web-01')
  })
  it("check group activation", async () => {
    store.setActiveGroup({id:1,groups_id:1,group_caption:"Санкт-Петербург"})
    expect(store.activeGroup.group_caption).toBe("Санкт-Петербург")
    store.setActiveGroup(null)
    expect(store.activeGroup?.group_caption).toBeUndefined()
  })
})