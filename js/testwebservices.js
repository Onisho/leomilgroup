;
(function ($) {
    jQuery(document).ready(function () {
    	
    	$("#contactForm").submit(function(e) {
            e.preventDefault();
            
            var data = {};
            data.name = $("input#name").val();
            data.email = $("input#email").val();
            var parameters = [];
            var param1 = {};
            param1.name = "testdata";
            param1.value = $("input#testdata").val();
            parameters.push(param1);
            
            var param2 = {};
            param2.name = "subject";
            param2.value = $("textarea#subject").val();
            parameters.push(param2);
            
            data.parameters = parameters;
            
            $.ajax({
                    url: "https://testwebservices.cortina.be/form/contact",
                    type: "POST",
                    dataType: 'application/json',
                    data: JSON.stringify(data),
                    headers: { "X-Application-Name": "Leomil" },
                    success: function(data) {
                        console.log(data);
                    },
                    error: function (jqXHR, exception) {
                       console.log(jqXHR.status);
                       console.log(exception);
                    }
            });

        });
    	
    	
    });
})(jQuery);    	