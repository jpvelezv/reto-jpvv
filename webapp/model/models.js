sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function (JSONModel, Device) {
  "use strict";
  return {
    /**
     * Provides runtime information for the device the UI5 app is running on as a JSONModel.
     * @returns {sap.ui.model.json.JSONModel} The device model.
     */
    createDeviceModel: function () {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    createUserModel: function () {
      return new JSONModel({
        users: [],
        currentUser: {
          id: "",
          typeDocument: "",
          numberDocument: "",
          firstName: "",
          lastName: "",
          birthDate: "",
          placeBirth: "",
          nationality: "",
          genre: "",
          civilStatus: "",
          country: "",
          province: "",
          region: "",
          address: "",
          postalCode: "",
          phoneNumber: "",
          email: ""
        }
      });
    }
  };
});
