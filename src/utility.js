export function searchRandom(count, arr){
    let answer = [], counter = 0;
    while(counter < count){
      let rand = arr[Math.floor(Math.random() * arr.length)];
      if(!answer.includes(rand)){
        answer.push(rand);
        counter++;
      }
    }
    return answer;
  }