import React from 'react';
import ReactDOM from 'react-dom';
import './AddData.css';
import EditUser from '../EditUser/EditUser';

class AddUserData extends React.Component {
    constructor(props) {
        super(props);
        this.userData=[
            {number:1,name:'Dipesh',phone:'9028407583',isAvailable:true,isEdit:false},
            {number:2,name:'Prasad',phone:'9595095454',isAvailable:true,isEdit:false},
            {number:3,name:'Bhawesh',phone:'8793398793',isAvailable:true,isEdit:false}
        ];
        this.isAddUser = false;
        this.state={
            validUsers:this.userData,
            showEdit:false,
            userEdit:''
        }
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser=(dataToRemove)=>{
        console.log('tableData',dataToRemove);
        this.state.validUsers.map(data=>{
            if(dataToRemove.name===data.name){
                data.isAvailable=false;
            }
        });
        this.setState({
            showEdit:false,
            validUsers:this.state.validUsers
        });
    }
    editUser=(userToEdit)=>{
        this.setState({
            showEdit:true,
            userEdit:userToEdit
        });
    }
   
    // editedUserData=(data)=>{
    //     console.log('add data component----',data);
    //     return this.state.userEdit;
    // }
    updateData=(data)=>{
        console.log('isadduser-----------',this.isAddUser);
        if(this.isAddUser){
            this.state.validUsers.unshift(data);
            this.isAddUser = false;
        }
        else{
            this.state.validUsers.map((valid)=>{
                if(valid.number==data.number){
                    valid.name=data.name;
                    valid.phone=data.phone;
                    // valid.isAvailable=data.isAvailable;
                    valid.isEdit=data.isEdit;
                }
            });
        }
        this.setState({
            validUsers:this.state.validUsers
        });
    }
    addUser=()=>{
        this.isAddUser = true;
        var userNumber = this.state.validUsers.length + 1;
        console.log('length---',this.state.validUsers.length)
        var user = {number:userNumber,name:'',phone:'',isAvailable:true,isEdit:false};
        this.setState({
            showEdit:true,
            userEdit:user
        });
    }
    render() {
        return (
            <div>
                <input type="button" className="add-data" onClick={this.addUser} value="Add Data"/>
                <div className="cTable">
                    <div className="cTableRow">
                        <div className="cTableHead">Name</div>
                        <div className="cTableHead">Phone</div>
                        <div className="cTableHead">Delete</div>
                        <div className="cTableHead">Edit User</div>
                    </div>
                  {this.state.validUsers.map((data,key)=>{
                      return(
                    data.isAvailable ?
                    <div className="cTableRow" key={key}>
                        <div  className="cTableCell">{data.name}</div>
                        <div  className="cTableCell">{data.phone}</div>
                        <div  className="cTableCell"><a href="#" value={data} onClick={()=>{this.deleteUser(data)}}>Delete</a></div>
                        <div  className="cTableCell"><a href="#" value={data} onClick={()=>{this.editUser(data)}}>Edit</a></div>
                        
                    </div>
                       :'' );
                  })}  
                </div>
                {this.state.showEdit && <EditUser editedUser={this.state.userEdit} updateUser={this.updateData} edit={true}/>}
            </div>
        );
    }
};
export default AddUserData;
