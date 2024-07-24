
function Skills(){
    const Skills=["frontend","designing","backend"]
    return(
        
        <div>
            <ul>
                {Skills.map(s=><li>{s}</li>)}
            </ul>
        </div>
    )
}

export default Skills