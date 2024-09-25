// Smooth scroll blocking
document.addEventListener( 'DOMContentLoaded', function() {
	if ( 'onwheel' in document ) {
		window.onwheel = function( event ) {
			if( typeof( this.RDSmoothScroll ) !== undefined ) {
				try { window.removeEventListener( 'DOMMouseScroll', this.RDSmoothScroll.prototype.onWheel ); } catch( error ) {}
				event.stopPropagation();
			}
		};
	} else if ( 'onmousewheel' in document ) {
		window.onmousewheel= function( event ) {
			if( typeof( this.RDSmoothScroll ) !== undefined ) {
				try { window.removeEventListener( 'onmousewheel', this.RDSmoothScroll.prototype.onWheel ); } catch( error ) {}
				event.stopPropagation();
			}
		};
	}

	try { $('body').unmousewheel(); } catch( error ) {}
});

$(document).ready(function() {
	var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	   month=['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
   SetData();
   function SetData() {
	   var now = new Date();
	   $('.date').html(day[now.getDay()]+', ');
	   $('.date').append(' '+month[now.getMonth()]+' ');
	   $('.date').append(now.getDate()+', ');
	   $('.date').append(now.getFullYear()+' &nbsp; &nbsp; ');
	   hour=now.getHours();
	   minutes=now.getMinutes();
	   if (minutes<10) {minutes='0'+minutes};
	   $('.date').append(hour+':'+minutes);
	}
  	setInterval(SetData,60);

});