'use strict';

$(document).ready(function(){

  $('#addEmployeeForm').submit(function(){

    $.post('/addzUi', {
      id: $('#id').val(),
      name: $('#name').val(),
      email: $('#email').val()
    });

    return false;
  });

});

