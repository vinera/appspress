! function(i) {
      var o, n;
      i(".accordion__title").on("click", function() {
        o = i(this).parents(".accordion__item"), n = o.find(".accordion__text"),
          o.hasClass("accordion__item_active") ? (o.removeClass("accordion__item_active"),
            n.slideUp(300)) : (o.addClass("accordion__item_active"), n.stop(!0, !0).slideDown(300),
            o.siblings(".accordion__item_active").removeClass("accordion__item_active").children(
              ".accordion__text").stop(!0, !0).slideUp(300))
      })
    }(jQuery);