$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var actionRLock = false;

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
			}
		}
		ori_width = width;
	}

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 8;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	var memberTL = new TimelineMax({ repeat: -1 });
	memberTL.to($(".items-member"), 3, { autoAlpha: 0.75, scale: 0.95 })
	.to($(".items-member"), 2, { autoAlpha: 1, scale: 1 });

	$(".tags span").on("click tap", function() {
		if (actionRLock) {
			return;
		}
		actionRLock = true;
		$(".items:not(.it-momoclo-red,.it-momoclo-purple,.it-momoclo-pink,.it-momoclo-yellow,.it-momoclo-all)").hide();
		var target = $(this).attr("id").split("-")[1];
		if (target == "all") {
			$(".items:not(.item-disable)").css("opacity", "1").show();
			TweenLite.from($(".items:not(.item-disable)"), 1.5, { autoAlpha: 0.1, onComplete:finishActionR });
		} else {
			$("#collapseParent ." + target + ":not(.item-disable)").css("opacity", "1").show();
			TweenLite.from($("#collapseParent ." + target + ":not(.item-disable)"), 0.8, { rotation: 90, autoAlpha: 0.1, onComplete:finishActionR });
		}
	});
	
	function finishActionR() {
		actionRLock = false;
	}
});

$(window).on("load", function() {
	$(".loader").hide();
	var setheight = "0";
	$(".mainContain").css("height","auto");
	if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
		setheight = $(window).height();
		$(".mainContain").css("height", setheight);
	}
});