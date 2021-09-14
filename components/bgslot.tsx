

export default function BGSlot(props){
    const style = props.style || {};
    const color = props.color || 'white';
    const className = props.className || "";

    return<div style={style} className={"icon noselect " + className}>
    <svg className={"shadow"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 282" style={{width: '100%', height: '100%', position: 'absolute'}}><path fill={color} d="M218.534,0a45,45,0,0,1,38.96,22.481l55.489,96a45,45,0,0,1,0,45.039l-55.489,96A45,45,0,0,1,218.534,282H107.466a45,45,0,0,1-38.96-22.481l-55.489-96a45,45,0,0,1,0-45.039l55.489-96A45,45,0,0,1,107.466,0Z" opacity="1"/></svg>
    {props.children}
  </div>
}