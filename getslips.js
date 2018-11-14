const monthsList = document.querySelectorAll('.treeviewNode a');

const downloadSlip = onReady => {
    const downloadLink = document.getElementById('btnDownloadPDF');
    if (downloadLink) {
        downloadLink.click();
        setTimeout(() => {
            document.querySelector('.popupCloseButton').click();
            if (onReady) {
                onReady();
            }
        }, 5000);
    }
    else {
        setTimeout(() => downloadSlip(onReady), 5000);
    }
}

const getMonthSlip = (monthNode, onReady) => {
    monthNode.click();
    setTimeout(() => downloadSlip(onReady), 5000);
}


const getMonthSlipById = i => {
    const onReady = i < monthsList.length - 1 ? () => {
        getMonthSlipById(i+1, onReady);
    } : null;

    console.log('downloading month', i);
    getMonthSlip(monthsList[i], onReady);
}

console.log('total months', monthsList.length);
getMonthSlipById(0);
