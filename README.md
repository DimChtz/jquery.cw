# jquery.cw
A tiny jQuery plugin that lets you display confirm windows.

# Example (dark theme)
```javascript
$cw({

    title: 'Hellow world',
    content: 'Are you sure?',
    theme: 'dark',
    okay: {
         text: 'Yes, I am',
         action: function() { console.log('Clicked okay button'); }
    },
    cancel: {
         text: 'No, I am not',
         action: function() { console.log('Clicked cancel button'); }
    }

});
```

# Options
|Option|Description|
|--------|-----------|
|title|The title of the window (text)|
|content|The content of the window (text)|
|theme|dark | light|
|okay.text|The text of the Okay button|
|okay.action|The callback function of the Okay button|
|cancel.text|The text of the Cancel button|
|cancel.action|The callback function of the Cancel button|
