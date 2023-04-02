import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class NewsItem extends Component {

    static defaultProps={
       country:"in"
    }

    static propTypes={
        country: PropTypes.string
    }

    render() {
        let {title, description, imageUrl, newsUrl}=this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={!imageUrl?"https://dataconomy.com/wp-content/uploads/2023/03/What-is-Microsoft-Security-Copilot-and-how-to-use-it-1.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
