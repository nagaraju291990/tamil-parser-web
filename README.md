# Basic Web Interface linking with a Python Script

## Explanation step by step
[Gnyanhub.com](http://gnyanhub.com/linking-a-python-script-to-a-web-interface-with-file-upload/)
## Python Script

Navigate to scripts folder and run the following command.  
in.txt contains some input text that we want to convert to lowercase

```
python3 convert_case.py in.txt
```

This will create out.txt that has our output.  

## Load the web page in browser

```
http://localhost/basic-web-interface/
```
## Changing as per requirements

- Replace your python script with your code.
- If you have any other script like in PERL, Shell script even then it works fine. You just need to change it in PHP script where it calls the system command.

### Directory Structure
.
├── bootstrap-3.3.5-dist
│   ├── css
│   │   ├── bootstrap.css
│   │   ├── bootstrap.css.map
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap-theme.css
│   │   ├── bootstrap-theme.css.map
│   │   └── bootstrap-theme.min.css
│   ├── fonts
│   │   ├── glyphicons-halflings-regular.eot
│   │   ├── glyphicons-halflings-regular.svg
│   │   ├── glyphicons-halflings-regular.ttf
│   │   ├── glyphicons-halflings-regular.woff
│   │   └── glyphicons-halflings-regular.woff2
│   └── js
│       ├── bootstrap.js
│       ├── bootstrap.min.js
│       └── npm.js
├── ChangeLog.md
├── css
│   ├── responsive.css
│   ├── Rokkitt-Bold.ttf
│   ├── Rokkitt-Regular.ttf
│   └── styles.css
├── images
│   ├── loading-2.gif
│   ├── loading.gif
│   └── processing.gif
├── index.html
├── js
│   ├── ajax-progress.min.js
│   ├── convert.js
│   ├── convert-rest.js
│   ├── FileSaver.js
│   ├── jquery.js
│   ├── jquery.selection.js
│   ├── jquery-ui.js
│   ├── pdfmake.js
│   ├── validation.js
│   └── vfs_fonts.js
├── README.md
└── scripts
    ├── case_convert.py
    ├── convert.php
    ├── in.txt
    ├── out.txt
    ├── upload.php
    └── uploads

9 directories, 39 files
