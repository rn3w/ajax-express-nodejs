
$(window).on('load', function() {			
			
			var id = 'idUsuario';
 
            $('#botonEnviar').click(function(event) {				
 
                event.preventDefault();
 
                var request = $.ajax({
					method : 'POST',
                    url    : '/servidor',                    
                    data   : {
                        keystrokes : id,
                    },
                    dataType    : 'json'
                });
 
                request.done(function(response) { 
                    if(response.status) {
                        alert('Success: ' + response.result + "\n Message: " + response.message);
                        window.location.href = '/servidor';
                    }
                    else {
                        alert('Error: ' + response.message);
                        window.location.href = window.location.href;
                    }
                });
 
                request.fail(function(jqXHR, textStatus) {
                    alert("Server request failed: " + textStatus);
                    window.location.href = '';
                });
            });
			
		});