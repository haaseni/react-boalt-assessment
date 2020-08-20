import * as React from 'react'

const SpinningYear = () => {
    return (
        <div className="year">
            <div className="yearDigit">
                <span className="spin" id='digit1'>1 2 3 4 5 6 7 8 9 0</span>
            </div>
            <div className="yearDigit">
                <span className="spin" id='digit2'>1 2 3 4 5 6 7 8 9 0</span>
            </div>
            <div className="yearDigit">
                <span className="spin" id='digit3'>1 2 3 4 5 6 7 8 9 0</span>
            </div>
            <div className="yearDigit">
                <span className="spin" id='digit4'>1 2 3 4 5 6 7 8 9 0</span>
            </div>
        </div>
    )
}

export default SpinningYear