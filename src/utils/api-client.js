class ClientApi {
  baseUrl = 'https://norma.nomoreparties.space/api/';

  async getIngredients() {
    let response = undefined;

    response = await fetch(`${this.baseUrl}ingredients`);
    if (response.ok) {
      return await response.json();
    } else {
      const result = await response.text();
      console.log(`Ошибка при обращении к api: ${result}`);
      return Promise.reject(`Ошибка ${response.status}`);
    }
  }
}

export const clientApi = new ClientApi();
