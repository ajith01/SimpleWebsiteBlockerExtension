import {addDynamicBlockRules, removeDynamicBlockRule} from './DynamicRuleUtils.js'

document.addEventListener('DOMContentLoaded', function() {
    var unblockButton = document.getElementById('unblock-btn');
    unblockButton.addEventListener('click', function() {
        var section = document.getElementById('unblock-section');
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
        unblockButton.style.display = section.style.display === 'block' ? 'none' : 'block'
    });

    var submitUnblockButton = document.getElementById('submit-unblock');
    

    submitUnblockButton.addEventListener('click', function() {
        const timeRequestedTextBox = document.getElementById('time_requested');
        const reasonTextBox = document.getElementById('reason');
        
        var time_requested_val = timeRequestedTextBox.value;

        chrome.runtime.sendMessage({command: "StartTimerToAddMessager", delayValue: time_requested_val}, function(response) {
            console.log(response.status);
          });
        

        console.log("this block  ran ------ 4")
        
    })
});
