function getF(e){
  switch(e){
    case 0:
      return 0
    case 1:
      return 1
    default:
      return (getF(e-1)+getF(e-2))
  }
}
export getF  
