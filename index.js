$(function() {
    var $category = $('ul li:gt(5):not(:last)')

    $category.hide()

    var $toggleBtn = $('div.showmore > a')

    $toggleBtn.click(function() {
        if ($category.is(":visible")) {
            $category.hide();
            $(this).find('span').text("显示全部品牌");
            $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('索尼')").removeClass("promoted");
        } else {
            $category.show();
            $(this).find('span').text("显示精简品牌")

            $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('索尼')").addClass("promoted");
        }

        return false; //超链接不跳转
    })
})