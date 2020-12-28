import React, { Suspense, StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Spinner, ChakraProvider } from '@chakra-ui/react';

const App = lazy(() => import('./App'));

ReactDOM.render(
    <ChakraProvider>
        <Suspense fallback={<Spinner />}>
            <StrictMode>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <App />
                </BrowserRouter>
            </StrictMode>
        </Suspense>
    </ChakraProvider>,
    document.getElementById('root'),
);
