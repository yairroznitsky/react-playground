export default function DayOfWeek(props){
    const weekdaysArr = ["Monday","Tuesday","Wedensday","Thursday","Friday","Saturday","Sunday"];
    return <div>{weekdaysArr[props.day]}</div>;


}