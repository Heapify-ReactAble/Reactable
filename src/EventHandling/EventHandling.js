import React from 'react'

// const EventHandling = () => {
//     const btnClick = () => {
//         alert('The button is clicked');
//     }

//     return (
//         <div>
//             Event Handling
//             <button onClick={btnClick}>Click Me</button>
            
//         </div>
//     )
// }

// export default EventHandling;

class EventHandling extends React.Component {
    constructor(props) {
        super(props);
        this.btnClick = this.btnClick.bind(this);
    }

    btnClick () {
        alert("Button is clicked");
    };

    // btnClick = () =>  alert('Button is clicked');

    submitForm = (e) => {
        e.preventDefault();
    }
    

    render() {
        return <div>
            <button onClick={this.btnClick}>Click Me</button>
            <form onSubmit={this.submitForm}>

            </form>
        </div>;
    }
}
 
export default EventHandling;
