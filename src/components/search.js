import React from 'react';


// const Person =(props)=> <h4>{props.person.name}</h4>

 class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          data: [],
          
        }
      }

            componentDidMount(){
                console.log(this.state.name)
                fetch('https://swapi.co/api/people/?format=json')
                .then (response => response.json())
                .then ( ({results: data}) =>this.setState({data}) )
            }
            filter (e) {
                this.setState({
                    filter:e.target.value
                })
                }

        render (){
            let data= this.state.data;
            console.log(this.state)
            if(this.state.filter){
                data = data.filter( d=>
                    d.name.toLowerCase()
                        .includes(this.state.filter.toLowerCase())
                )
            }
            

        return(
            
            <div className="table">
            <input className="search" name="search" placeholder="Search item ..." type='search' onChange={this.filter.bind(this)}/>
            <br/>
            <br/>
            <table >
                <thead>
                
                    <tr>
                    <th>Name</th>
                    <th>Skin Color</th>
                    <th>Height</th>
                </tr>
                </thead >
                <tbody>{data.map(d =>
                    <tr key={d.age}>            
                        <td key={d.name}>{d.name}</td>
                        <td key={d.skin_color}>{d.skin_color}</td>
                        <td key={d.height}>{d.height}</td>
                        
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        )
    }
 }

 export default Search;