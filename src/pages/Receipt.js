import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../pages/styles/Receipt.css';
import { removeItem,addQuantity,subtractQuantity} from '../components/actions/cartActions.js'
import Recipe from '../components/Recipe.js'
// import cartReducer from '../components/reducers/cartReducer.js'
class Receipt extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
 
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    {/* <div className="item-img"> 
                                        <img className="cartimages" src={item.img} alt={item.img}/>
                                    </div>                          */}
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <span>
                                            <b>Quantity: {item.quantity}</b> 
                                        </span>
                                        
                                    
                                <br/>
                                        {/* <Recipe /> */}

                                    </div>                                
                                </li>                
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
           
        <div className="container">
        <div className="cart">
            <h2>Receipt</h2>
            <h4>Thank you for placing your order!</h4>
            <h5>You have ordered:</h5>
            <ul className="collection">
                {addedItems}
            </ul>    
        </div> 
         
    </div>



         )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Receipt)