//ini javascript External

function validateForm() {
    let nameInput = document.getElementById('name-input');
    
    // kondisi validasinya
    if(nameInput.value == '') {
        alert('Nama tidak boleh kosong')
    } else {
        alert('Welcome ' + nameInput.value)
    }

    let emailInput = document.getElementById('email-input');

    if (emailInput.value == '') {
        alert('Email tidak boleh kosong')
    } else {}

    let locationInput = document.getElementById('loc-inter');

    if (locationInput.value == 'Empty-Dest') {
        alert('Anda  belum memilih lokasi')
    } else {
        alert('Lokasi yang dipilih adalah ' + locationInput.value)
    }
}

// for index indetifier
let indexBanner = 0;

showBanner();

function nextBanner(){
    // Increment indexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');
     
    // reset condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';    
    }

    // show banner
    banner[indexBanner].style.display = 'block';
}

// auto play
setInterval(nextBanner, 3000);