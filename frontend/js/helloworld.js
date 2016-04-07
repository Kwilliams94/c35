'use strict';

$(document).ready(function(){

  $('#addTrainForm').submit(function(){

    $.post('/addTrain', {
      nameOfTrain: $('#nameOfTrain').val(),
      inService: $('#inService').is(':checked'),
      availableTrains: $('#availableTrains').val()
    });

    return false;
  });

});

  
