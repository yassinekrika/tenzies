
export default function Die(props) {
    return (
        <div className="die-face" onClick={props.holdDice} style={{backgroundColor: props.isHeld ? '#59e391' : 'white'}} >
            <h1 className="die-num">{props.value}</h1>
        </div>
    )
}

