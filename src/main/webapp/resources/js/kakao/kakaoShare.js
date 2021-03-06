// <![CDATA[
Kakao.init("34da3f8ea3cee4344a9e7d946456faf7"); // 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.Link.createDefaultButton({ // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
	container : '#kakao-link-btn',
	objectType : 'feed',
	content : {
		title : $("#kakao-share-title").text(), // 리뷰 제목
		description : '#' + $("#kakao-share-category").text().split("/")[0], // Tag
		imageUrl : "http://52.78.105.168:8080" + $("#kakao-share-titleImg").val(), // 이미지 URL
		link : {
			mobileWebUrl : "http://52.78.105.168:8080/blog/review/detail/" + $("#kakao-share-url").val(),
			webUrl : "http://52.78.105.168:8080/blog/review/detail/" + $("#kakao-share-url").val()
		}
	},
	social : {
		likeCount : Number($("#reviewLikeCnt").text()),
		commentCount : Number($("#cCnt").text())
	// sharedCount : 845
	},
	buttons : [ {
		title : '웹으로 보기',
		link : {
			mobileWebUrl : "http://52.78.105.168:8080/blog/review/detail/" + $("#kakao-share-url").val(),
			webUrl : "http://52.78.105.168:8080/blog/review/detail/" + $("#kakao-share-url").val()
		}
	}, {
		title : '앱으로 보기',
		link : {
			mobileWebUrl : "http://52.78.105.168:8080/blog/review/detail/" + $("#kakao-share-url").val(),
			webUrl : "http://52.78.105.168:8080/blog/review/detail/" + $("#kakao-share-url").val()
		}
	} ]
});
// ]]>
