import React from 'react'
import Spinner from './component/Spinner'
import Axios from 'axios'
import _ from 'lodash'
// import { Link } from 'react-feather';



class Home extends React.Component {
    constructor() {
        super();
        this.places = ['Thai', 'Italian', 'Japanese', 'Brazillian', 'Mexican', 'Fastfood', 'Chinese', 'Pizza', 'Healthy'];
        this.state = {
        favCuisines: []
      }
      }
      componentDidMount(){
        const url_key = 'ce01c524c280392f934d5bb8228b2277'
        Axios({
           method: "GET",
           url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=260`,
           headers: {
             "user-key": url_key,
             "content-type": "application/json"
           }
         })
           .then(response => {
               const cuisineName = response.data.cuisines;
               this.setState({favCuisines: cuisineName})
               console.log(this.state.favCuisines)
           })
           .catch(error => {   
             console.log(error);
           });
  

      }
      
      render(props) {
        const sample = _.sampleSize(this.state.favCuisines, 15)
        console.log(sample)
        const getName = sample.map((e, id) => (
        <p key={id}>{e.cuisine.cuisine_name}</p> 
        ))
        const getnames = sample.map((e, id) => (
          <p key={id}>{e.cuisine.cuisine_name}</p> 
          ))
        return (
            <div className="App">
              <h1>What should I eat for </h1>
              <Spinner items={getName} />
              <div>
               <ul>
                {getnames}
               </ul>
            </div>
            </div>
            
          );

      }
}

export default Home;