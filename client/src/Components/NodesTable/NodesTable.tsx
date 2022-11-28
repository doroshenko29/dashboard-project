import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import { configureStatusClassName } from "../../Utils/configureStatusClassName";
import './NodesTable.sass'

export type metric = {
    admin: number;
    caption: string;
    cpu_utilization: number;
    datetime: string;
    disk_utilization: number;
    id: number;
    interface: number;
    memory_utilization: number;
    status: number;
}

const NodesTable = observer(() => {
    const {storeMetrics, storeGroup} = useContext(Context)
    const {freshMetrics} = storeMetrics
    const changeActiveNode = (key: any) => {
        storeGroup.setActiveNode((freshMetrics as any)[key].caption)
    }
    const nodeElement: JSX.Element[] = []
    for(let key in freshMetrics){
        if(!storeGroup.activeGroup?.node_captions || 
            storeGroup.activeGroup?.node_captions.includes((freshMetrics as any)[key].caption)
        ) {
            const nodeStatusColor = (storeGroup.nodesInfo as any)[(freshMetrics as any)[key].caption].node_status_color
            nodeElement.push(
                <tr 
                    onClick={() => {
                        changeActiveNode(key)
                    }} 
                    className={storeGroup.activeNode === (freshMetrics as any)[key].caption
                        ? 'active'
                        : ''}
                >
                    <td>
                        <div 
                            className={configureStatusClassName('nodesTable__statusIndicator', nodeStatusColor)}
                        ></div>
                    </td>
                    <td>{(freshMetrics as any)[key].caption}</td>
                    <td className={classNames({
                        'redNode': (freshMetrics as any)[key].cpu_utilization > 95,
                        'orangeNode': (freshMetrics as any)[key].cpu_utilization < 95 && (freshMetrics as any)[key].cpu_utilization > 85
                    })}>{(freshMetrics as any)[key].cpu_utilization}</td>
                    <td>{(freshMetrics as any)[key].memory_utilization}</td>
                    <td>{(freshMetrics as any)[key].disk_utilization}</td>
                </tr>
            )
        }  
    }

    return (
        <table className="nodesTable" cellSpacing="0">
            <colgroup>
                <col className="nodesTable__status" />
                <col className="nodesTable__name" />
                <col className="nodesTable__cpu" />
                <col className="nodesTable__memory" />
                <col className="nodesTable__disk" />
            </colgroup>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th colSpan={3} className="nodesTable__disposal">Утилизация</th>
                </tr>
                <tr>
                    <th>Статус</th>
                    <th>Название</th>
                    <th>cpu</th>
                    <th>memory</th>
                    <th>disk</th>
                </tr>
            </thead>
            <tbody className="nodesTable__body">
                {nodeElement}
            </tbody>
        </table>
    )
})

export default NodesTable;