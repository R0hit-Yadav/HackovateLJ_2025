import React from "react";

const ProfileCard = ({ user, onEdit }) => {
  return (
    <div className="profile-card">
      <img src={user.profilePic} alt="Profile" className="profile-img" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button className="edit-btn" onClick={onEdit}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
