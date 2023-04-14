

const BotonClear = (props) => {

    const handleClick=(e)=>{
        alert('e.target')
    }

  return (
    <div className='clear' onClick={(()=>props.handleClick(''))}>
        {props.children}
    </div>
  )
}

export default BotonClear;