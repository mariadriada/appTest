
// Load activity content 
$( document ).ready(function(){
	
	// data to send function 
	var objectActivity = {
		name : "Indica a qué tipo de ángulo corresponde cada medida, pare ello marca con una X en el espacio adecuado",
		head : [
			{title : "Angulo"},
			{title : "Agudo"},
			{title : "Obtuso"},
			{title : "Recto"},
			{title : "Llano"},
		],
		data : [
			{ angulo: "150°",	agudo : false,	obtuso: false, recto: false, llano: false,	value: "Obtuso"},
			{ angulo: "12",		agudo : false,	obtuso: false, recto: false, llano: false,	value: "Agudo"},			
			{ angulo: "130",	agudo : false,	obtuso: false, recto: false, llano: false,	value: "Obtuso"},
			{ angulo: "75",		agudo : false,	obtuso: false, recto: false, llano: false,	value: "Agudo"},
			{ angulo: "90",		agudo : false,	obtuso: false, recto: false, llano: false,	value: "Recto"},
			{ angulo: "180",	agudo : false,	obtuso: false, recto: false, llano: false,	value: "Llano"}
		]
	};

	//Correct answer
	var answer = "150%C2%B0=Obtuso&12=Agudo&130=Obtuso&75=Agudo&90=Recto&180=Llano";

	console.log("object");
	console.log(objectActivity);

	// Call function to load data
	loadActivity(objectActivity);

	// Function to load activity data on div #dataActivity
	function loadActivity(object){
		console.log($("#text").text());
		console.log('load activity');

		$("#text").html(object.name);

		// Build view activity
		var view	=	"<form id='form'> <table border='1'>";

		/*************************** TITLE OF TABLE - COLUMNS ********************/
		// Init Head title
		view		+=	"<tr>";

		//Title of table
		$.each( object.head, function( key, value ) {
		  view	+=	"<th> "+value.title+"</th>";
		});

		//End Head Litle
		view		+=	"</tr>";
		/*************************** END  TITLE OF TABLE ****************/


		/*************************** BODY TABLE - ROWS ********************/

		//Control the view of text of angle	
		var count = 0;
		var v = "";

		//Record rows
		$.each( object.data, function( key, value ) {

			// Open row
			view		+=	"<tr>";



				//Record
				$.each( value, function( key2, value2 ) {

					if (count < (object.head.length)){

						//Validate Answer

						
												

						// Show angle text
						if (count === 0) {
							data = value.angulo;
						}
						// Show radio button
						else{

							console.log("value "+value.value+"key  "+key2);
							if (value.value.toLowerCase() === key2.toLowerCase()){
								console.log("correctooooooooooooooooooo");
								v = value.value;

							}
							
							data = "<div class='radio'> \
										<label><input type='radio' name='"+value.angulo+"' value='"+v+"'></label> \
									</div>";
						}
						// Adding row to table
						view	+=	"<td>"+data+"</td> ";


						// Increase counter to disable text of angle 
					   	count = count+1;

					}

					
				});

			// Close row
			view		+=	"</tr>";
			// Reset counter for enable next row
			count = 0;
		});
		

		//Close table
		view	+=	"</table>";
		//Adding Buttons
		view	+=	"	<button type='submit' class='btn btn-default'>Verificar</button> \
						<button type='button' class='btn btn-default'>Borrar</button>";
		//Close form
		view	+=	"</form>";

		//Show data in #dataActivity
		$(".dataActivity").html(view);
	}


	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();


		//Get answer
		var answerUser = $( this ).serialize() ;

		console.log(answer);
		console.log(answerUser);

		if (answer === answerUser){
			alert("OK");
		}
		else{
			alert("ERROR");
		}

		console.log( $( this ).serialize() );
	});
});

