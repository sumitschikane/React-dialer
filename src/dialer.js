import React, {Component} from 'react';
import './css/style.css';

class Dialer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numberArray : []
        };

        this.dialpadButton = this.dialpadButton.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.callNumber = this.callNumber.bind(this);
        this.clearClick = this.clearClick.bind(this);
        this.hold = this.hold.bind(this);
        this.dialpadCase= React.createRef();
    }
    
    dialpadButton(event, data) {
        if ( !this.dialpadCase.current.classList.contains('deactive')) {
            this.setState(prevState => ({
                numberArray: [...prevState.numberArray, data]
            }))
        }
    }

    handleInput(event) {
        this.setState({
            numberArray: [event.target.value]
        });
    }

    callNumber(event) {
        this.setState({
            numberArray: ['Calling...']
        });
        //this.activateInCallInterface();
    }

    clearClick(event) {
        this.setState({
            numberArray: []
        });
    }

    hold(event) {
        this.setState({
            numberArray: ['On Hold.']
        });
    }

    activateInCallInterface() {
        //this.changeClearIntoHangUp();
        console.log(this.state.numberArray);
    }

    componentWillMount() 
    { 
        //console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        //console.log("componentDidMount()"); 
    } 
    shouldComponentUpdate(nextProps, nextState) 
    { 
        //console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        //console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        //console.log("componentDidUpdate()"); 
    } 

    render() {

        let compiledNumber = "";
        let callReadyClass = "";
        let clearReadyClass = "";
        let skipReadyClass = "";
        let btnArr = {skip:'Skip', clear:'Clear'};
        if (this.state.numberArray.length > 0){ 
            compiledNumber = this.state.numberArray.join('');
            
            if (this.state.numberArray[0] == 'Calling...') {
                btnArr = {skip:'Hold', clear:'Hang Up'};
                clearReadyClass = 'clear ready';
            } else if (this.state.numberArray[0] == 'On Hold.') {
                btnArr = {skip:'Hold', clear:'Hang Up'};
                skipReadyClass = 'skip ready';
                clearReadyClass = 'clear ready';
            } else {
                callReadyClass = 'call ready';
                clearReadyClass = 'clear ready';
            }
        } 
        
        return (
            <div id="wrapper">
                <div id="phone">
                    <div id="numberDisplay">
                        <input type='tel' value={compiledNumber} onChange={this.handleInput} />
                    </div>
                    <div id="dialpad" className="button-3"  ref={this.dialpadCase}>
                        <ul>
                            <li className="first" onClick={((e) => this.dialpadButton(e, 1))}>1</li>
                            <li onClick={((e) => this.dialpadButton(e, 2))}>2</li>
                            <li className="last" onClick={((e) => this.dialpadButton(e, 3))}>3</li>
                            <li className="first" onClick={((e) => this.dialpadButton(e, 4))}>4</li>
                            <li onClick={((e) => this.dialpadButton(e, 5))}>5</li>
                            <li className="last" onClick={((e) => this.dialpadButton(e, 6))}>6</li>
                            <li className="first" onClick={((e) => this.dialpadButton(e, 7))}>7</li>
                            <li onClick={((e) => this.dialpadButton(e, 8))}>8</li>
                            <li className="last" onClick={((e) => this.dialpadButton(e, 9))}>9</li>
                        </ul>
                    </div>
                    <div id="actions" className="button-3 deactive">
                        <ul>
                            <li href="" onClick={this.callNumber} className={callReadyClass} >Call</li>
                            <li href="" className={skipReadyClass} onClick={this.hold}>{btnArr.skip}</li>
                            <li href="" onClick={this.clearClick} className={clearReadyClass}>{btnArr.clear}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialer;