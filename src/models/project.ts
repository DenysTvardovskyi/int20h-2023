export interface IProject {
  id: string;
  title: string;
  gitHubInfo: IGitHubInfo;
  status: "private" | "request-only" | "open";
  rating: number;
  link: string;
  technologies: any[];
  ownerId: string;
  description: string;
  requirements: string;
  goals: IGoal[];
  tasks: ITask[];
  stack: ITechnology[];
  collaborators: ICollaborator[];
  owner: IOwner;
}

interface IGoal {
  title: string;
  deadline: Date;
  status: "new" | "done";
}

interface IGitHubInfo {
  repoUrl: string;
}

interface ITask {
  title: string;
  status: "new" | "in-progress" | "done";
}

interface ITechnology {
  title: string;
  category: string;
}

interface ICollaborator {
  username: string;
  profileImg: string;
  role: string;
}

export interface IOwner {
  id: string;
  username: string;
  profileImg: string;
  quote: string;
}