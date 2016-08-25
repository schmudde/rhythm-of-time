# Rhythm of Time

Music step sequencer for web browsers.

## Overview

This is a simple two track step sequencer to help introduce people to the idea of electronic music sequencing. To those ends, the user is provided with melody, timbre, and tempo variations.

## Setup

### To create a production build:

    lein do clean, lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

### To get an interactive development environment:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

## License

"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"
