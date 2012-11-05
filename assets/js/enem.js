

$('.day').button('toggle');
$('.color').button('toggle');

var t_gabaritos =
	{
		"1":
		{
			/* rosa */
			"0":
			[
				["C"], ["E"], ["B"], ["D"], ["D"], ["C"], ["D"], ["A"], ["E"], ["C"], ["E"], ["A"], ["A"], ["A"], ["B"],
				["D"], ["E"], ["B"], ["A"], ["B"], ["E"], ["E"], ["E"], ["E"], ["E"], ["E"], ["E"], ["C"], ["B", "E"], ["B"],
				["E"], ["C"], ["A"], ["C"], ["D"], ["C"], ["D"], ["A"], ["A"], ["D"], ["A"], ["B"], ["E"], ["C"], ["E"],
				["D"], ["D"], ["A"], ["B"], ["E"], ["C"], ["E"], ["E"], ["B"], ["E"], ["B"], ["C"], ["E"], ["E"], ["D"],
				["A"], ["B", "E"], ["D"], ["D"], ["A"], ["B"], ["A"], ["E"], ["B"], ["C"], ["B"], ["A"], ["E"], ["E"], ["A"],
				["C"], ["D"], ["C"], ["D"], ["A"], ["C"], ["B"], ["C"], ["C"], ["B"], ["E"], ["B"], ["A"], ["C"], ["E"]
			],

			/* azul */
			"1":
			[
				["E"], ["A"], ["E"], ["B"], ["A"], ["A"], ["B"], ["D"], ["C"], ["B", "E"], ["B"], ["D"], ["D"], ["C"], ["E"],
				["E"], ["E"], ["E"], ["C"], ["E"], ["B"], ["C"], ["D"], ["A"], ["D"], ["C"], ["E"], ["D"], ["A"], ["E"],
				["C"], ["A"], ["B"], ["E"], ["E"], ["E"], ["A"], ["B"], ["E"], ["E"], ["C"], ["A"], ["C"], ["D"], ["A"],
				["B"], ["A"], ["E"], ["B"], ["E"], ["E"], ["D"], ["A"], ["B", "E"], ["D"], ["D"], ["D"], ["A"], ["B"], ["C"],
				["C"], ["B"], ["A"], ["E"], ["E"], ["A"], ["C"], ["D"], ["C"], ["D"], ["E"], ["C"], ["E"], ["A"], ["C"],
				["B"], ["D"], ["A"], ["C"], ["C"], ["B"], ["E"], ["B"], ["A"], ["C"], ["E"], ["E"], ["B"], ["E"], ["B"]
			],

			/* amarela */
			"2":
			[
				["C"], ["B", "E"], ["B"], ["E"], ["C"], ["A"], ["E"], ["A"], ["A"], ["A"], ["B"], ["D"], ["E"], ["B"], ["C"],
				["D"], ["C"], ["E"], ["E"], ["E"], ["E"], ["E"], ["C"], ["E"], ["B"], ["D"], ["D"], ["C"], ["C"], ["D"],
				["A"], ["A"], ["D"], ["A"], ["B"], ["E"], ["A"], ["B"], ["E"], ["E"], ["E"], ["D"], ["A"], ["E"], ["C"],
				["C"], ["B"], ["A"], ["B", "E"], ["D"], ["D"], ["A"], ["C"], ["E"], ["E"], ["D"], ["A"], ["B"], ["A"], ["E"],
				["B"], ["E"], ["E"], ["A"], ["E"], ["C"], ["E"], ["A"], ["C"], ["B"], ["D"], ["D"], ["A"], ["B"], ["E"],
				["B"], ["E"], ["B"], ["B"], ["A"], ["C"], ["E"], ["B"], ["E"], ["C"], ["C"], ["C"], ["D"], ["C"], ["D"]
			],

			/* branca */
			"3":
			[
				["A"], ["A"], ["B"], ["D"], ["E"], ["E"], ["E"], ["E"], ["E"], ["A"], ["C"], ["B", "E"], ["B"], ["C"], ["E"],
				["B"], ["E"], ["B"], ["D"], ["D"], ["C"], ["C"], ["D"], ["D"], ["A"], ["E"], ["C"], ["A"], ["B"], ["E"],
				["E"], ["E"], ["C"], ["D"], ["A"], ["C"], ["E"], ["A"], ["D"], ["A"], ["B"], ["E"], ["E"], ["C"], ["A"],
				["E"], ["E"], ["D"], ["A"], ["B"], ["A"], ["E"], ["B"], ["C"], ["B"], ["A"], ["E"], ["E"], ["A"], ["B", "E"],
				["D"], ["C"], ["D"], ["C"], ["D"], ["C"], ["D"], ["D"], ["A"], ["B"], ["E"], ["C"], ["E"], ["E"], ["B"],
				["E"], ["B"], ["A"], ["C"], ["B"], ["B"], ["A"], ["C"], ["E"], ["D"], ["A"], ["B"], ["E"], ["C"], ["C"]
			]
		},
		
		"2":
		{
			/* rosa - inglês */
			"0_0":
			[
				["B"], ["D"], ["B"], ["A"], ["D"], ["A"], ["A"], ["D"], ["A"], ["A"], ["D"], ["A"], ["E"], ["B"], ["A"],
				["B"], ["A"], ["E"], ["B"], ["E"], ["E"], ["D"], ["D"], ["C"], ["A"], ["B"], ["E"], ["E"], ["D"], ["E"],
				["C"], ["D"], ["D"], ["B"], ["A"], ["A"], ["C"], ["B"], ["A"], ["E"], ["A"], ["D"], ["D"], ["E"], ["D"],
				["D"], ["C"], ["C"], ["B"], ["C"], ["A"], ["B"], ["A"], ["E"], ["A"], ["B"], ["E"], ["A"], ["E"], ["E"],
				["E"], ["E"], ["D"], ["E"], ["D"], ["A"], ["A"], ["D"], ["E"], ["D"], ["C"], ["B"], ["D"], ["D"], ["E"],
				["B"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"], ["B"], ["E"], ["D"], ["B"], ["D"], ["B"], ["D"], ["D"]
			],

			/* azul - inglês */
			"1_0":
			[
				["A"], ["D"], ["D"], ["B"], ["B"], ["A"], ["A"], ["C"], ["A"], ["A"], ["A"], ["B"], ["A"], ["A"], ["A"],
				["E"], ["B"], ["E"], ["D"], ["E"], ["A"], ["B"], ["E"], ["D"], ["D"], ["C"], ["E"], ["B"], ["E"], ["E"],
				["A"], ["C"], ["B"], ["C"], ["D"], ["D"], ["B"], ["A"], ["D"], ["E"], ["D"], ["A"], ["D"], ["A"], ["D"],
				["D"], ["E"], ["B"], ["D"], ["D"], ["E"], ["D"], ["A"], ["A"], ["D"], ["E"], ["D"], ["E"], ["A"], ["B"],
				["E"], ["A"], ["E"], ["E"], ["E"], ["E"], ["C"], ["C"], ["C"], ["B"], ["C"], ["A"], ["B"], ["A"], [""],
				["B"], ["D"], ["B"], ["E"], ["D"], ["B"], ["D"], ["B"], ["D"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"]
			],

			/* amarela - inglês */
			"2_0":
			[
				["D"], ["B"], ["B"], ["A"], ["D"], ["A"], ["A"], ["A"], ["E"], ["B"], ["E"], ["B"], ["E"], ["E"], ["A"],
				["D"], ["A"], ["D"], ["A"], ["A"], ["B"], ["D"], ["D"], ["C"], ["E"], ["D"], ["E"], ["C"], ["D"], ["A"],
				["B"], ["E"], ["A"], ["C"], ["B"], ["D"], ["B"], ["A"], ["D"], ["E"], ["D"], ["A"], ["A"], ["C"], ["A"],
				["A"], ["D"], ["E"], ["D"], ["E"], ["A"], ["B"], ["E"], ["E"], ["E"], ["C"], ["C"], ["C"], ["B"], ["D"],
				["E"], ["D"], ["A"], [""], ["B"], ["D"], ["C"], ["A"], ["B"], ["C"], ["D"], ["E"], ["B"], ["D"], ["A"],
				["E"], ["E"], ["D"], ["B"], ["D"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"], ["B"], ["E"], ["D"], ["B"]
			],

			/* cinza - inglês */
			"3_0":
			[
				["A"], ["D"], ["D"], ["B"], ["B"], ["A"], ["A"], ["C"], ["A"], ["E"], ["B"], ["D"], ["D"], ["C"], ["E"],
				["B"], ["E"], ["E"], ["E"], ["D"], ["E"], ["C"], ["D"], ["A"], ["B"], ["E"], ["A"], ["C"], ["B"], ["D"],
				["B"], ["A"], ["A"], ["A"], ["A"], ["D"], ["E"], ["D"], ["A"], ["A"], ["B"], ["A"], ["D"], ["A"], ["D"],
				["E"], ["A"], ["B"], ["E"], ["E"], ["E"], [""], ["B"], ["D"], ["A"], ["D"], ["E"], ["D"], ["C"], ["C"],
				["C"], ["B"], ["D"], ["E"], ["B"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"], ["A"], ["E"], ["E"], ["B"],
				["E"], ["D"], ["B"], ["D"], ["E"], ["D"], ["A"], ["D"], ["B"], ["D"], ["D"], ["C"], ["A"], ["B"], ["A"]
			],
			
			/* rosa - espanhol */
			"0_1":
			[
				["A"], ["D"], ["D"], ["B"], ["B"], ["A"], ["A"], ["D"], ["A"], ["A"], ["D"], ["A"], ["E"], ["B"], ["A"],
				["B"], ["A"], ["E"], ["B"], ["E"], ["E"], ["D"], ["D"], ["C"], ["A"], ["B"], ["E"], ["E"], ["D"], ["E"],
				["C"], ["D"], ["D"], ["B"], ["A"], ["A"], ["C"], ["B"], ["A"], ["E"], ["A"], ["D"], ["D"], ["E"], ["D"],
				["D"], ["C"], ["C"], ["B"], ["C"], ["A"], ["B"], ["A"], ["E"], ["A"], ["B"], ["E"], ["A"], ["E"], ["E"],
				["E"], ["E"], ["D"], ["E"], ["D"], ["A"], ["A"], ["D"], ["E"], ["D"], ["C"], ["B"], ["D"], ["D"], ["E"],
				["B"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"], ["B"], ["E"], ["D"], ["B"], ["D"], ["B"], ["D"], ["D"]
			],

			/* azul - espanhol */
			"1_1":
			[
				["A"], ["D"], ["A"], ["B"], ["C"], ["A"], ["A"], ["C"], ["A"], ["A"], ["A"], ["B"], ["A"], ["A"], ["A"],
				["E"], ["B"], ["E"], ["D"], ["E"], ["A"], ["B"], ["E"], ["D"], ["D"], ["C"], ["E"], ["B"], ["E"], ["E"],
				["A"], ["C"], ["B"], ["C"], ["D"], ["D"], ["B"], ["A"], ["D"], ["E"], ["D"], ["A"], ["D"], ["A"], ["D"],
				["D"], ["E"], ["B"], ["D"], ["D"], ["E"], ["D"], ["A"], ["A"], ["D"], ["E"], ["D"], ["E"], ["A"], ["B"],
				["E"], ["A"], ["E"], ["E"], ["E"], ["E"], ["C"], ["C"], ["C"], ["B"], ["C"], ["A"], ["B"], ["A"], [""],
				["B"], ["D"], ["B"], ["E"], ["D"], ["B"], ["D"], ["B"], ["D"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"]
			],

			/* amarela - espanhol */
			"2_1":
			[
				["D"], ["D"], ["A"], ["B"], ["B"], ["A"], ["A"], ["A"], ["E"], ["B"], ["E"], ["B"], ["E"], ["E"], ["A"],
				["D"], ["A"], ["D"], ["A"], ["A"], ["B"], ["D"], ["D"], ["C"], ["E"], ["D"], ["E"], ["C"], ["D"], ["A"],
				["B"], ["E"], ["A"], ["C"], ["B"], ["D"], ["B"], ["A"], ["D"], ["E"], ["D"], ["A"], ["A"], ["C"], ["A"],
				["A"], ["D"], ["E"], ["D"], ["E"], ["A"], ["B"], ["E"], ["E"], ["E"], ["C"], ["C"], ["C"], ["B"], ["D"],
				["E"], ["D"], ["A"], [""], ["B"], ["D"], ["C"], ["A"], ["B"], ["C"], ["D"], ["E"], ["B"], ["D"], ["A"],
				["E"], ["E"], ["D"], ["B"], ["D"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"], ["B"], ["E"], ["D"], ["B"]
			],

			/* cinza - espanhol */
			"3_1":
			[
				["A"], ["D"], ["D"], ["B"], ["B"], ["A"], ["A"], ["C"], ["A"], ["E"], ["B"], ["D"], ["D"], ["C"], ["E"],
				["B"], ["E"], ["E"], ["E"], ["D"], ["E"], ["C"], ["D"], ["A"], ["B"], ["E"], ["A"], ["C"], ["B"], ["D"],
				["B"], ["A"], ["A"], ["A"], ["A"], ["D"], ["E"], ["D"], ["A"], ["A"], ["B"], ["A"], ["D"], ["A"], ["D"],
				["E"], ["A"], ["B"], ["E"], ["E"], ["E"], [""], ["B"], ["D"], ["A"], ["D"], ["E"], ["D"], ["C"], ["C"],
				["C"], ["B"], ["D"], ["E"], ["B"], ["D"], ["E"], ["C"], ["D"], ["B"], ["C"], ["A"], ["E"], ["E"], ["B"],
				["E"], ["D"], ["B"], ["D"], ["E"], ["D"], ["A"], ["D"], ["B"], ["D"], ["D"], ["C"], ["A"], ["B"], ["A"]
			]
		}
	};

var s_dia = "1";
var s_cor = 0;
var s_respostas = [];
var s_nrespostas = 0;
var t_language = "0";

$(document).ready(function()
{
	$("button").click(function()
	{
		if($(this).attr("data-option") == "day")
		{
			//setDay($(this).attr("data-value"));
			s_dia = $(this).attr("data-value");

			s_respostas = [];
			s_nrespostas = 0;
			
			$("button", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				$(w).removeClass("btn-success");
				$(w).removeClass("btn-danger");
				$(w).removeClass("active");
			});
			
			updAcertos();
			
			if(s_dia == "2")
			{
				$("#lang").css("display", "block");
				$("#color_3").html("Cinza");
			}
			else
			{
				$("#lang").css("display", "none");
				$("#color_3").html("Branca");
			}
			
			$("td.line", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				var oldNum = parseInt(w.innerHTML);
				if(oldNum > 90)
					$(w).html((oldNum - 90).toString());
				else
					$(w).html((oldNum + 90).toString());
			});
		}
		else if($(this).attr("data-option") == "color")
		{
			//setColor($(this).attr("data-value"));
			s_cor = parseInt($(this).attr("data-value"));

			s_respostas = [];
			s_nrespostas = 0;
			
			$("button", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				$(w).removeClass("btn-success");
				$(w).removeClass("btn-danger");
				$(w).removeClass("active");
			});
			
			updAcertos();

		}
		else if($(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr("data-option") == "gabarito")
		{
			$("button", this.parentNode).each(function(i, w)
			{
				$(w).removeClass("btn-success");
				$(w).removeClass("btn-danger");
			});
			var q_num = parseInt(this.parentNode.parentNode.previousElementSibling.innerHTML);
			if(s_dia == "2")
				q_num = q_num - 90;
			
			var corAdd = "";
			if(s_dia == "2")
				corAdd = "_" + t_language;
				
			var q_res = t_gabaritos[s_dia.toString()][s_cor.toString() + corAdd][q_num - 1];
			
			$(this).addClass("btn-danger");
			for(var i = 0; i < q_res.length; i++)
			{
				if(q_res[i] == this.innerHTML)
				{
					$(this).removeClass("btn-danger");
					$(this).addClass("btn-success");
					break;
				}
			}
			
			if(!s_respostas[q_num.toString()])
				s_nrespostas++;
				
			s_respostas[q_num.toString()] = this.innerHTML;
			updAcertos();
		}
		else if($(this).attr("data-option") == "lang")
		{
			t_language = $(this).attr("data-value");
			$("button", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				var q_num = parseInt(w.parentNode.parentNode.previousElementSibling.innerHTML);
				
				if(q_num <= 95)
				{
					$(w).removeClass("btn-success");
					$(w).removeClass("btn-danger");
					$(w).removeClass("active");
				}
			});
			
			for(var  i = 0; i < 5; i++)
			{
				if(s_respostas[i.toString()] != undefined)
				{
					s_respostas[i.toString()] = undefined;
					s_nrespostas--;
				}
			}
			
			updAcertos();
		}
	});
});

updAcertos = function()
{
	var acertos = 0;
	var erros = 0;
	
	for(var i = 1; i <= 90; i++)
	{
		if(!s_respostas[i.toString()])
			continue;
		
		var q_num = i;
			
		var corAdd = "";
		if(s_dia == "2")
			corAdd = "_" + t_language;
		
		var q_res = t_gabaritos[s_dia.toString()][s_cor.toString() + corAdd][q_num - 1];
		erros++;
		for(var j = 0; j < q_res.length; j++)
		{
			if(q_res[j] == s_respostas[i.toString()])
			{
				erros--;
				acertos++;
				break;
			}
		}	
	}
	
	$("#acertos").html(acertos.toString());
	$("#erros").html(erros.toString());
	$("#media").html(((acertos * 10) / 9).toString().substring(0, 4));
}