export default function Initials(props){
    var nameArr = props.name.split(" ");
    return <div>{nameArr[0][0] + "." + nameArr[1][0]}</div>;   
}