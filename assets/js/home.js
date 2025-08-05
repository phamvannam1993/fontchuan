
var search = ""
function getFont(page = 1, limit = 20, search = '') {
    var category_id = $('#category_id').val()
    fetch("/api/fonts?page="+page+"&limit="+limit+"&search="+search+"&category_id="+category_id)
    .then(res => res.text())
    .then(data => {
        $("#box-product").html(data)
    })
    .catch(err => {
        console.error("Lỗi:", err);
    });
}
getFont()
$("body").on("click", '.jet-filters-pagination__link', function() {
    var page = $(this).text()
    getFont(page)
})
$("body").on("click", '#button-linktai-listing', function() {
    $(this).closest('.popup-fc-wrapper').find(".popup-fc-container").show()
})
$("body").on("click", ".close-popup-fc", function() {
    $('.popup-fc-wrapper').find(".popup-fc-container").hide()
})

$(".e-search-submit").click(function() {
    var search = $("#search-font").val()
    getFont(1, 20, search)
})

document.getElementById('search-font').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var search = $("#search-font").val()
        getFont(1, 20, search)
    }
});