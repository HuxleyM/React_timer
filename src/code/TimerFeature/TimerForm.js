import React from 'react';

const TimerForm = ( {handleForm} ) => {

   return (
        <form  onSubmit={ handleForm } >
            <label>work until</label>
            <hr/>
            <input type='time' id ='time_till' name='time_till' required ></input>
            <br/>
            <br/>
            <input 
                id ='submit_form'
                type="submit" 
                value="Submit" 
            /> 
        </form>
   )
}
export default TimerForm