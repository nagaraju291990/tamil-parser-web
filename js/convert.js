
var fromto = ''; var jobstatus='';
var formData ='';var jobid='';
var noofpages=0; var flag=0;

//hide the image initially
$(document).ready(function(){
	$("#loading").hide();
	$("#savetype").hide();
	$("#download").hide();
	$("#edit").hide();
	$("#output_type").chosen({
		width: "100%",
		height: "100%"
	});
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});

function startRead(evt) {
var formData = new FormData();
formData.append('inputfile', $('#file')[0].files[0]);
//alert($("#upload
	$.ajax({
		url: "scripts/upload.php",
		type: 'POST',
		data: formData,
		async: false,
		cache: false,
		contentType: false,
		processData: false,
		success: function (data) {
			//alert(data);
			$("#input").val(data);
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
	var srctext = $("#input").val();
	var output_type = $("#output_type").val();
	//alert(fromto+" "+srctext);
	
	srctext = srctext.trim();
	if(typeof srctext =="undefined" || srctext =="") {
		alert("Provide some text...");
		return false;
	}

	if(output_type == "") {
		output_type = "pos";
	}

	$("#loading").show();
	$("#postagresult").empty();
	//Ajax call to upload and submit for conversion
	$.ajax({
		type: 'POST',
		url: "scripts/annotate.php",
		//data: "&from=" + from + "&to=" + to + "&text=" + srctext,
		data: "&text=" + srctext + "&output_type=" + output_type,
		header:"application/x-www-form-urlencoded",
		async:false,
		success: function (data) {
			$("#loading").hide();
			//alert(data);
			var tgttext = data;
			
			var postable ='<div class="panel-heading">Parts of Speech</div><table class="table table-bordered table-striped table-condensed table-responsive">';
			var motable ='<div class="panel-heading">Morph Analysis</div><table class="table table-bordered table-striped table-condensed table-responsive">';
			var postagcloud ='<div class="pos-tag-cloud">';
			postable += '<tr class="success"><th>Token</th><th>POS</th></tr>';
			/*var arr = tgttext.split("\n");
			for(var i=0;i<arr.length-1;i++) {
				var arr2 = arr[i].split("\t");
				if(arr2[0].trim() != "") {
					postable += '<tr><td style="width:25%;">' + arr2[0] + '</td><td style="width:25%;"> ' + arr2[1] + ' </td></tr>';
					postagcloud += '<span class="token">' + arr2[0] + '</span><span class="pos-tag">' + arr2[1]+ '</span>';
				}
			}*/

			 if (data["status"].toLowerCase() == "success") {
				 for (var i=0; i<data.pos_annotations.length; i++) {
					 var cur_token = data.pos_annotations[i]["token"];
					 var cur_tag = data.pos_annotations[i]["feature"];
					 if(cur_token.trim() != "") {
						 postable += '<tr><td style="width:25%;">' + cur_token + '</td><td style="width:25%;"> ' + cur_tag + ' </td></tr>';
						 postagcloud += '<span class="token">' + cur_token + '</span><span class="pos-tag">' + cur_tag + '</span>';
					 }
				 }
				 for (var i=0; i<data.morph.length; i++) {
					 var cur_token = data.morph[i]["token"];
					 cur_token = cur_token.replace(/^\^/g, "");
					 var cur_tag = escapeHtml(data.morph[i]["feature"]);
					 if(cur_token.trim() != "") {
						 motable += '<tr><td style="width:25%;">' + cur_token + '</td><td style="width:25%;"> ' + cur_tag + ' </td></tr>';
					 }
				 }
			 }
			postable += '</table>';
			motable += '</table>';
			postagcloud += '</div>';

			//$("#postagresult").text(tgttext);
			$("#postagresult").html(postable);
			$("#postagresult").html(postagcloud);
			$("#morphresult").append(motable);

			$('#download').prop('disabled', false);
			$("#savetype").show();
			$("#download").show();
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
			alert("Techinical Issue\n. Please try afer sometime");
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
		filename = "converter.txt";
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

function empty(){
//	alert("aim here");
	$("#input").empty();
}

//escape html characters
var entityMap = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
	'/': '&#x2F;',
	'`': '&#x60;',
	'=': '&#x3D;'
};

//escapeHTML function
function escapeHtml(string) {
	return String(string).replace(/[&<>"'`=\/]/g, function(s) {
		return entityMap[s];
	});
}

