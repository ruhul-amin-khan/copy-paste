$(document).ready(function(){

	$("#name_button").click(function(){

		var name = $("#name").text();
		$("#copy_name").val(name);
		$("#name_button").addclass("disabled");
	});


	$("#email_button").click(function(){

		var email = $("#email").text();
		$("#copy_email").val(email);
		$("email_button").addclass("disabled");
	});

	$("#number_button").click(function(){

		var number = $("#phone").text();
		$("#copy_number").val(number);
		$("#number_button").addclass("disabled");
	});

	$("#age_button").click(function(){

		var age = $("#age").text();
		$("#copy_age").val(age);
		$("#age_button").addclass("disabled");

	});



	$("#copy_all").click(function(){

		var name = $("#name").text();
		$("#copy_name").val(name);


		var email = $("#email").text();
		$("#copy_email").val(email);


		var number = $("#phone").text();
		$("#copy_number").val(number);


		var age = $("#age").text();
		$("#copy_age").val(age);

		$("#copy_all").addclass("disabled");


	});


});