$(".counter .counterIncrease").click(function () {
  let counterValue = $(this).prev(".counterValue").val()
  counterValue++
  $(this).prev(".counterValue").val(counterValue)
})

$(".counter .counterDecrease").click(function () {
  let counterValue = $(this).next(".counterValue").val()
  if (counterValue <= 0) {
    alert("Değer 0 dan küçük olamaz")
    counterValue = 0
  } else {
    counterValue--
  }
  $(this).next(".counterValue").val(counterValue)
})

$(window).resize(function () {
  $(".select2.select2-container.select2-container--default").css("width", "100%")
})

$('.listing-group span').click(function (){
  type = $(this).data('type');
  $('.listing-group span').removeClass('active');
  $(this).addClass('active');
  if(type=='grid'){
    $('#item-list').removeClass('list-list');
    $('#item-list').removeClass('list-table');
    $('#item-list').addClass('grid-list');
  }else if (type=='list'){
    $('#item-list').addClass('list-list');
    $('#item-list').removeClass('list-table');
    $('#item-list').removeClass('grid-list');
  }else{
    $('#item-list').removeClass('list-list');
    $('#item-list').addClass('list-table');
    $('#item-list').removeClass('grid-list');
  }

});

$(document).ready(function () {
  let chooseSelectBoxes = $("#choose select")

  $(chooseSelectBoxes).each((i, select) => {
    $(select).change(function () {
      if ($(this).val() !== '' && $(this).val() !== '#') {
        $(this).next().next("select").attr("disabled", false)
      } else {
        $(this).nextAll("select").attr("disabled", true)
      }
    })
  })
})