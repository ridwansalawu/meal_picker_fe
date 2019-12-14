import React from 'react'
import Axios from 'axios'

export default class ResDetails extends React.Component{
   
   state={
       res_info:[]
   }
   
    async componentDidMount(){
        const url_key = 'ce01c524c280392f934d5bb8228b2277'
        await Axios({
           method: "GET",
           url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.id}`,
           headers: {
             "user-key": url_key,
             "content-type": "application/json"
           }
         })
           .then(response => {
               const resInformation = response.data;
               this.setState({res_info: resInformation})
               console.log(this.state.res_info)
           })
           .catch(error => {   
             console.log(error);
           });
  

      }
    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}