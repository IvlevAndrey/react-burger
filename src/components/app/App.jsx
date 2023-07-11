import css from './App.module.css';
import { BurgerConstructorPage } from './../pages/burger-constructor-page/burger-constructor-page';
import { useEffect, useState } from 'react';
import { clientApi } from '../../utils/api-client';
import { AppHeader } from './../ui/app-header/app-header';

function App() {
  const [state, setState] = useState({
    ingredients: null,
    loading: true,
    isFetchSuccess: null
  })

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setState({ ...state, loading: true });
        const response = await clientApi.getIngredients()
        if (response) {
          setState({ ingredients: response.data, loading: false, isFetchSuccess: true });
        }
        else {
          setState({ ...state, loading: false, isFetchSuccess: false });
        }
      }
      catch (error) {
        console.log(`Ошибка при получении ингредиентов: ${error}`);
        setState({ ...state, loading: false, isFetchSuccess: false });
      }
    }

    getIngredients();
  }, [])

  return (
    <>
      <AppHeader />
      <main className={css.content}>
        {state.loading ?
          (<span className='text text_type_main-large'>Загрузка данных</span>)
          : (
            state.isFetchSuccess && state.ingredients ? (
              <BurgerConstructorPage ingredients={state.ingredients} />
            )
              : <span className='text text_type_main-large'>Не удалось загрузить данные. Попробуйте позже</span>
          )
        }
      </main>
    </>);
}

export default App;
