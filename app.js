//ARAYUZ ELEMENTLERİ SECİMİ
const ad=document.getElementById('ad');
const soyad=document.getElementById('soyad');
const mail=document.getElementById('mail');


const form=document.getElementById('form-rehber');
const kisilistesi=document.querySelector('.kisi-listesi');


//event listenerların tanımlanması
form.addEventListener('submit',kaydet);


const tumkisilerdizisi=[];

function kaydet(e){
    
    e.preventDefault();

    const eklenecekkisi={
        ad:ad.value,
        soyad:soyad.value,
        mail:mail.value
    }

  const sonuc= verilerikontrolet(eklenecekkisi) ;

  if(sonuc.durum){
      kisiyiekle(eklenecekkisi);
     
  }
  else{
      bilgiolustur(sonuc.mesaj,sonuc.durum);
      
  }
   

}


function  verilerikontrolet(kisi){
    for(const deger in kisi){
        if(kisi[deger]){
            console.log(kisi[deger]);
        }
        else{
            const sonuc={
            durum:false,
            mesaj:'boş alan bırakmayınız'}
            return sonuc;
        }
        
    }

    alanlaritemizle();
     return{
     durum: true,
     mesaj:'kayıt edildi'}

}


function bilgiolustur(mesaj,durum){
    const olusturulanBilgi=document.createElement('div');
    olusturulanBilgi.textContent=mesaj;
    olusturulanBilgi.className='bilgi';
    if(durum){
        olusturulanBilgi.classList.add('bilgi--success');

    }
    else{
        olusturulanBilgi.classList.add('bilgi--error');
    }


    document.querySelector('.container').insertBefore(olusturulanBilgi,form);

    setTimeout(function(){
        const silinecekdiv=document.querySelector('.bilgi');
        if(silinecekdiv){
            silinecekdiv.remove();
        }
    },2000);
}


function alanlaritemizle(){
    ad.value='';
    soyad.value='';
    mail.value='';
}



function kisiyiekle(eklenecekkisi){
    const olusturulantr=document.createElement('tr');
    olusturulantr.innerHTML=`<tr>
    <td>${eklenecekkisi.ad}</td>
    <td>${eklenecekkisi.soyad}</td>
    <td>${eklenecekkisi.mail}</td>
    <td>
        <button class="btn btn--edit"> <i class="fas fa-edit"></i></button>
        <button class="btn btn--delete"><i class="fas fa-trash-alt"></i></button>

    </td>`

    kisilistesi.appendChild(olusturulantr);
    tumkisilerdizisi.push(eklenecekkisi);
    bilgiolustur('Kişi rehbere kayıt edildi',true);
}