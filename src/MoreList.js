import React from 'react';
import JPHACKS from './JPHACKS.JPG';

class MoreList extends React.Component{

    constructor(props){
        super(props);
        this.state={isModalOpen:false}
      };

      handleClickModal(){
        this.setState({isModalOpen:true});
      }

      handleClickClose(){
        this.setState({isModalOpen:false});
      }

    render(){
        let modal;
        if(this.state.isModalOpen){
            modal=(
<div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h1>{this.props.name}</h1>
              
              <p>{this.props.about}</p>
              
            </div>
            <button className='modal-close-btn'
            onClick={()=>{this.handleClickClose()}}
            >
              とじる
            </button>
          </div>
        </div>
            );
        }
        
        return(
            <div>
                <div className='modal_button'
                onClick={()=>{this.handleClickModal()}}
                >
                    <h2>{this.props.date}<br />{this.props.name}</h2>
                    <img src={this.props.image} alt={this.props.name}/>
                </div>
                {modal}
            </div>
        )
    }
}

export default MoreList;