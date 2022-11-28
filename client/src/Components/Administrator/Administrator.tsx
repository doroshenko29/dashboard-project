import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import './Administrator.sass'


const Administrator = observer(() => {
    const {storeGroup} = useContext(Context)
    // получаем первый эл-т массива, т.к. у ноды может быть только 1 админ
    return (
        <div>
            <div className="administrator">
                <div className="administrator__title">
                    Имя
                </div>
                <div className="administrator__item">
                    {storeGroup.groupsByNode[0]?.lastname || '-'}
                </div>
            </div>
            <div className="administrator">
                <div className="administrator__title">
                    Фамилия
                </div>
                <div className="administrator__item">
                    {storeGroup.groupsByNode[0]?.firstname || '-'}
                </div>
            </div>
            <div className="administrator">
                <div className="administrator__title">
                    email
                </div>
                <div className="administrator__item">
                    {storeGroup.groupsByNode[0]?.email || '-'}
                </div>
            </div>
        </div>
    )
})

export default Administrator;