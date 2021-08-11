import React from 'react';

class InputField extends React.Component {
    render () {
        return (
            <form>
                <input type='text' name='todo' placeholder='Enter your to do..'/>
            </form>
        )
    }


};

export default InputField;