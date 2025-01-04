function well(x){
    let goods = x.filter(n=> n==='good').length;
    
      if(goods === 1 ||goods === 2 ){
        return 'Publish!'
      }else if(goods> 2){
        return 'I smell a series!'
      }else{
        return 'Fail!'
      }
    }