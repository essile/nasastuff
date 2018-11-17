import React, { Component } from 'react';

import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

function App({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <withNamespaces>

            <div>
                <button onClick={() => changeLanguage('fi')}>fi</button>
                <button onClick={() => changeLanguage('en')}>en</button>
                <h1>{t('Hello')}</h1>
                        <p>{t('Welcome.React')}</p>
            </div>
                {
                    t => <div>
                        <h1>{t('Hello')}</h1>
                        <p>{t('Welcome.React')}</p>
                    </div>
                }
        </withNamespaces>
    );
};
// export default kielitesti;
export default withNamespaces()(App);

// import React, { Component } from 'react';

// class kielitesti extends Component {
//     render() {
//         return (
//             <div>
//                 kielitesti
//             </div>
//         );
//     }
// }

// export default kielitesti;