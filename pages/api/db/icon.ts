export const database = ['mysql','pgsql','mongo'];

export function getIconImage(choose: string){
    choose = choose.trim().toLowerCase();
    // if(!database.includes(choose)) return "";
    return `https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_${choose}.svg`
}