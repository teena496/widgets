import React, { Component } from 'react'

export default class Accordion extends Component {
    onTitleClick = () => {
            
    }
    render(props) {
        const renderedItems = this.props.items.map( (item,index) => {
            return <React.Fragment key={item.index}>
                <div className="title"
                onClick={()=> console.log("title clicked",index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>

        }
        )
    return (
        <div className="ui styled accordion">
        {renderedItems}  
        </div>
    )
    }
}
