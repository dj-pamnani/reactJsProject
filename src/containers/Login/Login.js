import React from 'react';
import ReactDOM from 'react-dom';

class UserDetails extends React.Component{

    constructor(props){
      super(props);
      this.state={
        fields:[],
        errors:[]
      }
      this.handleChange = this.handleChange.bind(this);
      // this.validateSubmit = this.validateSubmit.bind(this);
      
    }
    
    validateSubmit = (e)=>{
      e.preventDefault();
      if(this.handleValidation()){
        console.log("errors:",this.state.errors);
        // return(
        //   <div className="success-comp">
        //  { true && <SuccessPage/> }
        //  </div>
        // )
        this.showSuccess();
      }
      else{
        console.log("errors:",this.state.errors);
        var err = this.state.errors;
        this.props.getError(err);
        alert('ERROR:please check');
      }
    }
    showSuccess=()=>{
      var flg = false;
      this.props.flag(flg);
      var data = this.state.fields;
      this.props.userData(data);
      console.log("this.state.fields",this.state.fields);
      // alert("OKAY");
      
    }
    handleValidation=()=>{
      let isValidDetails = true;
      let detail = this.state.fields;
      
      var error = [];
      this.setState({
        errors:error
      });
      if(!detail["username"]){
        isValidDetails = false;
        error.username = 'Name is Mandatory';
      }
      if(!detail["password"]){
        isValidDetails = false;
        error.password = 'Password is Mandatory';
      }
      if(typeof detail["username"] !=='undefined'){
        if(!detail["username"].match(/^[a-zA-Z]+$/)){
          isValidDetails = false;
          error.username = 'Only Letters allowed';
        }
      }
      if(!isValidDetails){
        
        this.setState({
          errors:error
        });
        console.log('state--',this.state);
      }
      
      return isValidDetails;
    }
    handleChange=(field,e)=>{
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
      console.log('fields',fields);
    }
    render(){
      
      return(
        <div className="details-box">
          <div className="user-tag">
            <p>User Name</p>
            <input className="name-text" onChange={this.handleChange.bind(this,"username")} value={this.state.fields["username"]} type="text" placeholder="Please Enter"></input>
          </div>
          <div className="user-tag">
            <p>Password</p>
            <input className="name-text" onChange={this.handleChange.bind(this,"password")} value={this.state.fields["password"]} type="password"></input>
          </div>
          <div className="user-tag">
            <input type="submit" onClick={this.validateSubmit.bind(this)} className="submit" value="Login"></input>
          </div>
          
        </div>
      );
    }
    
  }

  export default UserDetails;
