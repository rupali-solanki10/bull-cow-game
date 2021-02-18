export const StepList = (props)=>{
    let steps = props.steps;
    return (
      <table>
          <tbody>
          <tr>
          <th>Step</th>
          <th>Guess</th>
          <th>Guess Result</th></tr>
          {
            steps.map((step, index)=>{
              return <tr key={index}>
                <td>{step.step}</td>
                <td>{step.guess}</td>
                <td>{step.bull} {step.bull > 1 ? 'bulls' : 'bull'} {step.cow} {step.cow > 1 ? 'cows' : 'cow'}</td>
              </tr>
            })
          }
          </tbody>
  
        </table>
    )
  }
  