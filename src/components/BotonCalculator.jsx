


const BotonCalculator = (props) => {

    const isOperator=(value)=>{
            return isNaN(value) && (value !='.')&& (value!= '=');
        }
  return (
    <div className={`boton-container ${isOperator(props.children)?'operator':''}`.trimEnd()} onClick={()=>props.handleClick(props.children)} >
        {props.children}
    </div>
  )
}

export default BotonCalculator