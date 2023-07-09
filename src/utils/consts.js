export const IngredientTypes = {Bun: 'bun', Sauce: 'sauce', Main: 'main'};

export const IngredientTypesRu = (ingredientType) => {
  switch (ingredientType) {
    case IngredientTypes.Bun:
      return 'Булочки';
    case IngredientTypes.Sauce:
      return 'Соус';
    case IngredientTypes.Main:
      return 'Начинка';
    default:
      return '';
  }
};
