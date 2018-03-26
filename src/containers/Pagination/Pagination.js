import React from 'react';
import ReactDOM from 'react-dom';
import '../AddData/AddData.css';
class Pagination extends React.Component{
    constructor(props){
        super(props);
        var pagUsers=[
            {name:'Dipesh', empId:'717405'},
            {name:'Rakesh', empId:'717404'},
            {name:'Bhawesh', empId:'717403'},
            {name:'Ank', empId:'717402'},
            {name:'Prasad', empId:'717401'},
            {name:'Darshan', empId:'717410'},
            {name:'Vijay', empId:'717411'},
            {name:'Arpit', empId:'717412'},
            {name:'Gautam', empId:'717413'},
            {name:'Anuj', empId:'717414'},
            {name:'Ankur', empId:'717415'},
            {name:'Akshat', empId:'717416'},
            {name:'Anup', empId:'717417'},
            {name:'Ankush', empId:'717418'}
        ];
        

        this.state={
            users: pagUsers,
            currentPage:1,
            userPerPage:4,
            currentUsers:''
        };
        this.handlePageNumber = this.handlePageNumber.bind(this);
        this.handlePageNumber();
        
    }
    componentDidMount=()=>{
        console.log('componentttttttttttt');
        
    }
    handlePageNumber=(event)=>{
        
        const lastIndex = this.state.currentPage * this.state.userPerPage;
        const firstIndex = lastIndex - this.state.userPerPage;
        const current = this.state.users.slice(firstIndex,lastIndex);
        this.setState({
            currentUsers:current,
            currentPage:event? Number(event.target.id) :''
        });
        console.log('handle page numbers',this.state);
    }
    render(){
        const pageNumbers = [];
        for(let i=1;i<Math.ceil(this.state.users.length/this.state.userPerPage);i++){
            pageNumbers.push(i);
        }
        return(
        <div>
            <div className='cTable'>
                <div className='cTableRow'>
                    <div className='cTableHead'>
                        Name
                    </div>
                    <div className='cTableHead'>
                        Emp Id
                    </div>
                </div>
                    {this.state.currentUsers.map((user,index)=>{
                        return(
                            <div className='cTableRow' key={index}>
                                <div className='cTableCell'>{user.name}</div>
                                <div className='cTableCell'>{user.empId}</div>
                            </div>
                        )
                    })}               
            </div>
            <div>
                <ul id="page-numbers">
                    {pageNumbers.map(number =>{
                        return(
                            <li key={number} id={number} onClick={this.handlePageNumber}>
                                {number}
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </div>
        )
    }
}
export default Pagination;

