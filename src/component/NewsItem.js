import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class NewsItem extends Component {

    static defaultProps={
       country:"in",
       category:"general"
    }

    static propTypes={
        country: PropTypes.string,
        category:PropTypes.string
    }

    render() {
        let {title, description, imageUrl, newsUrl, author, date}=this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={!imageUrl?"https://dataconomy.com/wp-content/uploads/2023/03/What-is-Microsoft-Security-Copilot-and-how-to-use-it-1.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} <span class="badge text-bg-success">New</span></h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown Author ": author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
