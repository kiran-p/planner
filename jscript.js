     $(document).ready(function(){
            $(".imageList").click(function(){
                console.log($(this));
                $(this).toggleClass('selected');
                $('.list .selected').clone().appendTo('.collect');
            });
            $('.collect .selected').click(function(){
                console.log('dad');
                $(this).remove();
            })
        });