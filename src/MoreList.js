import React from 'react';

class MoreList extends React.Component{
    render(){
        const moreItem= {
            name : 'ハックツハッカソン',
            image : 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
            }
        return(
            <div className='more-card'>
                <div className='more-item'>
                    <p>{this.props.name}</p>
                    <img src={this.props.image} />
                </div>
            </div>
        )
    }
}

export default MoreList;