import ReactDom from 'react-dom';

function Modal ({ children }) {
    
    return ReactDom.createPortal(
        <>
            {children}
        </>
        ,
    document.getElementById('modal')
)
}

export {Modal};
