import React from 'react';
import ReactDOM from 'react-dom';


class Square extends React.Component {
  constructor(props){
    super(props);
    console.log('this.props.data',this.props.data);
    this.state={
      country:'India',
      cState:'',
      city:''
    }
    this.cityData = [
      {name:'India',state:[{stateName:'Maharashtra',cityNames:['a','b','c','d']},{stateName:'MP',cityNames:['ab','bb','cb','db']},{stateName:'UP',cityNames:['aq','bq','cq','dq']},{stateName:'Punjab',cityNames:['aw','bw','cw','dw']},{stateName:'Kerala',cityNames:['ae','be','ce','de']}]},
      {name:'US',state:[{stateName:'Florida',cityNames:['aa','ba','ca','da']},{stateName:'Maryland',cityNames:['as','bs','cs','ds']},{stateName:'New York',cityNames:['ad','bd','cd','dd']},{stateName:'Texas',cityNames:['af','bf','cf','df']},{stateName:'Washington',cityNames:['ag','bg','cg','dg']}]},
      {name:'England',state:[{stateName:'London',cityNames:['az','bz','cz','dz']},{stateName:'Somerset',cityNames:['ax','bx','cx','dx']},{stateName:'Lancashire',cityNames:['ac','bc','cc','dc']},{stateName:'Middlesex',cityNames:['av','bv','cv','dv']},{stateName:'Derbyshire',cityNames:['ab','bb','cb','db']}]}, 
  ];
  var res = this.cityData.find((dt)=>{return dt.name=='India'});
  console.log('res',res);
  
  }
  handleCountryChange=(e)=>{
    this.setState({
      country:e.currentTarget.value,
      cState:'',
      city:''
    });
  }
  handleStateChange=(e)=>{
    console.log('aaaaaaa',e.currentTarget.value);
    this.setState({
      cState:e.currentTarget.value,
      city:''
    });
  }
  handleCityChange=(e)=>{
    this.setState({
      city:e.currentTarget.value
    });
  }
  render() {
    return (
  <div>
    <p>
      Hello {this.props.data.username}
    </p>
    <div>
      <input type="radio" name='country' value='India' id='India' onChange={this.handleCountryChange} defaultChecked/>India
      <input type="radio" name='country' value='US' id='US' onChange={this.handleCountryChange} />United States
      <input type="radio" name='country' value='England' id='England' onChange={this.handleCountryChange}/>England
    </div>
    <div>
      <select name="state" value={this.state.cState} onChange={this.handleStateChange}>
        {this.cityData.find((e,key)=>{
          return e.name == this.state.country
        }).state.map((val,key)=>{
          return <option key={key} value={val.stateName}>{val.stateName}</option>
        })}
      </select>
    </div>
    <div>
     { this.state.cState!='' && <select name="city" value={this.state.city} onChange={this.handleCityChange}>
        {this.cityData.find((e,key)=>{
          return e.name == this.state.country
          }).state.find((val,key)=>{
            console.log('hjhjhh',this.state.cState);
          return val.stateName ==this.state.cState;
        }).cityNames.map((cty,key)=>{
          return <option key={key} value={cty}>{cty}</option>
        })}
     </select> }
    </div>
  </div>
    );
  }
}

export default Square;
