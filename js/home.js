console.log('Hello World');
// Home Page Link
document.getElementById('blogPage').addEventListener('click', function(){
    window.location.href = "/blog.html";
});
// Noakhali Donation Here
document.getElementById('donateBtn1').addEventListener('click', function(){
    // Get Value Of fields
    const inputBox = document.getElementById('inputBox').value;
    const convertInputNum = parseFloat(inputBox);
    const donationBalance = document.getElementById('donationBalance').innerText;
    const convertDonationNum = parseFloat(donationBalance);
    const mainBalance = document.getElementById('mainBalance').innerText;
    const convertMainBalance = parseFloat(mainBalance) ;
    // Checking Input Field
    if (isNaN(convertInputNum)) {
        alert('Something Went Wrong');
        document.getElementById('inputBox').value = '';
        return;
    }
    else{
        if (convertInputNum < 0) {
            alert('Something Went Wrong');
            return;
        }
        else {
            if (convertInputNum > convertMainBalance) {
                alert('Not Enough Balance');
                return;
            }
        };
    };
    // Update Donations Balance 
    const newUpdateDonation = convertDonationNum + convertInputNum ;
    document.getElementById("donationBalance").innerText = newUpdateDonation;
    my_modal_1.showModal()
    // Update Main Balance
    document.getElementById('mainBalance').innerText = mainBalance - convertInputNum;
    document.getElementById('inputBox').value = '';
    // Update to Transition History 
    const noakhaliTitle = document.getElementById('noakhaliTitle').innerText;
    const div = document.createElement('div');
    div.classList.add('border')
    div.classList.add('rounded')
    div.classList.add('py-4')
    div.classList.add('px-4')
    div.innerHTML = `
     <h3> ${convertInputNum} Taka Donated to ${noakhaliTitle}</h3>
    <p>Date :- 10.30 PM , 15 April 2025</p>
    `
    document.getElementById('historyContainer').appendChild(div);
});


// Feni Donation 
document.getElementById('donateBtn2').addEventListener('click', function(){
    donationMulti("donateBtn2");
});


// Quota Donation 
document.getElementById('donateBtn3').addEventListener('click', function(){
    // Getting Value
    const inputBox3 = document.getElementById('inputBox3').value;
    const convertInputBox3 = parseFloat(inputBox3);
    const quotaDonationBalance = document.getElementById('quotaDonationBalance').innerText;
    const convertQuotaDonationBalance = parseFloat(quotaDonationBalance);
    const mainBalance3 = document.getElementById('mainBalance').innerText;
    const convertMainBalance3 = parseFloat(mainBalance3);
    // Checking Input Amount
    if (isNaN(convertInputBox3)) {
        alert('Something Went Wrong');
        document.getElementById('inputBox3').value = '';
        return;
    }
    else{
        if (convertInputBox3 < 0) {
            alert('Something Went Wrong');
            return;
        }
        else {
            if (convertInputBox3 > convertMainBalance3) {
                alert('Not Enough Balance');
                return;
            }
        };
    };
    // update New Balance 
    const newUpdateBalance3 = convertInputBox3 + convertQuotaDonationBalance;
    document.getElementById('quotaDonationBalance').innerText = newUpdateBalance3;
    my_modal_1.showModal()
    // Update Main Balance 
    document.getElementById('mainBalance').innerText = mainBalance3 - convertInputBox3;
    document.getElementById('inputBox3').value = '';
    // Update to Transition History 
    const quotaTitle = document.getElementById('quotaTitle').innerText;
    const div = document.createElement('div');
    div.classList.add('border')
    div.classList.add('rounded')
    div.classList.add('py-4')
    div.classList.add('px-4')
    div.innerHTML = `
     <h3> ${convertInputBox3} Taka Donated to ${quotaTitle}</h3>
    <p>Date :- 10.30 PM , 15 April 2025</p>
    `
    document.getElementById('historyContainer').appendChild(div);
});


// Toggler 
document.getElementById('showDonateBtn').addEventListener('click', function(){
    myToggler('donateArea');
    document.getElementById('showDonateBtn').classList.add('bg-[#B4F461]');
    document.getElementById('showHistoryBtn').classList.remove('bg-[#B4F461]');
    
});

document.getElementById('showHistoryBtn').addEventListener('click', function(){
    myToggler('historyArea');
    document.getElementById('showDonateBtn').classList.remove('bg-[#B4F461]');
    document.getElementById('showHistoryBtn').classList.add('bg-[#B4F461]');
});