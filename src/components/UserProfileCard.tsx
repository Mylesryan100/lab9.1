import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      {showEmail && <div>{user.email}</div>}
      {showRole && <div>{user.role}</div>}

      <button onClick={() => onEdit && onEdit(user.id)}>Edit</button>

      {children}
    </div>
  );
}

export default UserProfileCard;
