import Add from '../../assets/add.svg'

function UserFriends(){
    return(
        <div>
            <h1>User Friends</h1>
            <button className={'add-friend-button'}>
                <img src={Add} alt={'Add friend'}/>
            </button>
        </div>
    );
}

export default UserFriends