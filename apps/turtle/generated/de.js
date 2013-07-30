// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="moveForward">laufe vorwärts um x Pixel</span><span id="moveBackward">laufe zurück um x Pixel</span><span id="turnRight">drehe rechts herum, um x Grad</span><span id="turnLeft">drehe links herum, um x Grad</span><span id="setWidth">setze die Linienbreite auf</span><span id="setColour">ändere die Farbe in</span><span id="penUp">Zeichnen an</span><span id="penDown">Zeichnen aus</span><span id="hideTurtle">unsichtbar Schildkröte</span><span id="showTurtle">sichtbar Schildkröte</span><span id="print">print</span><span id="font">font</span><span id="fontSize">size</span><span id="fontNormal">normal</span><span id="fontBold">bold</span><span id="fontItalic">italic</span><span id="moveTooltip">Bewege die Schildkröte um angebenden Wert \\nvorwärts oder rückwärts. </span><span id="turnTooltip">Dreht die Schildkröte um den angebenden Gradwert \\nnach rechts oder links. </span><span id="widthTooltip">Ändere die Breite des Stiftes. </span><span id="penTooltip">De/aktiviert den Stift. Die Schildkröte zeichnet \\nnur mit aktiven Stift eine Linie. </span><span id="colourTooltip">Ändere die Farbe des Stiftes.</span><span id="turtleVisibilityTooltip">Makes the turtle (green circle and arrow) \\nvisible or invisible. </span><span id="printTooltip">Draws text in the turtle\'s direction at its \\nlocation. </span><span id="fontTooltip">Sets the font used by the print block.</span><span id="codeTooltip">Erzeugten JavaScript Code anzeigen.</span><span id="printHelpUrl">http://en.wikipedia.org/wiki/Printing</span><span id="fontHelpUrl">http://en.wikipedia.org/wiki/Font</span><span id="unloadWarning">Ihre Arbeit geht verloren, wenn Sie diese Seite verlassen.</span></div><div id="COMMON_MSG" style="display: none"><span id="httpRequestError">Es gab ein Problem während der HTTP Anfrage.</span><span id="linkAlert">Blöcke mit diesem Link teilen:\n\n%1</span><span id="hashError">Entschuldigung, konnte die gespeicherten Blöcke für \'%1\' nicht finden.</span><span id="xmlError">Kann Sicherungsdatei nicht laden.  Diese wurde vermutlich mit einer veralteten Version von Blockly erstellt?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Die zeichnende Schildkröte</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="launch" onclick="Turtle.runButtonClick();"><img src="../../media/1x1.gif" class="run icon21">Programm ausführen</button><button id="resetButton" class="launch" onclick="Turtle.resetButtonClick();" style="display: none"><img src="../../media/1x1.gif" class="stop icon21">Zurücksetzen</button></td></tr></table><div id="toolbarDiv"><button title="Erzeugten JavaScript Code anzeigen." onclick="BlocklyApps.showCode();"><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" title="Blöcke abspeichern und Link erzeugen." onclick="BlocklyStorage.link();"><img src=\'../../media/1x1.gif\' class="link icon21"></button><button id="captureButton" title="Save the drawing." onclick="Turtle.createImageLink();"><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="drawing.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Schildkröte"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="Farben"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Logik"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Mathe"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Listen"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block></category><category name="Variablen" custom="VARIABLE"></category><category name="Funktionen" custom="PROCEDURE"></category></xml>';
};
