import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import './Applications.sass'


const Applications = observer(() => {
    const {storeGroup} = useContext(Context)
    console.log(storeGroup.groupsByNode.slice())
    return (
        <div className="applications">
            {storeGroup.groupsByNode?.map((el) => (
                <div className="application" key={el.id}>
                    {el.application_caption}
                </div>
            ))}
        </div>
    )
})

export default Applications;