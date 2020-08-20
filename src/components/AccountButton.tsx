import * as React from 'react'

const AccountButton = (props) => {
    const [id] = React.useState(props.id)

    return (
        <button type="button" id={id} onClick={props.onClick}>{props.children}</button>
    )
}

export default AccountButton