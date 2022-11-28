import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Context } from "../..";
import { configureStatusClassName } from "../../Utils/configureStatusClassName";
import './ServiceStatus.sass'

type ServiceStatusType = {
    type?: 'default' | 'separate'
}

const ServiceStatus:FC<ServiceStatusType> = observer(({type = 'default'}) => {
    const {storeGroup} = useContext(Context)
    const localGroups = type === 'separate' 
        ? storeGroup.groups.slice().filter((el) => el.group_caption === storeGroup.activeGroup?.capture || !storeGroup.activeGroup?.capture)
        : storeGroup.groups.slice()
    const sorted = localGroups.sort((a, b) => a?.node_status_id < b?.node_status_id? 1: -1)
    return (
        <div className={classNames(
            "serviceStatus", {
                'serviceStatus--separateView': type === 'separate'
            }
        )}>
            <div className={configureStatusClassName('serviceStatus__indicator', sorted[0]?.node_status_color)}></div>
            <div className="serviceStatus__info">
                {type === 'default' && <div className="serviceStatus__info__title">
                    Cтатус сервиса:
                </div>}
                <div className="serviceStatus__info__value">
                    {sorted[0]?.node_status_description || 'Без статуса'}
                </div>
            </div>
            <div className="tooltip">Статус сервиса по выбранной группе</div>
        </div>
    )
})

export default ServiceStatus;