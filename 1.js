function terimainput() {
	var namadepan=document.forms['register']['namadepan'].value;
	var namabelakang=document.forms['register']['namabelakang'].value;
	var jeniskelamin=document.forms['register']['jeniskelamin'].value;
	var email=document.forms['register']['email'].value;
	var username=document.forms['register']['username'].value;
	var password=document.forms['register']['password'].value;
	

	var tabel = document.getElementById("tabelinput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	cell1.innerHTML = namadepan;
	cell2.innerHTML = namabelakang;
	cell3.innerHTML = jeniskelamin;
	cell4.innerHTML = email;
	cell5.innerHTML = username;
	cell6.innerHTML = password;

	alert("Data berhasil di entry");
}