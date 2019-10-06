import { useRouter } from 'next/router';
import Room from  '../components/Room';
import Layout from '../layouts/MyLayout';
import Head from 'next/Head';
import axios from 'axios'
class Main extends React.Component {
	
	constructor(){
		super();
		this.state={
			rooms : [{roomNum:1,checked:true,adult:1,childern:0},
					{roomNum:2,checked:false,adult:1,childern:0},
					{roomNum:3,checked:false,adult:1,childern:0},
					{roomNum:4,checked:false,adult:1,childern:0}],
			// rooms : [],
			loader:false
		}
	}

	componentDidMount= async() =>{
		const res = await axios.get('http://localhost:4000/data');
		
		if(res.data.length != 0){
			this.setState(
			      state => { return {
			        rooms:res.data
			      }},
			      state => {
			        console.log("done", this.state);
			      }
			   );
	    			 
		}
	}
	
	handleChecked=(roomNumber,checked)=>{
		if(roomNumber == 1){
			return true;
		}else{
			return checked;
		}
	}

	handleChange=(roomNumber,checked)=>{
		
		var roomsNew=[];
		if(!checked){ // Checked
			for(var num = roomNumber; num >=2 ;num--){
			
				if(num!=1){
				roomsNew = this.state.rooms.splice(num-1, 1, {roomNum:num,checked:!checked,adult:1,childern:0});
				}	
				
			}
		}else{ //Unchecked
			
			for(var num = roomNumber; num <=this.state.rooms.length ;num++){
				
				if(num!=1){
					roomsNew = this.state.rooms.splice(num-1, 1, {roomNum:num,checked:!checked,adult:1,childern:0});
				}	
				
			}
		}
		this.setState(
			state => { 
				return {
				rooms:roomsNew
			},()=>console.log(this.state.rooms);
			}
	    );		
	}

	updateAdults=(values)=>{
		const {selectedValue,roomNumber,checked,childern} = values;
		var roomsAdultUpdated = this.state.rooms.splice(roomNumber-1, 1, {roomNum:roomNumber,checked:checked,adult:parseInt(selectedValue),childern:childern});
		this.setState(
			state => { 
				return {
				rooms:roomsAdultUpdated
			},()=>console.log(this.state.rooms);
			}
	    );
	}
	updateChildern=(values)=>{
		const {selectedValue,roomNumber,checked,adult} = values;
		var roomsAdultUpdated = this.state.rooms.splice(roomNumber-1, 1, {roomNum:roomNumber,checked:checked,adult:adult,childern:parseInt(selectedValue)});
		this.setState(
			state => { 
				return {
				rooms:roomsAdultUpdated
			},()=>console.log(this.state.rooms);
			}
	    );
	}

	handleSubmit= async ()=>{
		await axios.post('http://localhost:4000/submit', 
			{	data:{rooms:this.state.rooms},
				headers: {
	          	'Accept': 'application/json',
	          	'Content-Type': 'application/json'
	        	}
	    	}, 
			)
		  .then(function (response) {
		   if(response.status == 200){
		   	alert("Data Saved");
		   }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	render(){
		const {rooms} = this.state;
	

		if(this.state.loader){
			return (<p>Loadin</p>);
		}else{
		return (
			<div>
			<Head>
		  	<title>Assesment</title>
		  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
			</Head>
				<Layout>
				  <h1>Rooms</h1>
				  <div className="col-md-12">
				   {rooms.map((i)=>{
				    	return (<div className="col-md-3" key={i.roomNum}>
				      		<Room
					      		roomNumber={i.roomNum} 
					      		adultCount={i.adult}
					      		childernCount={i.childern}
					      	 	checked={this.handleChecked(i.roomNum,i.checked)}
					      		handleChange={(roomNumber,checked)=>this.handleChange(roomNumber,checked)}
					      		changeAdult={this.changeAdult}
					      		updateAdults={(...values)=>this.updateAdults(...values)}
					      		updateChildern={(...values)=>this.updateChildern(...values)}
				      		/>
				    	</div>
				    	);
				    })}
				    <div className="mt-2">
				    	<input type="button" onClick={this.handleSubmit} value="Submit" className="btn btn-success btn-lg"/>
				    </div>
				  </div>
				</Layout>
			</div>
		);
	}
	}
};


export default Main