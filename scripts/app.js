
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

		/*************************** TITLE OF TABLE ********************/
		// Init Head title
		view		+=	"<tr>";

		//Title of table
		$.each( object.head, function( key, value ) {
		  view	+=	"<th> "+value.title+"</th>";
		});

		//End Head Litle
		view		+=	"</tr>";
		/*************************** END  TITLE OF TABLE ****************/
		var head = false;
		var count = 0;

		$.each( object.data, function( key, value ) {

			view		+=	"<tr>";

			head = true;

			//Record registro
			$.each( value, function( key2, value2 ) {
				console.log("key2");
				console.log(key2);

				if (count === 0) {
					data = value.angulo;
				}
				else{
					data = "";
				}

				 view	+=	"<td> \
				<div class='radio'> \
					<label><input type='radio' name='optradio'>"+data+"</label> \
				</div> \
			   </td> ";

			   count = count+1;

			});

			view		+=	"</tr>";
			
			head = false;
			count = 0;

			/*console.log("data");
			console.log(value)
		 	view	+=	"<tr>";

		 	//Record heads to graphics radio buttons
			$.each( object.head, function( key, value ) {		 
			  view	+=	"<td> \
				<div class='radio'> \
					<label><input type='radio' name='optradio'>"+value.angulo+"</label> \
				</div> \
			   </td> ";
			});

		  view	+=	"</tr>";*/


		});



		view		+=	"</table> </form> ";

		//Show data in #dataActivity
		$(".dataActivity").html(view);
	}
});

