console.log("Hi");

// Feni Donation 
function donationMulti(id) {
    // Get Value Of fields
    const inputBox2 = document.getElementById('inputBox2').value;
    const convertInputNum2 = parseFloat(inputBox2);
    const feniDonationBalance = document.getElementById('feniDonationBalance').innerText;
    const convertDonationNum2 = parseFloat(feniDonationBalance);
    // Checking Input BoX Balance 
    const mainBalance2 = document.getElementById('mainBalance').innerText;
    const convertMainBalance2 = parseFloat(mainBalance2);
    if (isNaN(convertInputNum2)) {
        alert('Something Went Wrong');
        document.getElementById('inputBox2').value = '';
        return;
    }
    else {
        if (convertInputNum2 < 0) {
            alert('Something Went Wrong');
            return;
        }
        else {
            if (convertInputNum2 > convertMainBalance2) {
                alert('Not Enough Balance');
                return;
            }
        };
    };
    // Update Donations Balance 
    const newUpdateDonation = convertDonationNum2 + convertInputNum2;
    document.getElementById("feniDonationBalance").innerText = newUpdateDonation;
    my_modal_1.showModal()
    // Update Main Balance 
    document.getElementById('mainBalance').innerText = mainBalance2 - convertInputNum2;
    document.getElementById('inputBox2').value = '';
    // Update to Transitions 
    const donateTitle = document.getElementById('feniTitle').innerText;
    const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded');
    div.classList.add('py-4');
    div.classList.add('px-4');
    div.innerHTML = `
        <h3> ${convertInputNum2} Taka Donated to ${donateTitle}</h3>
        <p>Date :- 10.30 PM , 15 April 2025</p>
    `
    document.getElementById('historyContainer').appendChild(div);

};


// toggler 
function myToggler(id) {
    // Hide All Sections
    const dontateArea = document.getElementById('donateArea').classList.add('hidden');
    const historyArea = document.getElementById('historyArea').classList.add('hidden');
    // Show Selected Section
    const sectionToShow = document.getElementById(id).classList.remove('hidden');
    // //Remove All Button Color  
    // const dontateArea2 = document.getElementById('showDonateBtn').classList.remove('bg-[#B4F461]');
    // const historyArea2 = document.getElementById('showHistoryBtn').classList.remove('bg-[#B4F461]');
    // // Add Button Color Change 
    // const chagneColor = document.getElementById(id).classList.add('bg-[#B4F461]');
};

