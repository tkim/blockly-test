/**
 * Blockly Apps: Turtle Graphics Blocks
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Blockly's Turtle Graphics application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

// Extensions to Blockly's language and JavaScript generator.

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.Blocks['draw_move'] = {
  // Block for moving forward or backwards.
  init: function() {
    var DIRECTIONS =
        [[BlocklyApps.getMsg('Turtle_moveForward'), 'moveForward'],
         [BlocklyApps.getMsg('Turtle_moveBackward'), 'moveBackward']];
    this.setColour(160);
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendTitle(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_moveTooltip'));
  }
};

Blockly.JavaScript['draw_move'] = function() {
  // Generate JavaScript for moving forward or backwards.
  var value = Blockly.JavaScript.valueToCode(this, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'block_id_' + this.id + '\');\n';
};


Blockly.Blocks['draw_turn'] = {
  // Block for turning left or right.
  init: function() {
    var DIRECTIONS =
        [[BlocklyApps.getMsg('Turtle_turnRight'), 'turnRight'],
         [BlocklyApps.getMsg('Turtle_turnLeft'), 'turnLeft']];
    this.setColour(160);
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendTitle(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_turnTooltip'));
  }
};

Blockly.JavaScript['draw_turn'] = function() {
  // Generate JavaScript for turning left or right.
  var value = Blockly.JavaScript.valueToCode(this, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Blocks['draw_width'] = {
  // Block for setting the width.
  init: function() {
    this.setColour(160);
    this.appendValueInput('WIDTH')
        .setCheck('Number')
        .appendTitle(BlocklyApps.getMsg('Turtle_setWidth'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_widthTooltip'));
  }
};

Blockly.JavaScript['draw_width'] = function() {
  // Generate JavaScript for setting the width.
  var width = Blockly.JavaScript.valueToCode(this, 'WIDTH',
      Blockly.JavaScript.ORDER_NONE) || '1';
  return 'Turtle.penWidth(' + width + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Blocks['draw_pen'] = {
  // Block for pen up/down.
  init: function() {
    var STATE =
        [[BlocklyApps.getMsg('Turtle_penUp'), 'penUp'],
         [BlocklyApps.getMsg('Turtle_penDown'), 'penDown']];
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(STATE), 'PEN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_penTooltip'));
  }
};

Blockly.JavaScript['draw_pen'] = function() {
  // Generate JavaScript for pen up/down.
  return 'Turtle.' + this.getTitleValue('PEN') +
      '(\'block_id_' + this.id + '\');\n';
};

Blockly.Blocks['draw_colour'] = {
  // Block for setting the colour.
  init: function() {
    this.setColour(20);
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendTitle(BlocklyApps.getMsg('Turtle_setColour'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_colourTooltip'));
  }
};

Blockly.JavaScript['draw_colour'] = function() {
  // Generate JavaScript for setting the colour.
  var colour = Blockly.JavaScript.valueToCode(this, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'Turtle.penColour(' + colour + ', \'block_id_' +
      this.id + '\');\n';
};

Blockly.Blocks['turtle_visibility'] = {
  // Block for changing turtle visiblity.
  init: function() {
    var STATE =
        [[BlocklyApps.getMsg('Turtle_hideTurtle'), 'hideTurtle'],
         [BlocklyApps.getMsg('Turtle_showTurtle'), 'showTurtle']];
    this.setColour(160);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(STATE), 'VISIBILITY');
    this.setTooltip(BlocklyApps.getMsg('Turtle_turtleVisibilityTooltip'));
  }
};

Blockly.JavaScript['turtle_visibility'] = function() {
  // Generate JavaScript for changing turtle visibility.
  return 'Turtle.' + this.getTitleValue('VISIBILITY') +
      '(\'block_id_' + this.id + '\');\n';
};

Blockly.Blocks['draw_print'] = {
  // Block for printing text.
  init: function() {
    this.setHelpUrl(BlocklyApps.getMsg('Turtle_printHelpUrl'));
    this.setColour(160);
    this.appendValueInput('TEXT')
        .appendTitle(BlocklyApps.getMsg('Turtle_print'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_printTooltip'));
  }
};

Blockly.JavaScript['draw_print'] = function() {
  // Generate JavaScript for printing text.
  var argument0 = String(Blockly.JavaScript.valueToCode(this, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'');
  return 'Turtle.drawPrint(' + argument0 + ', \'block_id_' +
      this.id + '\');\n';
};

Blockly.Blocks['draw_font'] = {
  // Block for setting the font.
  init: function() {
    var FONTLIST = // Common font names (intentionally not localized)
        [['Arial', 'Arial'], ['Courier New', 'Courier New'], ['Georgia', 'Georgia'],
         ['Impact', 'Impact'], ['Times New Roman', 'Times New Roman'],
         ['Trebuchet MS', 'Trebuchet MS'], ['Verdana', 'Verdana']];
    var STYLE =
        [[BlocklyApps.getMsg('Turtle_fontNormal'), 'normal'],
         [BlocklyApps.getMsg('Turtle_fontItalic'), 'italic'],
         [BlocklyApps.getMsg('Turtle_fontBold'), 'bold']];
    this.setHelpUrl(BlocklyApps.getMsg('Turtle_fontHelpUrl'));
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Turtle_font'))
        .appendTitle(new Blockly.FieldDropdown(FONTLIST), 'FONT');
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Turtle_fontSize'))
        .appendTitle(new Blockly.FieldTextInput('18',
                     Blockly.FieldTextInput.nonnegativeIntegerValidator),
                     'FONTSIZE');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(STYLE), 'FONTSTYLE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Turtle_fontTooltip'));
  }
};

Blockly.JavaScript['draw_font'] = function() {
  // Generate JavaScript for setting the font.
  return 'Turtle.drawFont(\'' + this.getTitleValue('FONT') + '\',' +
      Number(this.getTitleValue('FONTSIZE')) + ',\'' +
      this.getTitleValue('FONTSTYLE') + '\', \'block_id_' +
      this.id + '\');\n';
};
