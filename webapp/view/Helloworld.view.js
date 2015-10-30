sap.ui.jsview("Helloworld.view.Helloworld", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Helloworld
	 */
	getControllerName: function() {
		return "Helloworld.controller.Helloworld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Helloworld
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			title: "{i18n>Hello World}",
			content: [

			]
		});
	}

});