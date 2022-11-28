import React from "react";
import './InfoPanelWrapper.sass'

interface WrapperProps {
    title?: string
    name?: string
    children?: JSX.Element
}

const InfoPanelWrapper = ({title = 'Название блока', name, children}: WrapperProps) => {
    // вообще этот ф-л прекрасно выполняет библиотека classNames, но можно обойтись и таким методом
    const rootClasses = ["infoPanelWrapper"]
    if(name) rootClasses.push(name)
    return (
        <div className={rootClasses.join(' ')}>
            <div className="infoPanelWrapper__title">
                {title}
            </div>
            <div className="infoPanelWrapper__children">
                {children && children}
            </div>
        </div>
    )
}

export default InfoPanelWrapper;