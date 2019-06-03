$(document).ready(function(){
    console.log("Up and Running");
    $('form').on('submit',function(){
        let name =$('form #name');
        let phoneNum = $('form #phoneNumber')
        let contacts ={name: name.val(),phoneNumber: phoneNum.val()};

        $.ajax({
            type: 'POST',
            url: '/addContact',
            data: contacts,
            success: function(data){
                
                location.reload();
            }
        });
        return false;
    });
    // $('#searchForm').on('submit',function(){
    //     let name = $('form #findName').text();
    //     let data = {name: name.val()};
    //     $.ajax({
    //         type: 'GET',
    //         url: 'contacts/'+name,
    //         success: function(data){
    //             console.log(data);
    //             location.reload();
    //         }
    //     });
    // });
    $('#')

});

// let request = new XMLHttpRequest();
// request.open('GET','/contacts/Gold');
// request.onload=function(){
//  console.log(request.responseText);
// }
// request.send()