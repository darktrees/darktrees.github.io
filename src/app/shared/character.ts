import {Action} from "./action";

export interface Character {
  name: string;
  imgUrl: string;
  action: Action[];
  points: number;
}
