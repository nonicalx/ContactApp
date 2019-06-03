$(document).ready(()=>{
    console.log('up and Running');
    $('form #searchForm').on('submit',()=>{
        let name = $('form #searchName');
        //let contacts ={name: name.val()};
        $.ajax({
            type: 'POST',
            url: '/contacts/search',
            data: name,
            success: function(data){
                
                location.reload();
            }
        });
        return false;
    });
});