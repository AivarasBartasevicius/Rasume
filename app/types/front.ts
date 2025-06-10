import { Profile, Project } from "./back";

export interface BasicParams {
  children?: React.ReactNode;
  className?: string;
  styles?: string;
}

export interface ProfileParam {
  profile: Profile;
}

export interface ProjectParam {
  project: Project;
}
