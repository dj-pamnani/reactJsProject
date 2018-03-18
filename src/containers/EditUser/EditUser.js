import React from 'react';
import ReactDOM from 'react-dom';
import './EditUser.css';

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:''
        }
        this.closePopUp=false;
        console.log('closeeeee',this.closePopUp);
    }
    componentDidMount=()=>{
        console.log("this.props.edit",this.props.editedUser);
        var modal = document.getElementById('myModal');
        console.log('closepopup',this.closePopUp);
        var span = document.getElementsByClassName("close")[0];
        span? span.onclick = function() {
            modal.style.display = "none";
        } :'';
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        if(this.props.edit){
           modal? modal.style.display = "block" :'';
          
        }
        if(this.props.editedUser.isEdit){
            modal.style.display = "none";
        }
        
    }
    

    updateName=(e)=>{
        this.props.editedUser.name = e.target.value;
        console.log('e---',this.props);
        // this.props.editedUser(this.props.editedUser);
        
    }
    updatePhone=(e)=>{
        console.log('ssse---',e);
        // this.props.editedUser.phone = e.target.value;
    }
    submitUpdate=()=>{
        this.props.editedUser.isEdit=true;
        this.props.updateUser(this.props.editedUser);
        
    }
    render() {
        return (
            <div>
                <div id="myModal" className="modal">
                    {/* model content */}
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div className="bottom-padding">
                            <span>Name:</span>
                            <span className="padding-left"> <input type="text" className="name-text" onChange={this.updateName}  defaultValue={this.props.editedUser.name}/> </span>
                        </div>
                        <div className="bottom-padding">
                            <span>Phone:</span>
                            <span className="padding-left"> <input type="phone" className="name-text" onChange={this.updatePhone} name="phone" defaultValue={this.props.editedUser.phone}/>  </span>
                        </div>
                        <div className="bottom-padding">
                            <input type="submit"className="submit" onClick={this.submitUpdate}  value="Save"/>
                        </div>
                    </div>
                </div>
                {this.props.edit ? this.componentDidMount():'' }
            </div>
            
        )
    }
}
export default EditUser;