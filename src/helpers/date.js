export default function date(timestamp){
    let data = new Date(timestamp);
    let newdate = "";
    newdate+=data.getDate()+"/";
    newdate+=data.getMonth()+"/";
    newdate+=data.getFullYear();
    return newdate;
}