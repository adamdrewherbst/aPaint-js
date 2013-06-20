$(document).ready(function() {

	var $elem = $('#test');
	$elem.wPaint({
	    mode                 : 'Pencil',         // drawing mode - Rectangle, Ellipse, Line, Pencil, Eraser
		lineWidthMin         : '0',              // line width min for select drop down
		lineWidthMax         : '10',             // line widh max for select drop down
		lineWidth            : '2',              // starting line width
		fillStyle            : '#FFFFFF',        // starting fill style
		strokeStyle          : '#FFFF00',        // start stroke style
		fontSizeMin          : '8',              // min font size in px
		fontSizeMax          : '20',             // max font size in px
		fontSize             : '12',             // current font size for text input
		fontFamilyOptions    : ['Arial', 'Courier', 'Times', 'Trebuchet', 'Verdana'],
		fontFamily           : 'Arial',          // active font family for text input
		fontTypeBold         : false,            // text input bold enable/disable
		fontTypeItalic       : false,            // text input italic enable/disable
		fontTypeUnderline    : false,            // text input italic enable/disable
		image                : null,             // preload image - base64 encoded data
		imageBg              : null,             // preload image bg, cannot be altered but saved with image
		drawDown             : null,             // function to call when start a draw
		drawMove             : null,             // function to call during a draw
		drawUp               : null,             // function to call at end of draw
		menu                 : ['undo','clear','select','rectangle','ellipse','line','pencil','text','eraser','fillColor','lineWidth','strokeColor'], // menu items - appear in order they are set
		menuOrientation      : 'horizontal',      // orinetation of menu (horizontal, vertical)
		menuOffsetX          : 5,                // offset for menu (left)
		menuOffsetY          : 5,                 // offset for menu (top)
		menuTitles           : {                 // icon titles, replace any of the values to customize
					                'undo': 'undo',
					                'redo': 'redo',
					                'clear': 'clear',
					                'select': 'select mode',
					                'rectangle': 'rectangle',
					                'ellipse': 'ellipse',
					                'line': 'line',
					                'pencil': 'pencil',
					                'text': 'text',
					                'eraser': 'eraser',
					                'fillColor': 'fill color',
					                'lineWidth': 'line width',
					                'strokeColor': 'stroke color',
					                'bold': 'bold',
					                'italic': 'italic',
					                'underline': 'underline',
					                'fontSize': 'font size',
					                'fontFamily': 'font family'
					            },
		disableMobileDefaults: false             // disable default touchmove events for mobile (will prevent flipping between tabs and scrolling)
	});
	
	var wpCanvas = $elem.data('_wPaint');
	$(wpCanvas.canvas).attr('id', 'wpCanvas');
	console.info(wpCanvas.canvas);
	
	var fabCanvas = new fabric.Canvas('wpCanvas', {
		backgroundColor: 'rgba(0,0,0,1.0)',
	});
	wpCanvas.fabCanvas = fabCanvas;
	
	fabCanvas.removeMyListeners();
	var line = new fabric.Line([50,50,100,100], {stroke: 'red', strokeWidth: 5});
	fabCanvas.add(line);
	line.set({x1: 100, y1: 100, x2: 200, y2: 200});
	line.setCoords();
	fabCanvas.renderAll();
	
	//$(fabCanvas.upperCanvasEl).hide();
	wpCanvas.addMyListeners();
	console.info(wpCanvas);
	console.info(fabCanvas);
	
});
