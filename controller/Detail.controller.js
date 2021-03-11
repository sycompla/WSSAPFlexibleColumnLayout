sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
], function (Controller, fioriLibrary) {
    "use strict";

    return Controller.extend("sap.ui.demo.fiori2.controller.Master", {
        onInit: function () {

        },

        onListItemPress: function () {
            var oFCL = this.oView.getParent().getParent();

            oFCL.setLayout(fioriLibrary.LayoutType.ThreeColumnsMidExpanded);
        }
    });
});
