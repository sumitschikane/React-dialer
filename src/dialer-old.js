import React, {Component} from 'react';
import './css/style.css';

class Dialer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numberArray : [],
            phoneNumber : '',
            numberDisplayEl : '',
        };

        this.dialpadButton = this.dialpadButton.bind(this);

        this.dialpadCase= React.createRef();
        this.numberDisplayEl = React.createRef();;
    }

    dialpadButton(event, data){
        console.log('dial button clicked');
        if ( !this.dialpadCase.current.classList.contains('deactive')) {
            //console.log(event.target.text);
            //console.log(event.target.options[event.target.selectedIndex].text);
            const content = data;
            this.refreshInputArray();
            //console.log(this.state);
            this.setState(prevState => ({
                numberArray: [...prevState.numberArray, content]
            }))
            
            this.compilePhoneNumber();
            this.updateDisplay();
            this.checkDisplayEl();
            this.saveNumberDisplayEl();
            
        }
    }

    refreshInputArray(){
        //console.log(this.numberDisplayEl.current.value);
        const numberDisplayElContent = this.numberDisplayEl.current.value; 
        //window.numberArray = numberDisplayElContent.split('');
        console.log(this.state);
        this.setState({ 
            numberArray:  numberDisplayElContent.split('')
        });
        console.log(this.state);
    }

    compilePhoneNumber(){
        if (this.state.numberArray.length > 1){ 
            phoneNumber = this.state.numberArray.join('');
        } else {
            phoneNumber = this.state.numberArray
        }

        this.setState({ 
            phoneNumber:  numberDisplayElContent.split('')
        });
        
        return this.state.phoneNumber;
    }

    updateDisplay(){
        this.state.numberDisplayEl.val(this.state.phoneNumber);
    }

    checkDisplayEl(){
        
    }

    saveNumberDisplayEl(){
        
    }

    render() {
        return (
            <div id="wrapper">
                <div id="phone">
                    <div id="numberDisplay">
                        <input type='tel' ref={this.numberDisplayEl} />
                    </div>
                    <div id="dialpad" className="button-3" ref={this.dialpadCase}>
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
                    <div id="actions" className="button-3 deactive" ref={this.actionButtons}>
                        <ul>
                            <li href="" className="call" ref={this.callButton}>Call</li>
                            <li href="" className="skip" ref={this.skipButton}>Skip</li>
                            <li href="" onClick={this.clearClick} className="clear" ref={this.clearButton}>Clear</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialer;