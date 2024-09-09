<<<<<<< HEAD
import Additemform from "./Additemform";
import Additemimage from "./Additemimage";
import classes from './Additem.module.css';
function Additem(props){
    return(
        <div className={classes.row}>
            <div className={classes.column1}>
                <Additemimage></Additemimage>
            </div>
            <div className={classes.column2}>
                <Additemform></Additemform>
            </div>
        </div>
    );
}

=======
import Additemform from "./Additemform";
import Additemimage from "./Additemimage";
import classes from './Additem.module.css';
function Additem(props){
    return(
        <div className={classes.row}>
            <div className={classes.column1}>
                <Additemimage></Additemimage>
            </div>
            <div className={classes.column2}>
                <Additemform></Additemform>
            </div>
        </div>
    );
}

>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
export default Additem;