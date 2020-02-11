import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './Theme';

function ThemeSwitcher({ children }) {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        if (theme === 'darkTheme') setTheme('lightTheme');
        else setTheme('darkTheme');
    }

    const switcher = React.createElement(children.type, {
        onClick: toggleTheme,
        ...children.props
    });

    return (switcher);
}

ThemeSwitcher.propTypes = {
    children: PropTypes.element
};

ThemeSwitcher.defaultProps = {
    children: <button>Toggle Theme</button>
};

export default ThemeSwitcher;
