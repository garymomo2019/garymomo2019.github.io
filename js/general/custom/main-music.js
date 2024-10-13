$(document).ready(function() {

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 12;

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

	var passTarget = null;
	var passLock = false;

	$(".music-cover").on("click tap", function() {

		if (passLock) {
			return;
		}
		passLock = true;
		passTarget = $(this);
		var coverTL1 = new TimelineMax({ onComplete:nextCover });
		coverTL1.to(passTarget, 0.5, { scale: 0.2 })
		.to(passTarget, 0.3, { x: -200, autoAlpha: 0 });
	});

	function nextCover() {

		passTarget.hide();
		var coverTL2 = new TimelineMax({ onComplete:finishCover });
		var target = passTarget.parents(".music-items").find(".music-intro-1");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 });
		target = passTarget.parents(".music-items").find(".music-intro-2");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 }, "-=1");
		target = passTarget.parents(".music-items").find(".music-intro-3");
		target.show();
		coverTL2.from(target, 1, { x: 200, autoAlpha: 0 }, "-=1");
		$("html, body").animate({scrollTop: $("#" + passTarget.parents(".music-items").attr("id")).offset().top}, 500);
	}

	function finishCover() {
		passLock = false;
	}

	$(".music-extra-back a").on("click tap", function() {
		var urlParam = window.location.search.split("back=")[1] ? window.location.search.split("back=")[1] : "no";

		if (urlParam != "no") {
			var mainClass = urlParam.split("-")[0] ? urlParam.split("-")[0] : "no";
			var subClass = urlParam.split("-")[1] ? urlParam.split("-")[1] : "no";
			var itemClass = urlParam.split("-")[2] ? urlParam.split("-")[2] : "no";
			if (mainClass != "no" && subClass != "no" && itemClass != "no") {
				var targetClass = "";
				if (mainClass == "") {
					
				} else {
					targetClass = "music";
				}
				if (subClass == "2016") {
					location.replace("https://garymomo" + subClass + ".github.io/redirection/" + targetClass + "?item=" + itemClass);
				} else {
					location.replace("https://garymomo" + subClass + ".github.io/" + targetClass + "?item=" + itemClass);
				}
			} else {
				location.replace("https://garymomoindex.github.io/?visit=true");
			}
		} else {
			location.replace("https://garymomoindex.github.io/?visit=true");
		}
	});

	$(".btn-modal").on("click tap", function() {
		var htmlIframe1 = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/';
		var htmlIframe2 = '" allowfullscreen></iframe></div>';
		var htmlIframeSrc = '';
		var chkId = $(this).attr("id");
		if (chkId == 'adModala2-1') {
			htmlIframeSrc = 'CQcGkUOpfwQ';
		} else if (chkId == 'adModala2-2') {
			htmlIframeSrc = '_siE3FVlRYY';
		} else if (chkId == 'adModala2-3') {
			htmlIframeSrc = 'slEBbLowmus';
		} else if (chkId == 'adModalb4-1') {
			htmlIframeSrc = 'Wg4-PnXzm2c';
		} else if (chkId == 'adModalb4-2') {
			htmlIframeSrc = 'UtnwTHu0wqY';
		} else if (chkId == 'adModalb7-1') {
			htmlIframeSrc = 'rhkgWd1zKM8';
		} else if (chkId == 'adModalb7-2') {
			htmlIframeSrc = 'K2pblnWTs3Q';
		} else if (chkId == 'adModalb7-3') {
			htmlIframeSrc = '-_gyAJdVSPI';
		} else if (chkId == 'adModalb7-4') {
			htmlIframeSrc = 'QEERASnBeJI';
		} else if (chkId == 'adModalb7-5') {
			htmlIframeSrc = 'U_alZ_YOIUc';
		} else if (chkId == 'adModalb7-6') {
			htmlIframeSrc = 'AzWGjczSi9s';
		} else if (chkId == 'adModalc2-1') {
			htmlIframeSrc = '83rAKGM0FkY';
		}
		$("#adModal").find("#video-block").append(htmlIframe1 + htmlIframeSrc + htmlIframe2);
	});

	$("#adModal").on("hide.bs.modal", function() {
		$(this).find("#video-block").empty();
	});
});

$(window).on("load", function() {

	$(".loader").hide();

	var extraTL = new TimelineMax();

	extraTL.from($(".music-extra-title"), 1, { y: -200, autoAlpha: 0 })
	.from($(".music-extra-audit"), 1, { x: 400, autoAlpha: 0 }, "-=1")
	.from($(".music-video"), 1, { scale: 0.1, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-detail"), 1, { x: -200, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-line-ext"), 0.3, { autoAlpha: 0 })
	.from($(".music-extra-line"), 1, { autoAlpha: 0 });
});