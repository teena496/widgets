import React from 'react'

const Link = ({href, className,children}) => {
    const onLinkClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({},'',href);
 
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <div>
            <a onClick={onLinkClick} href={href} className={className}>
                {children}
            </a>
        </div>
    )
}

export default Link;