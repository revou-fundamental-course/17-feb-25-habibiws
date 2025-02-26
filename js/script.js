//ini javascript

function validateForm(nama) {
    let nameInput = document.getElementById('name-input');
    
    // kondisi validasinya
    if(nameInput.value == '') {
        alert('Nama tidak boleh kosong')
    } else {
        alert('Welcome ' + nameInput.value)
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
        banner[1].style.display = 'none';    
    }

    // show banner
    banner[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);