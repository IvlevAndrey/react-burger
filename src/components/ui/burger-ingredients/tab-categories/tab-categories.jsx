
import { useRef } from 'react';
import { TabContent } from './tab-content/tab-content';
import { TabHeaders } from './tab-headers/tab-headers';
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../../utils/prop-types';

TabCategories.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

export function TabCategories({ ingredients }) {
    const bunRef = useRef();
    const mainRef = useRef();
    const sauceRef = useRef();

    return (
        <>
            <TabHeaders bunRef={bunRef} mainRef={mainRef} sauceRef={sauceRef} />
            <TabContent ingredients={ingredients} bunRef={bunRef} mainRef={mainRef} sauceRef={sauceRef} />
        </>
    );
}