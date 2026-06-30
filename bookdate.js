document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const singleDate = document.getElementById('singleDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

  
    const dateData = {
        bookingType: singleDate ? "single_day" : "multi_day",
        targetDate: singleDate || null,
        timeFrame: {
            start: startTime || null,
            end: endTime || null
        },
        dateRange: {
            start: startDate || null,
            end: endDate || null
        },
        timestamp: new Date().toISOString() 
    };

    
    const jsonPayload = JSON.stringify(dateData, null, 2);

   
    console.log("JSON Data Created successfully:\n", jsonPayload);

   
    let logMessage = `<p class="font-bold border-b pb-1 mb-2">Form Data Collected:</p>`;
    logMessage += `<p><strong>Target Date:</strong> ${singleDate || 'Not set'}</p>`;
    logMessage += `<p><strong>Time Frame:</strong> ${startTime || '--:--'} to ${endTime || '--:--'}</p>`;
    logMessage += `<p><strong>Date Range:</strong> ${startDate || 'Not set'} to ${endDate || 'Not set'}</p>`;
    
 
    const resultBox = document.getElementById('resultBox');
    if (resultBox) {
        resultBox.innerHTML = logMessage;
        resultBox.classList.remove('hidden');
    }
});