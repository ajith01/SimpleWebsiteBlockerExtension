import {addDynamicBlockRules} from './DynamicRuleUtils.js'

document.addEventListener('DOMContentLoaded', function () {

  var unblockButton = document.getElementById('block');
  unblockButton.addEventListener('click', addDynamicBlockRules);
});