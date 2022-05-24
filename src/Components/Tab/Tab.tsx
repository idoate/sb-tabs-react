interface Tabprops {
    tabName:string
    setThisTab: Function
    tabText:string

}
export function Tab(props:Tabprops){
    return(
        <button onClick={ () => props.setThisTab(props.tabText) } >{props.tabName}</button>
    )
}