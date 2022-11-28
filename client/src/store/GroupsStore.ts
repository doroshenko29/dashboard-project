import {makeAutoObservable} from 'mobx';

export type GroupsList = {
    id: number, 
    capture: string | null
    node_captions: string[]
}

type GroupsInfo = {
    id: number,
    application_caption: string | null,
    email: string | null, 
    firstname: string | null,
    group_caption: string,
    groups_id: number,
    interface_caption: string | null,
    interface_status_color: string | null,
    interface_status_description: string | null,
    lastname: string | null,
    node_status_id: number,
    node_caption: string,
    node_status_color: string | null,
    node_status_description: string | null,
}

export default class GroupsStore {
    private _groupsInfo: GroupsInfo[];
    private _nodesInfo: object | null;
    private _groupsList: GroupsList[];
    private _groupsByNode: GroupsInfo[];
    private _activeGroup: GroupsList | null;
    private _activeNode: string | null;
    constructor(){
        this._groupsInfo = []
        this._nodesInfo = null
        this._groupsList = []
        this._groupsByNode = []
        this._activeGroup = null
        this._activeNode = null
        makeAutoObservable(this)
    }

    setGroups(groups: GroupsInfo[]) {
        this._groupsInfo = groups
        let newArr: GroupsList[] = []
        let tempObjForGroupListFilling = {}
        let tempNodesInfoObject = {}
        groups.forEach(element => {
            (tempObjForGroupListFilling as any)[element.groups_id] = {
                capture: element.group_caption,
                node_captions: [...(tempObjForGroupListFilling as any)[element.groups_id]?.node_captions || [], element.node_caption],
            };
            (tempNodesInfoObject as any)[element.node_caption] = {
                node_caption: element.node_caption,
                node_status_color: element.node_status_color,
                node_status_description: element.node_status_description,
            }
        });
        for(let key in tempObjForGroupListFilling){
            newArr.push({id: +key, capture: (tempObjForGroupListFilling as any)[key].capture, node_captions: (tempObjForGroupListFilling as any)[key].node_captions });
        }
        this._nodesInfo = tempNodesInfoObject
        this._groupsList = newArr
        this._groupsByNode = this._groupsInfo.filter((group) => {return group.node_caption === this._activeNode})
    }

    setActiveGroup(activeGroup: GroupsList | null) {
        if(this._activeGroup !== activeGroup) {
            this._activeGroup = activeGroup
        } else {
            this._activeGroup = null
        } 
    }

    setActiveNode(activeNode: string | null) {
        if(this._activeNode !== activeNode) {
            this._activeNode = activeNode
        } else {
            this._activeNode = null
        }
        // создаём массив, потому что связь с приложениями ко многим, поэтому приложений в теории можем получить массив для 1 ноды
        this._groupsByNode = this._groupsInfo.filter((group) => {return group.node_caption === this._activeNode})

    }

    get groups(){
        return this._groupsInfo
    }

    get nodesInfo(){
        return this._nodesInfo
    }

    get groupsList(){
        return this._groupsList
    }

    get activeGroup(){
        return this._activeGroup
    }

    get activeNode(){
        return this._activeNode
    }

    get groupsByNode(){
        return this._groupsByNode
    }
}