import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import { GroupsList } from "../../store/GroupsStore";
import './GroupFilter.sass'

const GroupFilter = observer(() => {
    const {storeGroup} = useContext(Context)
    const activateGroup = (el: GroupsList) => {
        storeGroup.setActiveGroup(el)
    }

    const groupElement: JSX.Element[] = []

    storeGroup.groupsList.forEach(el => {
        if(!storeGroup.activeNode || 
            el?.node_captions.includes(storeGroup.activeNode)
        ) {
            groupElement.push(
                <li 
                    onClick={() => activateGroup(el)} 
                    className={classNames(
                        "groupFilter__list__item",
                        {
                            'active': el.id === storeGroup.activeGroup?.id
                        }
                    )} 
                    key={el.id}
                >
                    {el.capture}
                </li>
            )
        }  
    })

    return (
        <div className="groupFilter">
            <ul className="groupFilter__list">
                {groupElement}
            </ul>
        </div>
    )
})

export default GroupFilter;