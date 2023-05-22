import getXhr from "./utilities.js";
import {populateEtudiantTable,populateEtudiantForme,populateEtudiantRow} from "./EtudiantHelpers.js";

//variable globale pour determiner si on a une action d'ajout au modification
let action = "ajouter";

let form = document.getElementById("formulaire");
form.addEventListener("submit", function(e){
    if(action == "modify") {
        updateEtudiant(e);

    }
    if(action == "ajouter") {
        addEtudiant(e);
    }
    
});

function addEtudiant(e) {
    e.preventDefault();
    let xhr = getXhr();
    xhr.open("POST","../../controllers/EtudiantController.php",true);
    xhr.addEventListener("readystatechange",function(){
        console.log(xhr.readyState+' '+xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = xhr.responseText;
            if(res == "ok"){
                document.getElementById("succes").hidden = false;
                document.getElementById("succes").innerHTML= "Insertion effectuée avec succes";
                setTimeout(function() {
                    document.getElementById("succes").hidden = true;  
                },5000);
                
            }
            else{
                document.getElementById("failed").hidden = false;
                document.getElementById("succes").innerHTML= "Insertion échouée";
                setTimeout(function() {
                    document.getElementById("failed").hidden = true;  
                },5000);
            }
        }
        // else{

        // }
        listAllEtudiants();
    });

    let data = new FormData(form);
    data.append("action","ajouter");
    xhr.send(data)
    
}


//lister les étudiants
function listAllEtudiants() {
    let xhr = getXhr();
    xhr.open("POST","../../controllers/EtudiantController.php",true);
    xhr.addEventListener("readystatechange",function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = xhr.responseText;
            let obj = JSON.parse(res);
            document.getElementById("listStudent").innerHTML = populateEtudiantTable(obj).rows;
            let tab_ids = populateEtudiantTable(obj).tab_ids
            for (let i = 0; i < tab_ids.length; i++) {
                let btnDelete = document.getElementById("delete"+(tab_ids[i]));
                let btnModify = document.getElementById("modify"+(tab_ids[i]));
                btnDelete.addEventListener("click",deleteStudent);
                btnModify.addEventListener("click", function(e){
                    action = "modify";
                    populateEtudiantForme(e);
                    console.log(document.getElementById("id").value);
                });
            }
        }
    });
    let data = new FormData();
    data.append("action","afficherTous");
    xhr.send(data);
    
}
listAllEtudiants();

//Suppression d'un etudiant
function deleteStudent(e) {
    let id_attribut = e.target.id;
    var id_student = parseInt(id_attribut.match(/\d+$/)[0]);
    console.log(id_student);
    let xhr = getXhr();
    xhr.open("POST","../../controllers/EtudiantController.php",true);
    xhr.addEventListener("readystatechange",function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = xhr.responseText;
            if(res == "ok"){
                document.getElementById("succes").hidden = false;
                document.getElementById("succes").innerHTML= "Suppression effectuée avec succes";
                setTimeout(function() {
                    document.getElementById("succes").hidden = true;  
                },5000);
            }
            else{
            document.getElementById("failed").hidden = false;
                document.getElementById("succes").innerHTML= "Suppression échouée";
                setTimeout(function() {
                    document.getElementById("failed").hidden = true;  
                },5000);
        } }
        // else{

        // }
        listAllEtudiants();
        
    });
    let data = new FormData();
    data.append("action","supprimer");
    data.append("id",id_student);
    xhr.send(data);
}

//mettre à jour un étudiant

function updateEtudiant(e) {
    e.preventDefault();
    //ajax
    let xhr = getXhr();
    xhr.open("POST","../../controllers/EtudiantController.php",true);
    xhr.addEventListener("readystatechange",function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
        let res = xhr.responseText;
        console.log(res);
        if(res == "ok"){
            console.log('srrd');
            document.getElementById("succes").hidden = false;
            document.getElementById("succes").innerHTML= "Mise à jour effectuée avec succes";
            setTimeout(function() {
                document.getElementById("succes").hidden = true;  
            },5000);
           listAllEtudiants();
        }
        else{
            document.getElementById("failed").hidden = false;
            document.getElementById("succes").innerHTML= "Mise à jour échouée";
            setTimeout(function() {
                document.getElementById("failed").hidden = true;  
            },5000);
        }  
    }
       
    });
    let id = document.getElementById("id").value;
    let nom = document.getElementById("nom").value;
    let prenom= document.getElementById("prenom").value ;
    let adresse= document.getElementById("Address").value;
    let tele= document.getElementById("telephone").value  ;
    let email=document.getElementById("email").value ;
    let mdp=document.getElementById("mdp").value ;
    let data = new FormData();
    data.append("id",id);
    data.append("nom",nom);
    data.append("prenom",prenom);
    data.append("adresse",adresse);
    data.append("telephone",tele);
    data.append("email",email);
    data.append("mot_de_passe",mdp);
    data.append("action","modifier");
    xhr.send(data);
   
}


