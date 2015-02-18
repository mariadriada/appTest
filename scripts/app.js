// Load activity content 
$( document ).ready(function(){
	
	// data to send function 
	var objectActivity = {
		name : "Indica a qué tipo de ángulo corresponde cada medida, para ello marca con una X en el espacio adecuado.",
		head : [
			{title : "Ángulo"},
			{title : "Agudo"},
			{title : "Obtuso"},
			{title : "Recto"},
			{title : "Llano"},
		],
		data : [
			{ angulo: "150°",	agudo : false,	obtuso: true, recto: false, llano: false,	value: "Obtuso"},
			{ angulo: "12°",		agudo : true,	obtuso: false, recto: false, llano: false,	value: "Agudo"},			
			{ angulo: "130°",	agudo : false,	obtuso: true, recto: false, llano: false,	value: "Obtuso"},
			{ angulo: "75°",		agudo : true,	obtuso: false, recto: false, llano: false,	value: "Agudo"},
			{ angulo: "90°",		agudo : false,	obtuso: false, recto: true, llano: false,	value: "Recto"},
			{ angulo: "180°",	agudo : false,	obtuso: false, recto: false, llano: true,	value: "Llano"}
		]
	};

	//Correct answer
	var answer = "150%C2%B0=Obtuso&12%C2%B0=Agudo&130%C2%B0=Obtuso&75%C2%B0=Agudo&90%C2%B0=Recto&180%C2%B0=Llano ";

	
	// Call function to load data
	loadActivity(objectActivity);

	/* Function to load activity data on div #dataActivity */
	function loadActivity(object){

		// Show description activity 
		$("#text").html(object.name);

		// Build view activity
		var view	=	"<div class='form'> <form id='form'> <table border='1'>";

		/*************************** TITLE OF TABLE - COLUMNS ********************/
		// Init Head title
		view	+=	"<tr>";

		//Title of table
		$.each( object.head, function( key, value ) {
		  view	+=	"<th> "+value.title+"</th>";
		});

		//End Head Litle
		view	+=	"</tr>";
		/*************************** END  TITLE OF TABLE ****************/


		/*************************** BODY TABLE - ROWS ********************/
		//Control the view of text of angle	
		var count = 0;
		//Value  to input radio type
		var v = "";
		// CSS Activate when show angle text 
		var class_radio = "rd";
		// Correct or incorrect image 
		var add = "";
		// Id answer img
		var idImg	= "";

		//Record rows
		$.each( object.data, function( key, value ) {

			// Open row
			view		+=	"<tr>";

				//Record
				$.each( value, function( key2, value2 ) {

					if (count < (object.head.length)){	

						//Id img 
						idImg = value.angulo+"_"+count;

						// Show angle text
						if (count === 0) {
							data = value.angulo;
							class_radio = "rd";							
						}
						// Show radio button
						else{
							if (value.value.toLowerCase() === key2.toLowerCase()){
							
								v = value.value;
								add = "<img src='resources/img/ok.png' alt='' class='imgAnswer "+idImg+"' >";

							}
							else{
								add = "<img src='resources/img/error.png' alt='' class='imgAnswer "+idImg+"'> ";
							}
							
							data = "<div class='radio'> \
										<label><input type='radio' name='"+value.angulo+"' id='"+value.angulo+"' value='"+v+"' answer='"+idImg+"' ok=''></label>"+add+"</div>";


						}
						// Adding row to table
						view	+=	"<td class='"+class_radio+"'>"+data+"</td> ";

						// Increase counter to disable text of angle 
					   	count = count+1;
					   	class_radio = "";
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
		view	+=	"<div class='btns'><button type='submit' class='btn btn-danger'>Verificar</button> \
						<button type='button' class='btn btn-danger' id='btnClear'>Borrar</button></div>";
		//Close form
		view	+=	"</form></div>";

		/*************************** END BODY TABLE - FORM ********************/

		//Show data in #dataActivity
		$(".dataActivity").html(view);
	}


	/* Submit form */
	$( "form" ).on( "submit", function( event ) {
		//Not reload
		event.preventDefault();

		//Get answer
		var answerUser = $( this ).serialize() ;

		console.log(answerUser);
		console.log(answer);

		console.log($( this ).serializeArray());

		//Validate number answers = 6
		if ($( this ).serializeArray().length == 6){
			//Correct answers			
			if (answer.trim() === answerUser.trim()){
				showAnswers();
				alert("Congratulations. Correct answers !!!");
			}
			else{
				showAnswers();
			}
		}
		else{
			alert("Complete all answers")
		}
	});

	/* Show answers image */
	function showAnswers(){

		// Get checked radio obtions 
		dataArray = $("#form input[type=radio]:checked");

		//Record to activate img
		$.each( dataArray, function( key, value ) {
			
			//Independent class for each validated image
			classImg = "."+$(value).attr( "answer" );
			// Show image in radio option checked
			$( classImg ).show();
		});
	}

	/* Clear radio options checked */
	$("#btnClear").click(function(){
		//Hide answer image
		$(".imgAnswer").hide();

		// Get checked radio obtions 
		dataArray = $("#form input[type=radio]:checked");
		//Record to activate img
		$.each( dataArray, function( key, value ) {
			//Clear checked
			$( value ).removeAttr('checked');
		});
	})
});

