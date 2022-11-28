import React from "react";
import GroupFilter from "../GroupFilter";
import ServiceStatus from "../ServiceStatus";
import './SideBar.sass'

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBar__header">
                <ServiceStatus />
            </div>
            <GroupFilter />
        </div>
    )
}

export default SideBar;