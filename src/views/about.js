import React,{Component} from "react";

export default class about extends Component{
  constructor(props){
    super(props);
    this.state={
      value:"ABOUT"
    }
  }
  render(){
    return (
      <div>
        {this.state.value}
      </div>
    );
  }
}
