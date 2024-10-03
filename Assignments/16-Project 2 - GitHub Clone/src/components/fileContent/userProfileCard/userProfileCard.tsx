import UserCart from "../../profile/userCart/userCart";

const UserProfileCard: React.FC<any> = ({ user }) => (
    <div className='flex flex-col align-self-start'>
        <UserCart
            avatar={user.avatar_url}
            name={user.name}
            login={user.login}
            bio={user.bio}
            followers={user.followers}
            following={user.following}
            location={user.location}
            blog={user.blog}
        />
    </div>
);

export default UserProfileCard