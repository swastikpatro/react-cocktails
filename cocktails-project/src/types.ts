interface stateType {
  cocktails: never[] | cocktailType[];
  loading: boolean;
  error: boolean;
}

interface cocktailType {
  id: string;
  glass: string;
  image: string;
  alcohol: string;
  name: string;
}

interface singleProductStateType {
  cocktail: null | singleProductType;
  loading: boolean;
  error: boolean;
}

interface singleProductType {
  name: string;
  image: string;
  alcohol: string;
  category: string;
  instructions: string;
  glass: string;
  ingredients: string[];
}

export type { stateType, cocktailType, singleProductStateType };
