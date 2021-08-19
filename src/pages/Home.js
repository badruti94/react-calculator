import { useState } from 'react'
import Key from '../components/Key'
import Screen from '../components/Screen'
const Home = () => {
    const [numberToCount, setNumberToCount] = useState('0')
    const [equal, setEqual] = useState(false)

    const setNumber = char => {
        if (numberToCount === '0') {
            setNumberToCount(char)
        } else {
            setNumberToCount(numberToCount + char)
        }
        setEqual(false)
    }

    const clearNumber = () => {
        setNumberToCount('0')
        setEqual(false)
    }

    const deleteNumber = () => {
        setNumberToCount(numberToCount.slice(0, -1))
        setEqual(false)
    }

    return (
        <>
            <Screen numberToCount={numberToCount} equal={equal} />
            <Key
                setNumber={setNumber}
                clearNumber={clearNumber}
                deleteNumber={deleteNumber}
                setEqual={setEqual}
            />
        </>
    )
}

export default Home