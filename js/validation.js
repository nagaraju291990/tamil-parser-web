 document.write('<script type="text/javascript" src="ime/indicime.js"></script>');
 document.write('<script type="text/javascript" src="ime/inscriptime.js"></script>');

    function setfocus(){
                         document.login.name.focus();
                       }

    function verifyemail()
        {
	    var name = document.login.name.value.replace(/ /g,'');
            var email= document.login.email.value;

        if(name == "" ){
            alert("Please enter Username !");
            return false;
                    }

	if(ValidCharacters(name) == false ){
            alert("Please dont use special character in name !");
            return false;
                    }


        if(email==""){
            alert("Please enter email id !");
            return false;
                    }

	if(CorrectEmail(email)==false)
		  {
			alert("Please enter valid email id !");
			return false;
		  }
        
        }




	function CorrectEmail(variable)
	{
		at = variable.indexOf("@");
		dot = variable.lastIndexOf(".");
		if((at < 1) || ((dot-at) <= 2))
		{
			return false;
		}
		len15=variable.length;
		for(i=0;i < len15; i++)
		if ( ((variable.charAt(0) >= "A") && (variable.charAt(0) <= "Z"))  || (variable.charAt(0) == ".") || (variable.charAt(0) == "-")  || (variable.charAt(i) == "/") || (variable.charAt(i)==" ") || (variable.charAt(i) == "$") || (variable.charAt(0) == "@")  || (variable.charAt(i) == "*") || (variable.charAt(i)==","))
		{
			return false;
		}
	
		return true;
	}


	/* function ValidCharacters(variable)
	{
        len6 = variable.length;
        for (i = 0; i < len6; i++)
        {
                if ( ((variable.charAt(i) >= "a") && (variable.charAt(i) <= "z")) || ((variable.charAt(i) >= "A") && (variable.charAt(i) <= "Z"))  || ((variable.charAt(i)>=0)) )
                {
                        continue;
                }
                        else
                        {
                                return false;
                        }
        }
                return true;
	} */

	function ValidCharacters(variable)
        {
        len6 = variable.length;
        for (i = 0; i < len6; i++)
        {
                if ( ((variable.charAt(i) >= "a") && (variable.charAt(i) <= "z")) || ((variable.charAt(i) >= "A") && (variable.charAt(i) <= "Z")) || ((variable.charAt(i) >= "0") && (variable.charAt(i) <= "9")) || ((variable.charAt(i) == ".")) || ((variable.charAt(i) == "_")))
                {
                        continue;
                }
                        else
                        {
                                return false;
                        }
        }
                return true;
        }



    function validate_ime(txtarea)
   {
        textarea = document.getElementById(txtarea);
	
	lang = document.getElementById('language').value.substring(0,3);
	script = document.getElementById('language').value.substring(3,5);
        if((lang == "pan" || lang == "tel" || lang == "hin" || lang == "tam" || lang == "ben" || lang == "kan" || lang == "mal") && script=="in")
        {
            inscriptIme(lang,textarea);
        }
        else
        {
            wxIme(lang,textarea);
        }
     }

    function validate_ime_keyboard()
   {

	//alert("iam "+txtarea);
	lang = document.getElementById('language').value.substring(0,3);
	script = document.getElementById('language').value.substring(3,5);
        if((lang == "pan" || lang == "tel" || lang == "hin" || lang == "tam" || lang == "ben" || lang == "kan" || lang == "mal") && script=="in")
        {
            inscriptIme(lang,txtarea);
        }
        else
        {
            wxIme(lang,txtarea);
		//getWxchar_keyboard(lang,);
        }
     }
    function validatefile(){
	
	if(document.file.uploaded.value.length==0)
	{
		alert("Please browse text file for translation !");
		return false;
	}

	if(document.file.lang.value.length=="")
	{
		alert("Please choose language pair !");
		return false;
	}
	
	file_name = document.file.uploaded.value;
	file_length = document.file.uploaded.value.length;
	file_extn = file_name.substr(file_length - 4);
	

	if(file_extn == ".doc" || file_extn == ".odt" || file_extn == "html" || file_extn == ".pdf")
	{
		alert("Please choose only text file !");
        	return false;
	}

     }
	
	function verifytext()
	{
	
        var text = trim(document.form1.textarea.value);
        //var pattern = /^(.*\s+<script[^>]*>.*?<\/script>.*)| (\s.*<script[^>]*>.*<\/script>*)+$/i;
	if(text == "")
	{
	alert("Please enter text to translate !");
	return false;
	}
        
	/*if (pattern.test(text)==true)
        {
         alert("Please enter valid text !!");
         return false;
        }*/
        if( ( validParameter(text) == true))
         {
           alert("please enter valid text !!");
           return false;
         }
	
	if(document.form1.lang.value.length=="")
	{
	alert("Please choose language pair !");
	return false;
	}

	
/*
 	var re = new RegExp("^[\u0980-\u09FF]*$"); 
               
                text = trim(text);
                       alert(text);
                if (!(re.verifytext(text))){
                    alert("Oops, Please input Bengali character.");
                    return;
                }
*/
	}

    
	
	function verifyurl()
	{
	var webpage = document.form.webpage.value;
	var webpage_length = document.form.webpage.value.length;
	var web_extn = webpage.substr(webpage_length - 4);
	
        var url = trim(document.form.webpage.value);
	
	if(url == "")
	{
	alert("Please enter webpage !");
	return false;
	}
	
	if(url == "http://")
	{
	alert("Please enter webpage !");
	return false;
	}
	
	if(document.form.lang.value.length=="")
	{
	alert("Please choose language pair !");
	return false;
	}
	}

	function verifydocument()
	{
		var file = document.documenttranslate.file.value;
		if( file == "" ){
			alert("Please browse document for translation");
			return false;
		}
		if(document.documenttranslate.doc_lang.value.length==""){
			alert("Please choose language pair !");
			return false;
			}

                /* rams code for checking whether the file is txt or not */

                var filetype=/\.txt$/;
		if(file.search(filetype)==-1)
                {
                    alert("The given file is not valid text file, Please give .txt or text format file");
                    return false;
                }

                /* rams code ended */

                document.documenttranslate.file.value = file;
		
	}


	function keyboard()
	{
 		lang = document.form1.language.value.substring(0,3);
 		script = document.form1.language.value.substring(3,5);

		if(!(lang=="" || lang==null || lang=="en"))
		{
    		window.open("../../web/html/"+script+"_"+lang+"_keyboard.html",'Keyboard','width=650, height=250');
		}
			else
			{
        			alert("Please select language,which keyboard you want");
			}
	}


	function trim(val) {
		var ret = val.replace(/^\s+/, '');
		ret = ret.replace(/\s+$/, '');
	     return ret;
	 }


        function clicker()
        { 
            var thediv=document.getElementById('displaybox'); 
                if(thediv.style.display == "none"){ 
                    thediv.style.display = ""; 
                    thediv.innerHTML = "<table><tr><td>&nbsp;</td><td>Username Rashid:<input type=text ><br>Password:<input type=password ><br><a href='#' onclick='return clicker();'>Close</a></td></tr></table>"; 
                }
                else{ 
                        thediv.style.display = "none"; 
                        thediv.innerHTML = ''; 
                    } 
                    return false; 
        }
        function detectcookie() 
        { 
            if(navigator.cookieEnabled) { 
            } 
            else { 
                alert('Your browser has cookies disabled.'); 
                return false;
                }
            setFocusLogin();    
        }

