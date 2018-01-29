	var fsize = 80;
	
	function drawText(){
		var textstring = $( "#fptext" ).val();
		var n = textstring.length;
		
		if (n == 0){
			textstring = "abcdefghijklmnopqrstuvwxyzABCDE";
			n = 2;
		}
		
		var fstring = 'preview.php?text='+textstring+'&fsize='+fsize;
		if (n >= 1){
			$("#fpi").attr('src', fstring);
		}
	}
	
	function removeActives(){
		 $('.s20').removeClass('active');
		 $('.s40').removeClass('active');
		 $('.s60').removeClass('active');
		 $('.s80').removeClass('active');
	}

$(document).ready(
	function()
	{
		
		$(".printer").click(function()
			{
				window.print();
				return false;
			}
		);
		
		
		
		
		$( "#fptext" ).keyup(function() {
			drawText();
			return false;
		});
		
		
		$('.s40').on('click', function() {
		   fsize = 40;
		   drawText();
		   removeActives();
		   $(this).addClass('active');
		   $(this).blur()
		   return false;
		});
		
		$('.s60').on('click', function() {
		   fsize = 60;
		   drawText();
		   removeActives();
		   $(this).addClass('active');
		   $(this).blur()
		   return false;
		});
		
		$('.s80').on('click', function() {
		   fsize = 80;
		   drawText();
		   removeActives();
		   $(this).addClass('active');
		   $(this).blur()
		   return false;
		});
		
		$('.s20').on('click', function() {
		   fsize = 20;
		   drawText();
		   removeActives();
		   $(this).addClass('active');
		   $(this).blur()
		   return false;
		});
		
		
		
		$('.download-mg').on('click', function() {
		  ga('send', 'event', 'Download', 'click');
		});
		
		$('.purchase-mg').on('click', function() {
		  ga('send', 'event', 'Purchase', 'click');
		});
		
		$('.view-ai').on('click', function() {
		  ga('send', 'event', 'View AI', 'click');
		});
		
		$('.view-psd').on('click', function() {
		  ga('send', 'event', 'View PSD', 'click');
		});
	
	}
);