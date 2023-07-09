class ClientApi {
  baseUrl = 'https://norma.nomoreparties.space/api/';

  async getIngredients() {
    let response = undefined;

    try {
      response = await fetch(`${this.baseUrl}ingredients`);
      if (response.ok) {
        const result = await response.json();
        return {isSuccess: true, result: result.data};
      } else {
        return {isSuccess: false};
      }
    } catch {
      const result = await response.text();
      console.log(`Ошибка при обращении к api: ${result}`);
      return {isSuccess: false};
    }
  }
}

export const clientApi = new ClientApi();