/*functions added by rambabu */

    function setFocusLogin()
    {
        document.getElementById('username').focus();
    }

        function demo_textareainput(val)
        {
            document.getElementById('edit_me').innerHTML = "";  // for clearing the output pane and 
            document.getElementById('tr').innerHTML = "";

            switch(val)
            {
                case "pan_hin":
                    document.form1.demo_textarea.value="ਉੱਤਰੀ ਭਾਰਤ ਵਿੱਚ ਸਥਿਤ ਹਿਮਾਚਲ ਸੁੰਦਰਤਾ ਦਾ ਅਦਭੁੱਤ ਸੰਸਾਰ ਹੈ।";
                    break;
                case "hin_pan":
                    document.form1.demo_textarea.value="अमरनाथ की गुफा में हर साल एक प्राकृतिक हिमलिंग बनता है।";
                    break;
                case "urd_hin":
                    document.form1.demo_textarea.value="اجے پال چوہان نے ساتویں صدی مےں اجمےر کی بنیاد رکھی ۔";
                    break;
		case "tel_tam":
                    document.form1.demo_textarea.value="ఈ విగ్రహానికి నాలుగు ముఖాలు ఇంకా నాలుగు చేతులు ఉన్నాయి.";
                    break;
                case "tam_tel":
                    document.form1.demo_textarea.value="இந்தச் சரணாலயத்தின் பரப்பு சுமார் 0.3 சதுர கிலோமீட்டர்.";
                    break;

		//case "hin_tel":
                  //  document.form1.demo_textarea.value="हरिद्वार को भारत की धार्मिक राजधानी माना जाता है।";
                   // break;
		case "tam_hin":
                    document.form1.demo_textarea.value="இந்தியா- பாகிஸ்தான் இடையே நடத்தப்படும் கிரிக்கெட் போட்டிகள் இருநாட்டு ரசிகர்களின் பெரும் எதிர்பார்ப்பை பெற்றிருந்தன.";
                    break;
                case "tel_hin":
                    document.form1.demo_textarea.value="నేను చెయ్యని పని వాడు చేశాడు. ";
                    break;
                case "mar_hin":
                    document.form1.demo_textarea.value="मी राज्यसभेचे सदस्यत्त्व स्वीकारले म्हणजे राजकारणात प्रवेश केलेला नाही.";
                    break;
                default:
            }
        }


