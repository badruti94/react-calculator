import './screen.css'

const Screen = ({numberToCount, equal}) => {
    const getCount = () => {
        const last_char = numberToCount.charAt(numberToCount.length - 1)

        if(last_char === '/' || last_char === 'x' || last_char === '-' || last_char === '+'){
            return eval(numberToCount.replace('x','*').slice(0,-1))
        }

        return eval(numberToCount.replaceAll('x','*'))
    }

    const checkEqual = () => {
        return equal ? 'size-big' : ''
    }

    return (
        <div className="screen" >
            <p>{numberToCount}</p>
            <p className={checkEqual()} >{getCount()}</p>
        </div>
    )
}


export default Screen