import React from "react";

export default class Pagination extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
            <ul className='pagination justify-content-center'>
            <li className="page-item">
                <a className="page-link" 
                    onClick={this.props.goToPrevPage} 
                    href='#'>
                    
                    Previous
                </a>
            </li>
            {pageNumbers.map(pgNumber => (
                <li key={pgNumber} 
                    className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                    <a onClick={() => setCurrentPage(pgNumber)}  
                        className='page-link' 
                        href='#'>
                        
                        {pgNumber}
                    </a>
                </li>
            ))}
            <li className="page-item">
                <a className="page-link" 
                    onClick={this.props.goToNextPage}
                    href='#'>
                    
                    Next
                </a>
            </li>
        </ul>
    </nav>
        )
    }
}

