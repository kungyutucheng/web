layui.use(["element", "layer"], function() {
	var i = layui.jquery,
		e = layui.element();
	layui.layer;
	i(window).on("resize", function() {
		var e = i("#tabContainers");
		e.height(i(this).height() - 145), e.find("iframe").each(function() {
			i(this).height(e.height())
		})
	}).resize();
	var t = i("#tabTitle");
	i("#tabContainer");
	i(".layui-nav .layui-nav-item > a").each(function() {
		var a = i(this),
			l = a.data("url");
		void 0 !== l && a.on("click", function() {
			var n, s = a.html(),
				h = 0;
			if(t.find("li").each(function(e, t) {
					i(this).find("label").text() === a.text() && (h++, n = e)
				}), 0 === h) {
				s += '<i class="layui-icon layui-unselect layui-tab-close">&#x1006;</i>', e.tabAdd("page-tab", {
					title: s,
					content: '<iframe src="' + l + '"></iframe>'
				});
				var c = i(".layui-tab-content");
				c.find("iframe").each(function() {
					i(this).height(c.height())
				}), t = i("#tabTitle");
				var r = t.find("li");
				r.eq(r.length - 1).children("i.layui-tab-close").on("click", function() {
					e.tabDelete("page-tab", i(this).parent("li").index())
				}), e.tabChange("page-tab", r.length - 1)
			} else e.tabChange("page-tab", n)
		})
	}), i("#tabTitle").children("li:first-child").find("i").remove(), i(".layui-side .layui-nav-title").click(function() {
		var e = i(this).attr("nav-item-num"),
			t = i(this).find(".layui-icon");
		i(this).hasClass("item-hide") ? (i(this).nextAll(".layui-nav-item").slice(0, e).slideToggle(100), i(this).addClass("item-show").removeClass("item-hide"), t.css("transform", "rotate(0deg)")) : i(this).hasClass("item-show") && (i(this).nextAll(".layui-nav-item").slice(0, e).slideToggle(100), i(this).addClass("item-hide").removeClass("item-show"), t.css("transform", "rotate(-180deg)"))
	})
});