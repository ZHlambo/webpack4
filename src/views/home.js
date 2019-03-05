import React,{Component} from "react";
import {connect} from 'react-redux';
import style from "./index.scss"
import fetch from "../reducers/fetch"
import NavBar from "./NavBar"

@connect(state=>({aa:state}),{})
export default class home extends Component{
  constructor(props){
    super(props);
    this.state={
      value:"HOME1"
    }
  }
  componentWillMount(){
    // fetch.get("/assets/json/carrier_category.min.json").then(e=>{
    //   console.log(e);
    // })
  }
  render(){
    return (
      <div>
        <NavBar></NavBar>
      </div>
    );
  }
}
