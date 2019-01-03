import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../css/app.css'
import '../csv/[Nguyễn Thế Hùng][Developer]resume.pdf'
import 'jquery'
import Typed from './typed.js'
import '../images/auth.jpg'


$(document).ready(function(){


	$("#uptocall-mini-main").click(function(){
		$("#contactModal").modal("show");
		$("#uptocall-mini").hide();
	});

	$('#contactModal').on('hidden.bs.modal', function () {
	 	 $("#uptocall-mini").show();
	 })

	 var typed = new Typed('#typed-strings', {
	 	strings: ["I'M NGUYỄN THẾ HÙNG ", "I'M A DEVELOPER WEB"],
	 	typeSpeed : 120,
	 	cursorChar: '',
	 	onComplete: ()=>{
	 		$(".loader").hide();
	 		$(".main").show();
	 	}
	  });

});