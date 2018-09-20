import React from 'react';


const images={
  display:'inline'
}
class Photolist extends React.Component{
  constructor(props){
  super(props)
    this.state={
      pictures:[],
      name:[]
    }
  }
componentDidMount(){
  fetch('https://randomuser.me/api/?results=8')
  .then(results =>{
    return results.json();
  })
  .then (data =>{
    let pictures = data.results.map((data) =>{
      return(
        <div className="table" key={data.results}>
          <ul>
            <li>
              <img alt="true" src={data.picture.medium}/>
              <p>{data.name.first} {data.name.last}</p>
              <p>{data.gender}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </li>
          </ul>
        </div>
      )
    })
  
    this.setState({
      pictures:pictures,
    });
    console.log('state',this.state.pictures)
  })
}
  

  render(){
    return(
      <div>
        <ul style={images}>
          <li>{this.state.pictures}</li>
        </ul>
      
      </div>
    );
  }
}
export default Photolist;