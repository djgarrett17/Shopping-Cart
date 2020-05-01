import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../pages/styles/Cart.css';
import { removeItem,addQuantity,subtractQuantity} from '../components/actions/cartActions.js'
import Recipe from '../components/Recipe.js'
// import cartReducer from '../components/reducers/cartReducer.js'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img className="cartimages" src={item.img} alt={item.img}/>
                                    </div>                         
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <span>
                                            <b>Quantity: {item.quantity}</b> 
                                        </span>
                                        <span className="add-remove">
                                            <Link to="/cart"><img className="material-icons" src="../../assets/images/icons/uparrow.svg" height="30px" width="30px" onClick={()=>{this.handleAddQuantity(item.id)}}/></Link>
                                            <Link to="/cart"><img className="material-icons" src="../../assets/images/icons/downarrow.svg" height="30px" width="30px" onClick={()=>{this.handleSubtractQuantity(item.id)}}/></Link>
                                        </span>
                                        
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                <br/>
                                        <Recipe />

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
                    <h2>Cart</h2>
                    <h5>In your shopping cart:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>   
                <div className="checkout">
                    <Link to="/checkout"><button className="waves-effect waves-light btn">Checkout</button></Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(Cart)