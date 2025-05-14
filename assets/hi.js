let ad = prompt('Adiniz: ');
let soyad = prompt('Soyadiniz: ');
let yas = Number(prompt('Yasiniz: '));
let cinsiyet = prompt('Cinsiyetiniz: ');

if(
    yas > 18 &&  cinsiyet == 'Erkek' 
)
{
    alert('Askerlik zamaniniz gelmistir. Luten en yakin subeye basvurunuz.');
}

else if (
    yas > 18 &&  cinsiyet == 'Kadin' 
)
{
    alert('Askerlikten muafsiniz.');
}

else if (
    yas <= 18 &&  cinsiyet == 'Erkek' 
)
{
    alert('Askerlikten yasiniz daha gelmemistir.');
}
