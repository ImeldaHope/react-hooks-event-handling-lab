// Code Keypad Component Here

function Keypad (){
    function changeHandler(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input name='password' type="password" placeholder="Enter Password" onChange={changeHandler}></input>
        </div>
    )
}

export default Keypad;