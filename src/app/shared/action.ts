export interface Action {
  script: string;
  init: Function;
  button: ActionButton[];
}

export class ActionButton {
  text: string;
  callback: Function;
}
