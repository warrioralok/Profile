export function ProfileCard (props){
    const {name,age,greeting} = props;
    return (
        <>
        <p>This is profile of {name}</p>
        <p>His is age is {age}</p>
        <div>{greeting}</div> 
        <div>{props.children}</div>
        </>
    )
}