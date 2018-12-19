import React, { Component } from "react";
import {Button, Form, FormGroup, Input, Tooltip} from "reactstrap";
import exchangeLogo from "./exchange.jpg";
import './styles.css';
import {exchangeCurrency} from "../services/exchange";


const FROM_CURRENCY = 1;
const TO_CURRENCY = 2;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value:'',
      exchangedValue: ''
    };
  }

  handleChange = name => event => {

    const valueField = event.target.value;

    this.setState({
      [name]: valueField,
    });
  };

  handleCalculate = () => {
    exchangeCurrency(FROM_CURRENCY,TO_CURRENCY, this.state.value)
        .then((data) => {
            if(!data.error){
              this.setState({
                exchangedValue: data.result.value,
              });
            }
        })
  };


  render() {
    return (
        <div className="w-100">
          <div className="row text-center pb-2">
            <div className="col-12" >
              <img src={exchangeLogo} className="exchange-logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              Left option
            </div>
            <div className="col-4 text-center">
              Center option
            </div>
            <div className="col-4 text-center">
              Right option
            </div>
          </div>
          <hr/>
          <div>
            <div className="row pb-4">
              <div className="col-6">
                <Input type="text" name="value" id="value" placeholder="USD" bsSize="lg" onChange={this.handleChange('value')} value={this.state.value} />
              </div>
              <div className="col-6">
                <Input type="text" disabled name="value" id="value" placeholder="EUR" bsSize="lg" value={this.state.exchangedValue} />
              </div>
            </div>
            <div className="row">

              <div className="col-4 offset-4 text-center">
                <Button color="gray" size="lg" block onClick={this.handleCalculate}>CALCULATE</Button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
