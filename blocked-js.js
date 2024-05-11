document.addEventListener('DOMContentLoaded', function() {
    var unblockButton = document.getElementById('unblock-btn');
    unblockButton.addEventListener('click', function() {
        var section = document.getElementById('unblock-section');
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
        unblockButton.style.display = section.style.display === 'block' ? 'none' : 'block'
    });

    var submitUnblockButton = document.getElementById('submit-unblock');
    

    submitUnblockButton.addEventListener('click', function() {
        
    })
});
