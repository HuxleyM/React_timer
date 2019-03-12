class TimeFromForm{
  
  constructor(endTime){
    //ok so here we are cashing the time now to allow us to build
    this.from = Date.now();
    this.till = this.convertToUTCTime(endTime)
  }
 
  get timeFrom(){
    return this.from
  }

  get timeTill(){
    return this.till
  }

  convertToUTCTime(desiredEndTime){
    var builtEndTime = new Date();
    builtEndTime.setHours(this.get_hours(desiredEndTime))
    builtEndTime.setMinutes(this.get_mins(desiredEndTime))
    builtEndTime.setSeconds(0)
    builtEndTime.setMilliseconds(0)
    return builtEndTime.getTime()
  }

  get_hours(string){
    return parseInt(string.split('').splice(0,2).join(''))
  }
  
  get_mins(string){
      return parseInt(string.split('').splice(3,2).join(''))
  }
}

export default TimeFromForm