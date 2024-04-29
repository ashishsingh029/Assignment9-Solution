const UserCard = props => {
    return (
        <div className = 'col mt-2'>    
            <div className = 'card user-card d-inline-block ms-1 me-1 mb-1'>
                <div className = 'mx-auto'>
                    <img src={props.image} className = 'img-fluid' style={{height: '200px', width: '200px'}} alt = 'User Avatar' />
                </div>
                <div className="card-body">
                    <h5 className='card-title text-center mt-0'>{`${props.name}`} </h5>
                    <p className='card-text text-start m-0'>{`Mobile: ${props.phone}`}</p>
                    <p className='card-text text-start m-0'>{`Email: ${props.email}`}</p>
                    <p className='card-text text-start m-0 p-0'>{`Address: ${props.address.address}, ${props.address.city}, ${props.address.state}`}</p>
                </div>
            </div>
        </div>
    )
}
export default UserCard