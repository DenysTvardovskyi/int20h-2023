import { EXPERIENCE } from "../hooks/useApi";

export interface IUser {
  id: string;
  userName: string;
  avatarImageLink: string;
  lastName: string;
  firstName: string;
  stack: string[];
  email: string;
  cvLink: string;
  createdAt: string;
  experience: EXPERIENCE;
}