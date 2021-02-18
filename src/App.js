import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {searchRandom} from './utility';
import {WinnerView} from './winnerView';
import {StepList} from './stepList';

const data = ['0','1','2','3','4','5','6','7','8','9'];

const App = ()=>{
  const [hiddenSeq, setHiddenSeq] = useState(searchRandom(4, data));
  const [seq, setCurrentSeq] = useState('');
  const [steps, setSteps] = useState([]);
  const [won, setWon] = useState(false);

  function handleClick(event){
    if(seq.length < 4 ){
      return ;
    }
    let bull = 0;
    let cow = 0;
    //check if seq maches-- calculate bull and cow
    for(let i=0;i< seq.length;i++){
      let index = hiddenSeq.indexOf(seq[i]);
      if(index > -1){//hidden seqencs has the char
        if(index == i){//hidden seqencs has the char in place
          bull++;
        }
        else{//hidden seqencs has the char but not on right place
          cow++;
        }
      }
    }
    if(bull == 4){
      setWon(true)
    }
    else{
      setSteps(prev=>{
        let newStep = {
          step : steps.length+1,
          guess :seq,
          bull:bull,
          cow:cow
        }
        return [...prev].concat(newStep);
      })
    }
    setCurrentSeq('');
  }
  
  function handleChange({target}){
    const regexDigitOnly = /^[0-9\b]+$/;
    const regexnoRepeatedDigit =/(\d).*\1/;
    let val = target.value;
    if(regexDigitOnly.test(val) && !regexnoRepeatedDigit.test(val)){
      setCurrentSeq(val);
    }
  }

  function handleReplay(){
    setWon(false);
    setHiddenSeq(searchRandom(4, data));
    setSteps([]);
  }

  return (
    <div className="App">
      {(won) ?
       <WinnerView replay={handleReplay}/> : 
       <div className="main-container">
       <h1>Let's Play Bulls and Cows!!</h1>
       <input type="text" pattern="[0-9]*" id="seq" minLength='4' maxLength='4' value={seq} onChange={handleChange}/>
       <input type='button' onClick={handleClick} value="check"/>
       <hr/>
       <StepList steps={steps}/>
        </div>
      }
    </div>
  );
}

export default App;
