import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import Administrator from "../Administrator";
import Applications from "../Applications";
import InfoPanelWrapper from "../InfoPanelWrapper";
import Interface from "../Interface";
import NodesTable from "../NodesTable";
import ServiceStatus from "../ServiceStatus";
import ThreeLineGraph from "../ThreeLineGraph";
import './Dashboadr.sass'

const Dashboadr = observer(() => {
    const {storeGroup} = useContext(Context)
    return (
        <div className="dashboadr">
            <div className="dashboadr__head">
                <div className="dashboadr__head__left">
                    <div className="dashboadr__head__title">
                        {storeGroup.activeGroup?.capture || 'Все'}
                        <div className="tooltip">Группа</div>
                    </div>
                    <ServiceStatus type="separate" />
                </div>
                <div className="dashboadr__head__right">
                    <div className="dashboadr__head__title">
                        {storeGroup.activeNode || 'Все'}
                        <div className="tooltip">Нода</div>
                    </div> 
                </div>
            </div>
            <div className="dashboadr__content">
                <InfoPanelWrapper title="Ноды" name="nodesTitle">
                    <NodesTable />
                </InfoPanelWrapper>
                <InfoPanelWrapper title="Метрика" name="metricsTitle">
                    <ThreeLineGraph />
                </InfoPanelWrapper>
                <InfoPanelWrapper title="Администратор" name="adminTitle" >
                    <Administrator />
                </InfoPanelWrapper>
                <InfoPanelWrapper title="Приложения" name="appsTitle">
                    <Applications />
                </InfoPanelWrapper>
                <InfoPanelWrapper title="Интерфейс" name="interfaceTitle" >
                    <Interface />
                </InfoPanelWrapper>
            </div>
        </div>
    )
})

export default Dashboadr;