import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import './Interface.sass'


const Interface = observer(() => {
    const {storeGroup} = useContext(Context)
    // interface_status_color
    // получаем первый эл-т массива, т.к. у ноды может быть только 1 интерфейс
    return (
        <div className={"interface " + storeGroup.groupsByNode[0]?.interface_status_color || ''}>
            <div className={"interface__title " + storeGroup.groupsByNode[0]?.interface_status_color || ''}>
            {storeGroup.groupsByNode[0]?.interface_status_description}
            </div>
            {storeGroup.groupsByNode[0]?.interface_caption}
        </div>
    )
})

export default Interface;