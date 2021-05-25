# strong-rem
A flexible mobile page adaptation scheme based on [lib-flexible](https://github.com/amfe/lib-flexible).

## Install
### Using unpkg CDN
```
<script src="https://unpkg.com/strong-rem/index.js"></script>
```
If you use script tag import, you can ignore the **Usage** step of **Import the module of npm at the top**

### Using npm
```bash
npm install strong-rem --save-dev
```

## Usage

### Insert meta tag of the viewport in the head tag
```
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
</head>
```
### Import the module of npm at the top
#### CommonJS
```
require('strong-rem')
```
#### ESM
```
import 'strong-rem'
```

## License
strong-rem is [MIT licensed](https://github.com/AmoyDreamer/strong-rem/blob/master/LICENSE).
