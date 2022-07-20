import { useState } from "react";

const Adder = (props) => {
    const [userInput, setUserInput] = useState("");

    const {addUser} = props;

    //AWM2022A
    const addButtonHandler = (e) => {
        addUser({user: userInput, status:false});
    }

    const onChangeHandler = (e) => {
        setUserInput(e.target.value);
    }

    return(
        <div>
            <input type="text" className="UserTxt" onChange={onChangeHandler}/>
            <button onClick={addButtonHandler}>Add</button>
        </div>
    );
}

export default Adder;