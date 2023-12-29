export const OverlayContainer = (props) => {
    return <div className="fixed left-0 z-0 h-full w-full flex">
        {props.children}
    </div>
}