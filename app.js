document.body.style.border = "5px solid #f8f03f";
var deadLine = new Date('December 05, 2017 21:00:00');
var now =  new Date();
var next = deadLine.getTime() - now.getTime();
if (next <= 2000) {
 window.onload = function() {
  var formToCart = document.querySelector("form.item_to_cart");
  formToCart.submit();
 };
} else {
  if ((next - 2000) > 0 ) {
    next = next - 2000;
  }
  var left_next = next;
  setInterval(function(){
    left_next = left_next - 1000;
    console.log(left_next/1000);
  },1000);

  setTimeout(function() {
    location.reload();
  }, next);
}
