import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

constructor(){
    super();
    this.state={
        articles:[],
        loading: false
    }
}
async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d4bee73e416e401bace2ab4f3e4f5cd5";
    let data=await fetch(url);
    let parseData=await data.json()

    this.setState(
        {
            articles : parseData.articles
        }
    )
}

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2"  key={element.url} >
                <NewsItem title={element.title?element.title:"No Title"} description={element.description?element.description:"No Description"} imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>

        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark">&larr;Prevoius</button>
        <button type="button" class="btn btn-dark">Next&rarr;</button>
        </div>
      </div>
    )
  }
}
