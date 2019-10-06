import React from 'react'

class Room extends React.Component {
	constructor(props){
		super(props);
		this.state={
			selectedAdult:props.adultCount,
			selectedChildern:props.childernCount
		}
	}

	componentDidUpdate(prevProps,prevState){
		if(prevProps.adultCount != this.props.adultCount || prevProps.childernCount != this.props.childernCount){
			this.setState(
		      state => { return {
		        selectedAdult:this.props.adultCount,
		        selectedChildern:this.props.childernCount
		      }},
		      state => {
		        console.log("done", this.state);
		      }
			);
		}
	}

	handleAdultChange=(event)=>{
		const {roomNumber,checked}  = this.props;
		let selectedValue = event.target.value;
		this.setState({selectedAdult:selectedValue},()=>{this.props.updateAdults({selectedValue,roomNumber,checked,childern:this.props.childernCount})})
	}

	handleChildernChange=(event)=>{
		const {roomNumber,checked}  = this.props;
		let selectedValue = event.target.value;
		this.setState({selectedChildern:selectedValue},()=>{this.props.updateChildern({selectedValue,roomNumber,checked,adult:this.props.adultCount})})
	}


	render() {
		const {checked,roomNumber} = this.props;
		const {selectedAdult,selectedChildern} = this.state;

	    return( 
	    	<div style={{backgroundColor:"#dddddd"}}>
		    	<div className="col-md-12" style={{backgroundColor:'#ddd',margin:'10px',padding:'10px'}}>
		    		<div className="text-left col-md-6">
		    			<p>Room {roomNumber}</p> 
		    		</div>
		    		<div className="text-right col-md-6">
		    		{roomNumber != 1 && 
		    			<input type="checkbox" checked={checked} value={checked} onChange={()=>this.props.handleChange(roomNumber,checked)}/>
		    		}
		    		</div>
		    	</div>

		    	<div className="col-md-12" >
		    		<div className="col-md-6 text-center">
		    			<h4>Adults (18+)</h4>
		    			<div className="form-group">
						  <select value={selectedAdult} className="form-control" id="Adults" disabled={!checked} onChange={this.handleAdultChange}>
						    <option value={1}>1</option>
						    <option value={2}>2</option>
						  </select>
						</div>
		    		</div>
		    		<div className="col-md-6 text-center">
		    			<h4>Childern <br/>(0-17)</h4>
		    			<div className="form-group">
						  <select value={selectedChildern} className="form-control" id="Childern" disabled={!checked} onChange={this.handleChildernChange}>
						  	<option value={0}>0</option>
						    <option value={1}>1</option>
						    <option value={2}>2</option>
						  </select>
						</div>
		    		</div>
		    	</div>
	    	</div>
	  	)
	}
}

export default Room