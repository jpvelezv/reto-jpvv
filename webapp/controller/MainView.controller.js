sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("logaligroup.retojpvv.controller.Main", {
        onInit: function () {
            // Crear modelo con estructura base
            const oData = {
                currentUser: {
                    id: "",
                    typeDocument: "",
                    numberDocument: "",
                    firstName: "",
                    lastName: "",
                    birthDate: null,
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
                },
                users: []
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onSubmit: function () {
            const oModel = this.getView().getModel();
            const oData = oModel.getData();

            // Validar que haya ID, nombre o algún campo obligatorio (opcional)
            if (!oData.currentUser.id || !oData.currentUser.firstName || !oData.currentUser.lastName) {
                MessageToast.show("Por favor, complete al menos los campos obligatorios: ID, Nombre y Apellido.");
                return;
            }

            // Agregar copia del currentUser al arreglo de usuarios
            oData.users.push({ ...oData.currentUser });

            // Limpiar el formulario
            oData.currentUser = {
                id: "",
                typeDocument: "",
                numberDocument: "",
                firstName: "",
                lastName: "",
                birthDate: null,
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
            };

            // Actualizar el modelo
            oModel.setData(oData);
            MessageToast.show("Usuario registrado correctamente.");
        }
    });
});
