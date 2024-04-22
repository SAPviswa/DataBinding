sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.app.binding.controller.View1", {
            onInit: function (eve) {

            },
            onSubmitData: function (eve) {
                const Actors = this.getView().getModel().setProperty("/Actors/1")
                console.log(Actors);
            }
        });
    });
