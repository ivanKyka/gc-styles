gc-styles
===
**react-components library based on react-hooks and styled-components**
##### install
```npm i gc-styles```
##### using
```
import {Button} from 'gc-styles'
...
return <Button />
```

See the [demo](https://hakicha.github.io/gc-styles/) | [source](https://github.com/HaKicha/gc-styles)

Examples
===

```
import React from 'react';
import { Theme, ThemeSwitcher, Button } from 'gc-styles';

const App = () => (
    <Theme defaultThemeName={localStorage.getItem('theme')}>

        // a high-order style inject object
        <GlobalStyle/>

        // component to change the theme
        <ThemeSwitcher>
            <Button>Change theme</Button>
        </ThemeSwitcher>
    </Theme>
);
```

Props
===
Required* props
#### Autocomplete
|name|type|default|
|:---|:----|:-----------|
|onChange*|function|
|options*|array of value objects||
|placeholder|string||
|useOptionsOnly|bool|false|
|Value|object|{id: '', label: ''}|


#### Button
|name|type|default|options|
|:---|:----|:-----------|:---|
|type|string|'default'|'default', 'info', 'success', 'warning', 'error'
|size|string|'sm'|'sm', 'md', 'lg'|
|isFilled|bool|true|
|disabled|bool|false|

#### Checkbox
|name|type|default|
|:---|:----|:-----------|
|defaultChecked|bool|||
|checked|bool|||
|onChange|func|||
|name|string|||
|value|string|||
|disabled|bool|false||

#### Dropdown
|name|type|default|
|:---|:----|:-----------|
|icon|string||
|title*|string||
|onOpen|func||
|onClose|func||
|disabled|bool|false|

#### Icon
|name|type|
|:---|:----|
|name*|string|

#### Input

|name|type|default|options|
|:---|:----|:-----------|:---|
|readOnly|bool|false||
|disabled|bool|false||
|invalid|bool|false||
|icon|string|null||
|iconPosition|string|'right'|'left', 'right'|
|iconClickHandler|func|none|function(event, input)|
|unlight|string|'none'|'none' ,'default', 'info', 'success', 'warning', 'error'|

#### MultipleInput

|name|type|default|
|:---|:----|:-----|
|options*|array of string||
|onChange*|func||
|allowCustomData|bool|false|
|placeholder|string|''|

#### Password

|name|type|default|options|
|:---|:----|:-----|:-----|
|invalid|bool|false|
|unlight|string|'none'|'none' ,'default', 'info', 'success', 'warning', 'error'
|regExp|regExp|null|
|onChange|func|null|

#### RadioButton
|name|type|default|
|:---|:----|:-----|
|defaultChecked|bool|false|
|checked|bool||
|onChange|func||
|name|string||
|disabled|bool|false|

#### Theme
Contains default themes for providing theme-context for components.

|name|type|default|options|
|:---|:----|:-----------|:---|
|defaultThemeName|string|'lightTheme'|'lightTheme', 'darkTheme'

#### Tooltip
|name|type|default|options|
|:---|:----|:-----|:-----|
|message|string|''||
|messageType|string|'default'|'default', 'info', 'success', 'warning', 'error'|
|orientation|string|'right'|'left', 'right', 'top', 'bottom'|
|isActive|bool|false||

License
===
MIT

##### keywords
[react](https://www.npmjs.com/search?q=keywords:react)
[style](https://www.npmjs.com/search?q=keywords:style)
[hooks](https://www.npmjs.com/search?q=keywords:hooks)
[css-in-js](https://www.npmjs.com/search?q=keywords:css-in-js)
[styling](https://www.npmjs.com/search?q=keywords:styling)
[color](https://www.npmjs.com/search?q=keywords:color)
[styled-components](https://www.npmjs.com/search?q=keywords:styled-components)

