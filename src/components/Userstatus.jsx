import React from 'react'

const Userstatus = ({loggedIn, isAdmin}) => {
    return(
        <div>
    {loggedIn&& isAdmin && <h2>Welcome Admin!!</h2>}
    { loggedIn && !isAdmin && <h2>Welcome User!!</h2>}
        </div>

    )
}

export default Userstatus