export interface IProjectCard {
  id: string;
  title: string;
  rating: number;
  linkToLive: string;
  description: string;
  requirements: string;
  stack?: ITechnology[];
  technologies: any[];
  collaborators: ICollaborator[];
  owner: IOwner;
}

export interface ITechnology {
  title: string;
  category: string;
}

export interface ICollaborator {
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