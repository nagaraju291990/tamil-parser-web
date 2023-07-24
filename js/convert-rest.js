
var fromto = ''; var jobstatus='';
var formData ='';var jobid='';
var noofpages=0; var flag=0;

//hide the image initially
$(document).ready(function(){
	//document.getElementById('file').addEventListener('change', readSingleFile, false);
	$("#loading").hide();
	//$('#download').prop('disabled', false);
	$("#savetype").hide();
	$("#download").hide();
	//$("#result").hide();
	//$("#upload").hide();
	$("#edit").hide();
});

function startRead(evt) {
//	var file = document.getElementById("file").files[0];
var formData = new FormData();
formData.append('inputfile', $('#file')[0].files[0]);
//alert($("#upload
	$.ajax({
		url: "scripts/data.pl",
		type: 'POST',
		data: formData,
		async: false,
		cache: false,
		contentType: false,
		processData: false,
		success: function (data) {
			//alert(data);
			$("#input").html(data);
			var tmp = $("#input").val();
			$("#input").text(tmp);
			$("#input").height("auto");
			var h = $("#input").height();
			$("#result").css("height",h);
		},
		error:function  (jqXHR, exception) {
			$("#loading").hide();
			var msg = '';
			if (jqXHR.status === 0) {
				msg = 'Not connect.\n Verify Network.';
			} else if (jqXHR.status == 404) {
				msg = 'Requested page not found. [404]';
			} else if (jqXHR.status == 500) {
				msg = 'Internal Server Error [500].';
			} else if (exception === 'parsererror') {
				msg = 'Requested JSON parse failed.';
			} else if (exception === 'timeout') {
				msg = 'Time out error.';
			} else if (exception === 'abort') {
				msg = 'Ajax request aborted.';
			} else {
				msg = 'Uncaught Error.\n' + jqXHR.responseText;
			}
			alert("Error in File conversion "+msg);
		}

	});
}


//called when submit button button is clicked
function submittext(){
	$("#savetype").hide();
	$("#download").hide();
	//$("#result").hide();

	//retrieve values from fields
	var script = $("#language").val();
	var fromto = $("#from_to").val();
	var srctext = $("#input").val();
	//alert(fromto+" "+srctext);
	
	if(typeof script =="undefined" || script =="") {
		alert("Choose language");
		return false;
	}
	
	if(typeof fromto =="undefined" || fromto ==""){
		alert("Select src and target script");
		return false;
	}

	if(typeof srctext =="undefined" || srctext =="") {
		alert("Provide some text for transliteration");
		return false;
	}

	var srctgt = fromto.split("2");
	var src = srctgt[0];
	var tgt = srctgt[1];

	//do javascript validation on form fields
	/*if( document.getElementById("file").files.length == 0 ){
		alert("No file selected for conversion");
		return false;
	}
	else if(typeof fromto =="undefined" || fromto =="" ){
		alert("Please select type of font to get converted");
		return false;
	}*/

	$("#loading").show();
	$("#result").empty();
	//Ajax call to upload and submit for conversion
	$.ajax({
		type: 'POST',
		url: config.convert,
		data: "lang="+script+"&from_to="+fromto+"&text="+srctext,
		header:"application/x-www-form-urlencoded",
		async:false,
		success: function (data) {
			$("#loading").hide();
			var tgttext = data["converted_text"];
			$("#result").html(tgttext);
			$('#download').prop('disabled', false);
			$('#language').prop('disabled', false);
			$("#savetype").show();
			$("#download").show();
			$("#edit").show();
		
		},
		error:function  (jqXHR, exception) {
			$("#loading").hide();
			var msg = '';
			if (jqXHR.status === 0) {
				msg = 'Not connect.\n Verify Network.';
			} else if (jqXHR.status == 404) {
				msg = 'Requested page not found. [404]';
			} else if (jqXHR.status == 500) {
				msg = 'Internal Server Error [500].';
			} else if (exception === 'parsererror') {
				msg = 'Requested JSON parse failed.';
			} else if (exception === 'timeout') {
				msg = 'Time out error.';
			} else if (exception === 'abort') {
				msg = 'Ajax request aborted.';
			} else {
				msg = 'Uncaught Error.\n' + jqXHR.responseText;
			}
			alert(msg+" Please try afer sometime");
		}
	});
	return false;
}

