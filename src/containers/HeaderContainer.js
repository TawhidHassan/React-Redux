import {connect} from 'react-redux';
import Header from "../components/Header";
import {addToCart,removeToCart} from '../services/Action/action'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;