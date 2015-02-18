
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
			{title : "llano"},
		],
		data : [
			{ angulo: "150°",	agudo : false,	Obtuso: false, recto: false, llano: false},
			{ angulo: "12",		agudo : false,	Obtuso: false, recto: false, llano: false},			
			{ angulo: "130",	agudo : false,	Obtuso: false, recto: false, llano: false},
			{ angulo: "75",		agudo : false,	Obtuso: false, recto: false, llano: false},
			{ angulo: "90",		agudo : false,	Obtuso: false, recto: false, llano: false},
			{ angulo: "180",	agudo : false,	Obtuso: false, recto: false, llano: false}
		]
	};

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
		var view	=	"<form> <table border='1'>";

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

		//Record rows
		$.each( object.data, function( key, value ) {

			// Open row
			view		+=	"<tr>";

				//Record
				$.each( value, function( key2, value2 ) {

					// Show angle text
					if (count === 0) {
						data = value.angulo;
					}
					// Show radio button
					else{
						data = "<div class='radio'> \
									<label><input type='radio' name='optradio'></label> \
								</div>";
					}
					// Adding row to table
					view	+=	"<td>"+data+"</td> ";
					// Increase counter to disable text of angle 
				   	count = count+1;
				});

			// Close row
			view		+=	"</tr>";
			// Reset counter for enable next row
			count = 0;
		});

		view		+=	"</table> </form> ";

		//Show data in #dataActivity
		$(".dataActivity").html(view);
	}
});

