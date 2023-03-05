export interface IUser {
  id: string;
  createdAt: string;
  gitHubAuthenticated: boolean;
  email: string;
  userName: string;
  avatarImageLink: null | string;
  cvLink: null | string;
  firstName: string;
  lastName: string;
  experience: string;
  projects: string[];
  requests: { userId: string; projectId: string; status: 0 | 1 | 2 }[];
}