//called when download button is clicked
function saveasfile(){
	var savetext =$("#result").val();

	if(typeof savetext =="undefined" || savetext == "") {
		alert("File cannot be downloaded as text is empty");
		return false;
	}

	var flag = $("#savetype").is(":visible");
	var flag1 = $("#savetype-text").is(":visible");
	var type='';
	if(flag){
		type = $("#savetype").val();
	}
	else{
		type = $("#savetype-text").val();
	}
	//var type = $("select[id^='savetype']").val();
	var filename='';

	if(type=="txt"){
		filename = "converter.txt";
	saveTextAs(savetext, filename,"",type);
	}
	else if(type=="csv"){
		filename = "converter.csv";
	saveTextAs(savetext, filename,"",type);
	}
	else if(type=="doc"){
		filename = "converter.doc";
	saveTextAs(savetext, filename,"",type);
	}
	else if(type=="rtf"){
		filename = "converter.rtf";
	saveTextAs(savetext, filename,"",type);
	}
	else if (type=="pdf"){
		filename = "converter.pdf";
		var newWin = window.open();
		newWin.document.write(savetext);
		newWin.document.close();
		newWin.focus();
		newWin.print();
		newWin.close();
		return false;
		var docDefinition = { content:[ {text:savetext ,fontSize:14} ] };
		/*var docDefinition = {
			content: [
				// if you don't need styles, you can use a simple string to define a paragraph
				//     'This is a standard paragraph, using default style',
				//
				// using a { text: '...' } object lets you set styling properties
			{ text: 'This paragraph will have a bigger font', fontSize: 15 },

			// if you set the value of text to an array instead of a string, you'll be able
			// to style any part individually
			{
				text: [
					'किन्ही कारणों से ये हो न सका । This paragraph is defined as an array of elements to make it possible to ',
				{ text: 'restyle part of it and make it bigger ', fontSize: 15 },
				'than the rest.'
					]
			}
			
			]		
		};
		pdfMake.createPdf(docDefinition).download();*/
	}
	else{
		filename = "fontconverter.txt";
	saveTextAs(savetext, filename,"",type);
	}

}

function edittext() {
	  var text =$("#result").val();
	  //alert(text);
	  text = encodeURIComponent(text);
	  //var text ="some large tetx";
	  //$("#langugage").show();
	  //$("#result").show();

	  // Create a form
	   var mapForm = document.createElement("form");
	   mapForm.target = "_blank";    
	   mapForm.method = "POST";
	   mapForm.action = config.typing;
	   mapForm.id = "newform";
	  
	  // Create an input
	   var mapInput = document.createElement("input");
	   mapInput.type = "text";
	   mapInput.id = "text";
	   mapInput.name = "text";
	   mapInput.value = text;
	  
	   // Add the input to the form
	   mapForm.appendChild(mapInput);
	  //alert(text);
	  // Add the form to dom
	   document.body.appendChild(mapForm);
	  
	   // Just submit
	   mapForm.submit();
	   //$("#text").addClass(hidden);
	  $("#text").hide();
	  $("#newform").remove();
}

function readSingleFile(evt) {

	var f = evt.target.files[0];
	//console.log(f);
	if (!f) {
		alert("Failed to load file");
		return;
	} 
/*	if (f.name.indexOf('.pdf') == -1 ||f.name.indexOf('.doc') == -1 || f.name.indexOf('.txt') == -1 ) {
		alert("Please upload only pdf/txt/doc files.");
		document.getElementById("upload").reset();
		return false;;     
	}    */
}


