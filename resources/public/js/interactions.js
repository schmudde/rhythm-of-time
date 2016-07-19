var deviceName = "sequencer";
var element = document.getElementById( 'sequencer-row' );

function slideDown( elem ) {
    elem.style.maxHeight = '800px';
    elem.style.opacity   = '1';
}

function slideUp( elem )
{
    elem.style.maxHeight = '0';
    once( 0.35, function () {
              elem.style.opacity = '0';
          } );
}

function once( seconds, callback )
/* Execute once after the specified interval */
{
    var counter = 0;
    var time = window.setInterval(
        function () {
            counter++;
            if ( counter >= seconds )
            {
                callback();
                window.clearInterval( time );
            }
        }, 1000 );
}

/* Credit to:  https://dashingquill.wordpress.com/2011/08/16/javascript-and-css3-only-sliding-updown-transition-effects/ */

function startSketch() {
    rhythm_of_time.quil_js_api.start_loop(deviceName);
}

function stopSketch() {
    rhythm_of_time.quil_js_api.stop_loop(deviceName);
    rhythm_of_time.quil_js_api.reset_state(deviceName);
}

function resetSequencer() {
    rhythm_of_time.quil_js_api.reset_state(deviceName);
}

function turnPage() {
    stopSketch();
    rhythm_of_time.quil_js_api.hide_canvas_controls(deviceName);
    slideUp(element)    /* hide */
}

function turnBack() {
    rhythm_of_time.quil_js_api.hide_canvas_controls(deviceName);
    slideDown(element); /* show */
}

    slideDown(element); /* show */
