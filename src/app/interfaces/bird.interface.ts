export enum Color {
  red,
  black,
  blue,
  green,
  white,
}

export enum Habitat {
  Forest,
  Wetlands,
  Mountains,
  Urban,
}

export interface Bird {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
  habitat: Habitat;
}

export const ColorMap = {
  [Color.red]: '#E57373',
  [Color.black]: '#424242',
  [Color.blue]: '#64B5F6',
  [Color.green]: '#81C784',
  [Color.white]: '#FFFAFA',
};
