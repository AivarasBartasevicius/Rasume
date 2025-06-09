import { Profile } from "./back";

export interface BasicParams {
  children?: React.ReactNode;
  className?: string;
  styles?: string;
}

export interface ProfileParam {
  profile: Profile;
}
