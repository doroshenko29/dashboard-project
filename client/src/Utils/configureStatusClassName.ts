import classNames from "classnames";
export function configureStatusClassName(classBindingName: string, incomingValue: string | null): string{
    return classNames(
        classBindingName, {
            [`${classBindingName}--black`]: incomingValue === 'black',
            [`${classBindingName}--grey`]: incomingValue === 'grey',
            [`${classBindingName}--lightgreen`]: incomingValue === 'lightgreen',
            [`${classBindingName}--yellow`]: incomingValue === 'yellow',
            [`${classBindingName}--red`]: incomingValue === 'red',
            [`${classBindingName}--darkred`]: incomingValue === 'darkred',
        }
    )
}