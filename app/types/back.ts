export interface Profile {
  name: string;
  title: string;
  contact: {
    Phone: string;
    Email: string;
  };
  summary: string;
  profilePic: string;
}

export interface Project {
  name: string;
  image: string;
  summary: string;
  goals?: { [key: string]: string };
  githubLink: string;
}

export enum ObjectFit {
  "COVER",
  "CONTAIN",
  "FILL",
}
