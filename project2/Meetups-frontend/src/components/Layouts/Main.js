import classes from "./Main.module.css"
import HandleMeet from "./HandleMeets"
function Main(props){
    return(
        <div >
        <HandleMeet/>
        <div className={classes.main}>{props.children}</div>
        </div>
    );
}
export default Main;