<meta charset="utf-8">
<?
$con=mysql_connect("localhost","root","") or die("Connexion impossible");
$db=mysql_select_db("bd2017");
$cin=$_POST['cin'];
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$tel=$_POST['tel'];
$article=$_POST['article'];
$prixpropose=$_POST['prixpropose'];
$req1=mysql_query("select prixbas  from Article where code='$article'");
$res1=mysql_fetch_array($req1);
$pb=$res1[0];
if($prixpropose<$pb){
	echo "Offre rejetée";
}
else
{
	$req2=mysql_query("select 1  from client where cin='$cin'");
	$res2=mysql_num_rows($req1);
	if($res2){//client existe
		$req3=mysql_query("select 1  from offre where cin='$cin' and code='$article'");
	if(mysql_num_rows($req3))
		{//update
			$update=mysql_query("
				update offre 
				set prixpropose='$prixpropose' 
				where cin='$cin' and code='$article'
				");
			echo"Mise à jour faite avec succés";
}else
{//insert
$insert1=mysql_query("insert into offre  values('$cin','$article','$prixpropose')");
echo "Nouvelle Offre enregistrée";
}
}
else
{//client n'existe pas 
$insert2=mysql_query("insert into client  values('$cin','$nom','$prenom','$tel')");
$insert3=mysql_query("insert into offre  values('$cin','$article','$prixpropose')");
echo "Offre enregistrée pour ce nouveau Client";
}
}