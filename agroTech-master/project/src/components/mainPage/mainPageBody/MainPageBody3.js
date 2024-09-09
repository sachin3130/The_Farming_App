import classes from './MainPageBody3.module.css';
import img from '../../../assets/mainPage/mainPageBodyImage1.jpg';
import {Link} from "react-router-dom";
const MainPageBody3=()=>{
    return(
        <div style={{backgroundImage: `url(${img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className={classes.Main}>
            <div >Feeding the globe and looking </div>
            <div >after the environment.</div>
            </div>
            <div className={classes.content}>
               Now grow, and sell smart don't let anyone take what is yours
            </div>
<<<<<<< HEAD
            <Link to="/aboutUs"><button className={classes.btn}>DISCOVER MORE</button></Link>
=======
            <button className={classes.btn}><Link to="/aboutUs">Discover Now</Link></button>
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
        </div>
    );
}
export default MainPageBody3;
