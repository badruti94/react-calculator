import './key.css'

const Key = ({setNumber, clearNumber, deleteNumber, setEqual}) => {
    return (
        <div className="key" >
            <div onClick={clearNumber} >C</div>
            <div onClick={deleteNumber} >DEL</div>
            <div></div>
            <div onClick={()=>{setNumber('/')}} >/</div>
            <div onClick={()=>{setNumber('7')}} >7</div>
            <div onClick={()=>{setNumber('8')}} >8</div>
            <div onClick={()=>{setNumber('9')}} >9</div>
            <div onClick={()=>{setNumber('x')}} >x</div>
            <div onClick={()=>{setNumber('4')}} >4</div>
            <div onClick={()=>{setNumber('5')}} >5</div>
            <div onClick={()=>{setNumber('6')}} >6</div>
            <div onClick={()=>{setNumber('-')}} >-</div>
            <div onClick={()=>{setNumber('1')}} >1</div>
            <div onClick={()=>{setNumber('2')}} >2</div>
            <div onClick={()=>{setNumber('3')}} >3</div>
            <div onClick={()=>{setNumber('+')}} >+</div>
            <div></div>
            <div onClick={()=>{setNumber('0')}} >0</div>
            <div onClick={()=>{setNumber('.')}} >,</div>
            <div onClick={()=>{setEqual(true)}} >=</div>
        </div>
    )
}


export default Key