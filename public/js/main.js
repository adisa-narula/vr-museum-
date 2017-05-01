console.log("hello");

AFRAME.registerComponent('hidden', {
	init: function(){ 
		console.log("hide hide hide");
		this.el.object3D.visible = false; 
	}
}); 

AFRAME.registerComponent('visible', {
	init: function(){ 
		console.log("show show show");
		this.el.object3D.visible = true; 
	}
}); 