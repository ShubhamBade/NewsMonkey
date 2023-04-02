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
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4bee73e416e401bace2ab4f3e4f5cd5&page=1&pageSize=20`;
    let data=await fetch(url);
    let parseData=await data.json()

    this.setState(
        {
            articles : parseData.articles,
            page:1,
            totalResults:parseData.totalResults
        }
    )
}
handlePrevoius=async()=>{
  console.log("clicked on previous");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4bee73e416e401bace2ab4f3e4f5cd5&page=${this.state.page-1}&pageSize=20`;
    let data=await fetch(url);
    let parseData=await data.json()


  this.setState({
    page:this.state.page-1,
    articles : parseData.articles
  })
}
handleNext=async()=>{
  console.log("clicked on next");
  if(this.state.page> Math.ceil(this.state.totalResults/20)){
    console.log("No content to show");
  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4bee73e416e401bace2ab4f3e4f5cd5&page=${this.state.page+1}&pageSize=20`;
    let data=await fetch(url);
    let parseData=await data.json()


  this.setState({
    page:this.state.page+1,
    articles : parseData.articles
  })
}
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
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevoius}>&larr;Prevoius</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}
