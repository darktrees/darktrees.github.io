import {Character} from "./character";

export interface Player {
  characterType: Character;
  dead: boolean;
}
