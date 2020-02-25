import React, { useState, createContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import themes from './colors';

const ThemeContext = createContext();

function Theme({ children, defaultThemeName }) {
    const [themeName, setThemeName] = useState(defaultThemeName);

    const setThemeWithSaving = (name) => {
        setThemeName(name);
        localStorage.setItem('theme', name);
    };

    useEffect(() => {
        setThemeWithSaving(defaultThemeName);
    }, []);

    return (
        <ThemeProvider theme={themes[themeName || 'lightTheme']}>
            <ThemeContext.Provider value={{
                theme: themeName,
                setTheme: setThemeWithSaving
            }}
            >
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default Theme;
export {
    ThemeContext
};

Theme.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    defaultThemeName: PropTypes.oneOf(['lightTheme', 'darkTheme'])
};

Theme.defaultProps = {
    children: null,
    defaultThemeName: 'lightTheme'
};
