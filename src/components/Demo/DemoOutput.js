import React from 'react'

const DemoOutput = (props) => {
    console.log('Demo Running')
    return (
        <div>
            { props.show && <p>This is new!</p>}
        </div>
    )
}

export default React.memo(DemoOutput)