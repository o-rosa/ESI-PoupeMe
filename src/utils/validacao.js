export function VerificaCampo(campo){
    if(campo != "") return true
    else return false
}
export function VerificaPerfil(userPoints){
    if(userPoints >= 4 && userPoints <= 7) return'Conservador';
    else if(userPoints <= 11) return'Moderado';
    else if(userPoints <= 16) return'Agressivo';

}

