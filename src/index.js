
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix)){
    let res = []
    for(let i=0; i<matrix.length; i++){
      if(i % 2 === 0){res.push(...matrix[i])}
      else{
        let sorted = matrix[i].sort()
        sorted.reverse()
        res.push(...sorted)
      }
    }
    return res;
  } else {return []}
}
