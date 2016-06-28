# [Minitron.js](https://achillesrasquinha.github.io/Minitron.js)
> A dot-matrix display-like javascript plugin.

![demo](demo.gif)

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methods](#methods)
* [Options](#options)
* [License](#license)

### Installation
##### Clone the repository
```
git clone https://github.com/achillesrasquinha/Minitron.git
```

##### Install using npm
```
npm install minitron.js
```

##### Install using bower
```
bower install minitron.js
```

In your HTML file
```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script src="/path/to/minitron.js"></script>
  </body>
</html>
```

### Usage
A template declaration would be as follows
```javascript
Minitron.make("<your_message>", { /*<your_options>*/ });
```

### Methods
| Return        | Method                | Description                                              |
| ------------- | ----------------------| -------------------------------------------------------- |
| Minitron      | `setMessage(message)` | Initializes/Updates the message to-be displayed.         |
| Minitron      | `setOptions(option)`  | Pass your options to `settings` to change them any time. |

### Options
```javascript
Minitron.make("<your_message_string>", {
    color: '#00FFFF' /*default*/ | "<your_hex_string>",
    speed: 50        /*default*/ | /*<your_speed> higher the speed value, slower to render*/
});
```

### License
Code released under the [MIT License](http://github.com/achillesrasquinha/Minitron.js/blob/master/LICENSE).