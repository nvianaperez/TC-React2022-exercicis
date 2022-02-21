import AvatarComponent from "../Components/AvatarComponent";

export default function UserInfo({ user }) {
  return (
    <div className="UserInfo">
      <AvatarComponent author={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}
