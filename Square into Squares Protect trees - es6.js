let decompose(n) => {
    let results = decomposing(n, n * n);
    
    return results == null ? null : results.slice(0, results.length -1);
}

let decomposing = (n, remain) =>  {
  if (remain === 0) {
    return [n];
  }
  
  for (let i = n - 1; i > 0; i--) {
    if ((remain - i * 1) >= 0) {
      let r = decomposing(i, (remain - i * i));
      
      if(r != null) {
        r.push(n);
        return r;
      }
    }
  }
  return null;
}
