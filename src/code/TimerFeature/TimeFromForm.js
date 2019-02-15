class TimeFromForm{
  
  constructor(endTime){
    this.start = new Date();
    this.from = this.start.getTime();
    this.till = this.convertToUTCTime(endTime)
  }
 
  get timeFrom(){
    return this.from
  }

  get timeTill(){
    return this.till
  }

  convertToUTCTime(formTime){
    var endTime = this.start
    endTime.setHours(this.get_hours(formTime))
    endTime.setMinutes(this.get_mins(formTime))
    endTime.setSeconds(0)
    endTime.setMilliseconds(0)
    return endTime.getTime()
  }

  get_hours(string){
    return parseInt(string.split('').splice(0,2).join(''))
  }
  
  get_mins(string){
      return parseInt(string.split('').splice(3,2).join(''))
  }
}

export default TimeFromForm