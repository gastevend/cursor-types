var cursors = [ 
{
	name: 'alias',
	description: 'The cursor indicates an alias of something is to be created'
},
{
	name: 'all-scroll',
	description: 'The cursor indicates that something can be scrolled in any direction'
}, 
{
	name: "auto",
	description: "Default. The browser sets a cursor"
},
{
	name: "cell",
	description: "The cursor indicates that a cell (or set of cells) may be selected"
},
{
	name: "context-menu",
	description: "The cursor indicates that a context-menu is available"
},
{
	name: "col-resize",
	description: "The cursor indicates that the column can be resized horizontally"
},
{
	name: "copy",
	description: "The cursor indicates something is to be copied"
},
{
	name: "crosshair",
	description: "The cursor render as a crosshair"
},
{
	name: "default",
	description: "The default cursor"
},
{
	name: "e-resize",
	description: "The cursor indicates that an edge of a box is to be moved right (east)"
},
{
	name: "ew-resize",
	description: "Indicates a bidirectional resize cursor"
},
{
	name: "grab",
	description: "The cursor indicates that something can be grabbed"
},
{
	name: "grabbing",
	description: "The cursor indicates that something can be grabbed"
},
{
	name: "help",
	description: "The cursor indicates that help is available"
},
{
	name: "move",
	description: "The cursor indicates something is to be moved"
},
{
	name: "n-resize",
	description: "The cursor indicates that an edge of a box is to be moved up (north)"
},
{
	name: "ne-resize",
	description: "The cursor indicates that an edge of a box is to be moved up and right (north/east)"
},
{
	name: "nesw-resize",
	description: "Indicates a bidirectional resize cursor"
},
{
	name: "ns-resize",
	description: "Indicates a bidirectional resize cursor"
},
{
	name: "nw-resize",
	description: "The cursor indicates that an edge of a box is to be moved up and left (north/west)"
},
{
	name: "nwse-resize",
	description: "Indicates a bidirectional resize cursor"
},
{
	name: "no-drop",
	description: "The cursor indicates that the dragged item cannot be dropped here"
},
{
	name: "none",
	description: "No cursor is rendered for the element"
},
{
	name: "not-allowed",
	description: "The cursor indicates that the requested action will not be executed"
},
{
	name: "pointer",
	description: "The cursor is a pointer and indicates a link"
},
{
	name: "progress",
	description: "The cursor indicates that the program is busy (in progress)"
},
{
	name: "row-resize",
	description: "The cursor indicates that the row can be resized vertically"
},
{
	name: "s-resize",
	description: "The cursor indicates that an edge of a box is to be moved down (south)"
},
{
	name: "se-resize",
	description: "The cursor indicates that an edge of a box is to be moved down and right (south/east)"
},
{
	name: "sw-resize",
	description: "The cursor indicates that an edge of a box is to be moved down and left (south/west)"
},
{
	name: "text",
	description: "The cursor indicates text that may be selected"
},
{
	name: "vertical-text",
	description: "The cursor indicates vertical-text that may be selected"
},
{
	name: "w-resize",
	description: "The cursor indicates that an edge of a box is to be moved left (west)"
},
{
	name: "wait",
	description: "The cursor indicates that the program is busy"
},
{
	name: "zoom-in",
	description: "The cursor indicates that something can be zoomed in"
},
{
	name: "zoom-out",
	description: "The cursor indicates that something can be zoomed out"
}];


var createColor = function() {
	for (i=0; i<cursors.length; i++) {
		var rgb = [];
		var a =(Math.random().toFixed(1));
		for (j=0; j<3; j++) {
		rgb.push(Math.floor(Math.random()*225));
		}
	var color = 'rgba(' + rgb.toString() + ',' + a + ')';
	document.getElementsByTagName('div')[i].style.backgroundColor = color;
	} 
}

var addHover = function () {
	var divId = this.getAttribute('data-id');
	this.style.cursor = cursors[divId].name;
}

var createBoard = function () {
	for (i=0; i<cursors.length; i++) {
		var divs = document.createElement('div');
		divs.setAttribute("data-id", i);
		divs.addEventListener("mouseover", addHover);
		document.getElementsByTagName('main')[0].appendChild(divs);
		var header = document.createElement('h1');
		var desc = document.createElement('p')
		header.innerHTML = cursors[i].name;
		desc.innerHTML = cursors[i].description;
		divs.appendChild(header);
		divs.appendChild(desc);
	}
}

createBoard();
createColor();