function textareainput()
{

    var textarea_text = trim(document.form1.textarea.value);

    if( textarea_text != "")
    {
        do
        {
            var randomnumber = Math.floor(Math.random()*textarea_text.length);
            decimalnumber = textarea_text.charCodeAt(randomnumber);
        }while(decimalnumber == 32);

        var lang = document.form1.lang.value;
        lang = lang.substr(0,3);
        //alert("rand:"+randomnumber+"decimal"+decimalnumber+"lang:"+lang);
        //return false;
        switch(lang)
        {

            case "ben":
                    if( decimalnumber <= 2431 || decimalnumber >= 2560 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Bengali!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "hin":
                    if( decimalnumber <= 2303 || decimalnumber >= 2432 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Hindi!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "kan":
                    if( decimalnumber <= 3199 || decimalnumber >= 3328 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Kannada!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "mal":
                    if( decimalnumber <= 3321 || decimalnumber >= 3456 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Malayalam!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "pan":
                    if( decimalnumber <= 2559 || decimalnumber >= 2660 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Punjabi!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "tam":
                    if( decimalnumber <= 2943 || decimalnumber >= 3072 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Tamil!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "tel":
                    if( decimalnumber <= 3071 || decimalnumber >= 3200 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Telugu!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            case "urd":
                    if( decimalnumber <= 1535 || decimalnumber >= 1792 )
                    {
                        if( decimalnumber <= 64 || decimalnumber >= 123 )
                        {
                            alert("You choosen wrong direction, the input is not in Urdu!");
                            document.form1.lang[0].selected = true;
                            return false;
                        }
                    }
                    break;
            default:

        }
    }
    else
    {
        alert("Please enter text to translate !");
        document.form1.lang[0].selected = true;
        return false;
    }

}

function feedback_textarea()
{
    var text=trim(document.feedbackform.textarea.value);

    if(text == "")
    {
        alert("Please enter text!");
        return false;
    }
    if( ( validParameter(text) == true))
    {
          alert("Invalid script in feedback input, please provide valid feedback!!");
          return false;
    }

}

function verifyregistration() 
{
         var minlength = 3;
         var maxlength = 50;
         var username = trim(document.register.username.value);
	
	if(username == "")
	{
		alert("Enter your Username!!");
		document.register.username.focus();
		return false;
	}
        if(username.length<minlength)
         {
          alert("minimum length must be 3 characters");
          return false;
         }
        if(username.length>maxlength)
         {
          alert("maximum length not more than 15 characters");
          return false;
         }
        
        if(ValidCharacters(username) == false )
	{
              alert("Please don't use special character in name !");
              return false;
        }
        
	var email_id = trim(document.register.email.value);
	if(email_id == "")
	{
		alert("Enter your valid email address!!");
		document.register.email.focus();
		return false;
	}
	else
	{
		//var pattern = /^([a-zA-Z0-9])+(\.[a-zA-Z0-9_])*([a-zA-Z0-9_])*@([a-zA-Z])+(\.[a-zA-Z]{2,3})+$/;
		var pattern = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
		if(pattern.test(email_id)==false)
		{
			alert("Invalid email address, please provide valid email address!!");
			document.register.email.focus();
			return false;
		}
	}

        var confirm_email_id = trim(document.register.confirm_email.value);
        if (email_id != confirm_email_id)
        {
            alert('Your email address and confirm email address do not match!!');
	    document.register.confirm_email.focus();
            return false;
        }

}

function verifyforgotpassword()
{
	var emailid = trim(document.forgotpass.email.value);
	if(emailid=="")
	{
		alert("enter email-id!!");
                document.forgotpass.email.focus();
		return false;
	}
	else
	{
		 //var pattern = /^([a-zA-Z0-9])+(\.[a-zA-Z0-9_])*([a-zA-Z0-9_])*@([a-zA-Z])+(\.[a-zA-Z]{2,3})+$/;
		 var pattern = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
                if(pattern.test(emailid)==false)
                {
                        alert("Invalid email-id!!");
                        document.forgotpass.email.focus();
                        return false;
                }

	}
}

function checktextareawords(value)
{
	var limit  = 181;
	var str = value.split(/\s+/, limit);

    	if(str.length == limit)
    	{
        	alert("You have exceeded the limited words for the text area!");
                str.pop();
        	document.form1.textarea.value = str.join(" ");
        	return false;
    	}

}

function duursampark_checktextareawords(value)
{
	var str = value.split(/\s+/, 151);

    	if(str.length == 151)
    	{
        	alert("You have exceeded the limited words for the text area!");
                str.pop();
        	document.form1.textarea.value = str.join(" ");
        	return false;
    	}

}

function demo_divtext()
{

    document.getElementById('edit_me').style.display = "block";
    document.getElementById('tr').innerHTML="";
    document.getElementById('edit_me').innerHTML="";
    document.getElementById('tr').innerHTML = "<img alt=\"loading.gif\" src=\"/sampark/web/images/loader.gif\" />";
    setTimeout("addtext()", 3000);

    return false;

}

function addtext()
{
    var language = document.form1.demo_lang.value;
    var trans = "Translation Completed.";
    switch(language)
    {
        case "pan_hin":
            document.getElementById('edit_me').innerHTML="उत्तरी भारत में स्थित हिमाचल भव्यता का विलक्षणपूर्ण संसार है . ";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "hin_pan":
            document.getElementById('edit_me').innerHTML="ਅਮਰਨਾਥ ਦਾ ਗੁਫਾ ਵਿੱਚ ਹਰ ਸਾਲ ਇੱਕ ਕੁਦਰਤੀ ਹਿਮਲਿੰਗ ਬਣਦਾ ਹੈਂ .";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "hin_tel":
            document.getElementById('edit_me').innerHTML="హరిద్వారని భారత్యొక్క ధార్మిక రాజధాని ఒప్పుకో బడుతుంది .";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "tam_hin":
            document.getElementById('edit_me').innerHTML="जो  क्रिकेट भारत - पाकिस्तान के बीच चलाया जाएगा वह  प्रतियोगिताऐं प्रशंसकों के महान आकांक्षा को हो जानाये थे |";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "tel_tam":
            document.getElementById('edit_me').innerHTML="இந்த விக்கிரகத்துக்கு நான்கு முகங்கள் இன்னும் நான்கு கைகள் இருக்கிறன .";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "tam_tel":
            document.getElementById('edit_me').innerHTML="ఈ శరణాలయంయొక్క వైశాల్యం సుమారు 0.3 చతురస్త్ర కిలోమీటర్లు .";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "tel_hin":
            document.getElementById('edit_me').innerHTML="मुझसे नहीं  किया गया काम उसने किया है .";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "urd_hin":
            document.getElementById('edit_me').innerHTML="अजय पाल चौहान ने सातवीं शताब्दी में अजमेर की नीव रखी ।";
            document.getElementById('tr').innerHTML=trans;
            break;
        case "mar_hin":
            document.getElementById('edit_me').innerHTML="मैं राज्यसभे के सदस्यत्त्व अपनाया अर्थात् राजनीति में दृश्य करलेला नाह .";
            document.getElementById('tr').innerHTML=trans;
            break;
        default:
    }
}

var eval = 0;
function evaluation(val)
{

    //alert(""+val);
    //return false;
    if( eval == 0)
    {
        eval = 1;
        document.getElementById('evaluation').style.display = "block";
        if(val != "exist")
        {
            document.getElementById('evaluation').innerHTML = "hi this is rams";
            return false;
        }
        else
        {
            document.getElementById('evaluation').innerHTML = "<input type=text name=te />";
            return false;
        }
       //return false;
    }
    else
    {
        eval = 0;
        document.getElementById('evaluation').style.display = "none";
        return false;
        
    }
    return true;
}
function eval_out()
{
    
        document.getElementById('evaluation').style.display = "none";
}

function clear_eval_div()
{
    document.getElementById('update_div').innerHTML = "";
    return false;
}

// function for treeview
function treeview(sentence)
{

    if( sentence == "")
    {
	alert("Please select sentence for tree view");
	return false;
    }
    else{
	    //window.open(sentence,'_blank');
            document.getElementById('divtxtarea').style.display = "block";
            var sentence = sentence.replace(/\$/g, '\"');
            document.getElementById('txtarea').value = sentence;
            //alert(""+ss);
            return false;
	}
}

// function for keyboard help

function keyboard_help()
{
    var lan = document.getElementById('language').value;
    var keyboard_page = "";

    if( lan != "")
    {
            switch(lan)
            {
                case "hinwx":
                    keyboard_page  = "../html/wx_hin_keyboard.html";
                    break;
                case "hinin":
                    keyboard_page  = "../html/keyboardconstruction.html";
                    break;
                case "panwx":
                    keyboard_page  = "../html/wx_pan_keyboard.html";
                    break;
                case "panin":
                    keyboard_page  = "../html/keyboardconstruction.html";
                    break;
                case "tamwx":
                    keyboard_page  = "../html/wx_tam_keyboard.html";
                    break;
                case "tamin":
                    keyboard_page  = "../html/keyboardconstruction.html";
                    break;
                case "telwx":
                    keyboard_page  = "../html/wx_tel_keyboard.html";
                    break;
                case "telin":
                    keyboard_page  = "../html/keyboardconstruction.html";
                    break;
                case "urdwx":
                    keyboard_page  = "../html/keyboardconstruction.html";
                    break;
                default:

            }
        var nnew=window.open(keyboard_page, 'Keyboard Help', "height=400, width=700, top=100, left=100");
        return false;
    }
    else
    {
        alert("Please select the keyboard type to show/hide keyboard help");
        return false;
    }
}

function get_cookie ( cookie_name )
{

  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

   if ( results )
        return ( unescape ( results[2] ) );
   else
        return null;
}

function getCookie()
{
    var cookie = get_cookie('stopPeriod');
    //alert ( "name:"+cookie);
    return cookie;
}

// function for checking the status 
function check_status()
{
    var ck = get_cookie('stopPeriod');
    if(ck == 'true')
    {
    document.getElementById('update_div').innerHTML = "Please wait.. translation in progress!!";
    return false;
    }
    else
    {
    document.getElementById('update_div').innerHTML = "";
    return true;
    }
}

//function for getting the id of the text area to type
function txtAreaId(val)
{
        validate_ime(val);
}

function changbg(val)
{
    //alert(''+val);
    document.getElementById('ll').style.color = "green";
    //document.getElementById('ll').style.backgroundColor = "green";
}

//function for keyboard display in div

var hide_show = 0;

function keyboard_dis()
{
        var lang = document.getElementById('language').value;  
        if (lang != "")
        {

            if (hide_show == 0)
            {
                hide_show = 1;
                document.getElementById('keyboard_div').style.display = "block";
                host = window.location.hostname;
                var image= "";
            switch(lang)
            {
                case "hinwx":
                    image  = "/sampark/web/images/hinwx.png";
                    break;
                case "hinin":
                    image  = "/sampark/web/images/hinin.png";
                    break;
                case "panwx":
                    image  = "/sampark/web/images/panwx.png";
                    break;
                case "panin":
                    image  = "/sampark/web/images/panin.png";
                    break;
                case "tamwx":
                    image  = "/sampark/web/images/tamwx.png";
                    break;
                case "tamin":
                    image  = "/sampark/web/images/tamin.png";
                    break;
                case "telwx":
                    image  = "/sampark/web/images/telwx.png";
                    break;
                case "telin":
                    image  = "/sampark/web/images/telin.png";
                    break;
                case "urdwx":
                    href  = "/sampark/web/html/keyboardconstruction.html";
                    break;
                default:

            }
                //href = "http://" + host + href;
                //document.getElementById('keyboard_div').innerHTML ='<object id="obj" height="270px" width="800px" type="text/html" data="'+href+'"></object>'; 
                document.getElementById('keyboard_div').innerHTML = '<img src=\"' + image + '\"/>';
            }
            else
            {
                hide_show = 0;
                document.getElementById('keyboard_div').style.display = "none";
            }
        }
        else
        {
            alert('Please select the keyboard type to show/hide keyboard help');
            return false;
        }
    
}

// code for displaying and closing suggestion and treee view divitions.

var guest_sug_flag = 0;

function guestsuggestionDiv(id)
{
    if (guest_sug_flag == 0)
    {
        guest_sug_flag = 1;
        document.getElementById('update_suggest').style.display = "block";
        document.getElementById('suggest').innerHTML = "Close Suggest better translation";
    }
    else
    {
        guest_sug_flag = 0;
        document.getElementById('update_suggest').style.display = "none";
        document.getElementById('suggest').innerHTML = "Suggest better translation";
    }

    return "yes";
}


var suggestionflag = 0;

function suggestionDiv(id)
{
    if (suggestionflag == 0)
    {
        suggestionflag = 1;
        document.getElementById('update_suggest').style.display = "block";
        //document.getElementById('update_tview').innerHTML = "";
        document.getElementById('update_tview').style.display = "none";
        document.getElementById('suggest').innerHTML = "Close Suggest better translation";
        document.getElementById('trview').innerHTML = "View Tree";
        treeviewflag = 0;
    }
    else
    {
        suggestionflag = 0;
        document.getElementById('update_suggest').style.display = "none";
        document.getElementById('suggest').innerHTML = "Suggest better translation";
    }

    return "yes";
}

var treeviewflag = 0;

function treeviewDiv(id)
{
    if (treeviewflag == 0)
    {
        treeviewflag = 1;
        document.getElementById('update_tview').style.display = "block";
        //document.getElementById('update_div').innerHTML = "";
        document.getElementById('update_suggest').style.display = "none";
        document.getElementById('trview').innerHTML = "Close View Tree";
        document.getElementById('suggest').innerHTML = "Suggest better translation";
        suggestionflag = 0;
    }
    else
    {
        treeviewflag = 0;
        document.getElementById('update_tview').style.display = "none";
        document.getElementById('trview').innerHTML = "View Tree";
    }

    return "yes";
}

function verifysuggestion()
{
                var suggest = document.getElementById('inputpane').value;
                if (suggest=="")
                {
                        alert("please enter your suggestion!!");
                        return false;
                }
		    //var pattern = /.*script/i;
		    //var pattern = /.*(script|IMG|iframe).*/i;
                    if((validParameter(suggest) == true))
		   // if (pattern.test(suggest)==true)
		    {
			alert("Invalid script in suggestion input, please provide valid suggestion!!");
			return false;
		    }

               return "yes";
}

function validParameter(variable)              //valid parameter function coded by avinash  
{
            //var pattern = /.*(script|IMG|iframe).*/i;
            var pattern = /((\%3C)|<)[^\n]+((\%3E)|>)|(..\/+)/i;
            var matchArray = variable.match(pattern);
            if (matchArray == null) {
                   return false;
            }
                   return true;
}

function verifyprofile()
{
        var old_password = trim(document.profile.oldpass.value);
        if (old_password == "")
        {
            alert('Enter your old password!!');
            document.profile.oldpass.focus();
            return false;
        }

        var new_password = trim(document.profile.newpass.value);
        if (new_password == "")
        {
            alert('Enter your new password!!');
            document.profile.newpass.focus();
            return false;
        }
        
        var confirm_password = trim(document.profile.confirmpass.value);
        if (new_password != confirm_password)
        {
            alert('Your new password and confirm password do not match!!');
            document.profile.confirmpass.focus();
            return false;
        }
        if( ( validParameter(confirm_password) == true))
            {
               alert("Invalid script in password input, please provide valid password!!");
               return false;
            }
                   


	// encrypting password

	document.profile.oldpass.value = hex_md5(old_password).toLowerCase();
	document.profile.newpass.value = hex_md5(new_password).toLowerCase();
	document.profile.confirmpass.value = hex_md5(confirm_password).toLowerCase();

}


/* rams funtions ended */


/***************** code by avinash start*********************************************/

        function verifylogin()
        {
                var email_id = trim(document.registration.username.value);
                var passwd = trim(document.registration.password.value);

		// encrypting the password with md5
		 

                if (email_id == "")
                {
                        alert("Enter your email address!!");
			document.registration.username.focus();
                        return false;
                }
		    //var pattern = /^([a-zA-Z0-9])+(\.[a-zA-Z0-9_])*([a-zA-Z0-9_])*@([a-zA-Z])+(\.[a-zA-Z]{2,3})+$/;
		    var pattern = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

		    if (pattern.test(email_id)==false)
		    {
			alert("Invalid email address, please provide valid email address!!");
			document.registration.username.focus();
			return false;
		    }

                if (passwd == "")
                {
                        alert("please enter your password!!");
			document.registration.password.focus();
                        return false;
                }
                if( ( validParameter(passwd) == true))
                {
                    alert("Invalid script in password input, please provide valid password!!");
                    return false;
                }
		    document.registration.password.value = hex_md5(passwd).toLowerCase();

        }

