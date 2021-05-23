import React,{useState} from 'react'

export const AccordionFC = ({items}) => {
    const [activeIndex, setactiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setactiveIndex(index);
    };

    const renderedItems = items.map( (item,index) => {
        const active = index === activeIndex ? 'active' : '';
        return <React.Fragment key={item.id}>
            <div className={"title " + active}
            onClick={()=> onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={"content " + active}>
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
