export const WinnerView = (props)=>{
    return (
      <div>
        <h1>Congratulations , you won the game!!</h1>
        <button type='button' onClick={props.replay}>Replay</button>
      </div>
    )
  }