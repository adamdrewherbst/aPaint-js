aPaint-js
=========

a combination of repos kangax/fabric.js and websanova/wPaint to make a more full-fledged MS Paint-like plugin

Details
=======

Only the dist/all.js file from fabric.js and the wPaint.js file from wPaint have been modified - so you should definitely look at those repos 
and their respective websites which are full of awesomeness.  In short, fabric.js makes an HTML5 canvas element super object-oriented and 
intuitive, and also provides interactive modes for both freehand drawing and 2D object manipulation.  Meanwhile, wPaint provides an MS 
Paint-like panel of buttons for drawing specific shapes, lines, etc - also on an HTML5 canvas.  The goal of my modifications is to wrap a 
single (well, technically still 2 if you look at the code) HTML5 canvas with both functionalities, so that when you draw specific shapes, 
they are added directly to the fabric.js canvas as objects, which you can then manipulate by switching to selection mode.

Basically, here's the code you would have to throw into your script to add an aPaint canvas to a DIV:

	function setPaintPanel($elem) {
		$elem.wPaint({
			lineWidthMin         : '0',              // line width min for select drop down
			lineWidthMax         : '10',             // line widh max for select drop down
			... //see add'l settings in wPaint
		});
	
		wPaintCanvas = $elem.data('_wPaint');
		$(wPaintCanvas.canvas).attr('id', 'wpCanvas');
		console.info(wPaintCanvas.canvas);
	
		fabricCanvas = new fabric.Canvas('wpCanvas', {
			backgroundColor: 'rgba(255,255,255,0.0)', //or some other color
		});
		wPaintCanvas.setFabricCanvas(fabricCanvas);
	
		wPaintCanvas.calcOffset();
		fabricCanvas.calcOffset();
	
		wPaintCanvas.mainMenu.set_mode(wPaintCanvas.mainMenu, wPaintCanvas, 'Pencil'); //or some other mode
	}

