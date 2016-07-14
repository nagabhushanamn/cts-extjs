describe("formBind true", function() {
   
    it("should disable button if email is not valid", function(done) {

        // Create and reference the WindowEditor and then 
        // get reference to the button and textfield
        var win = Ext.create('MyApp.view.main.EmailEditor'),
            button = win.down('button'),      
            field  = win.down('textfield');

        // Set the field's value to a valid email address
        // in order to have the button fire an enable event
        field.setValue('valid@email.com');

        button.on('enable', function() {

            // Set the field's value to an invalid email address (nothing)
            // in order to have the button fire a disable event
            field.setValue('naga@gmail.com');

            button.on('disable', function() {

                //  Once the disable event has been called after setting a 
                //  bad value, we can safely say that the button is properly 
                //  hooked into the form's validity.  Thusly, we can 
                //  alert the spec to return by calling the done function.
                done();    
            });
        });
    });
});