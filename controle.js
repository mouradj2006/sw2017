//fonction qui verifie si une chaine est alphabetique
function Alphabetique (ch){
i=0;
ch=ch.toUpperCase();
while(i<ch.length)
{
	if(ch[i]!=' ')
	if((ch[i]>'Z') ||(ch[i]<'A')) 
		return false;	
	i++;
}
return true;
}
//code la fonction verif 
function verif() {
	cin=document.f.cin.value;
	nom=document.f.nom.value;
	prenom=document.f.prenom.value;
	tel=document.f.tel.value;
	indice=document.f.article.selectedIndex;
	prixpropose=Number(document.f.prixpropose.value);
	// validation CIN
	if((cin.length !=8)||(isNaN(cin))||(Number(cin[0])>1)){
		alert('Cin Invalide,Il faut 8 chiffres dont le premier est 1 ou 0');
		return false;
	}
	//validation Nom
	else if((nom.length>30)||(nom.length<3)||(!Alphabetique(nom))){
		alert('Nom Invalide,Il faut entre 3 et 30 lettres');
		return false;
	}
	//validation PréNom
	else if((prenom.length>30)||(prenom.length<3)||(!Alphabetique(prenom))){
		alert('Prénom Invalide,Il faut entre 3 et 30 lettres');
		return false;
	}
	//validation Tel
	else if((tel.length !=8)||(isNaN(tel))||(Number(tel[0])==0)){
		alert('Tel Invalide,Il faut 8 chiffres dont le premier est différent de 0');
		return false;
	}
	//validation Article
	else if(indice==0){
		alert("La sélection d'un Article est Obligatoire");
		return false;
	}
	//validation Prix Proposé
	else if(prixpropose<=0){
		alert("Prix Invalide, Il faut un entier >0");
		return false;
	}

}
function espace(){
	ch=document.f.ch.value;
	while(ch.indexOf('  ')!=-1) ch=ch.replace('  ',' ');
	if(ch.charAt(0)==' ') ch=ch.substr(1,ch.length);
	if(ch.charAt(ch.length-1)==' ') ch=ch.substr(0,ch.length-1);
	
	alert(ch) ;
}
